import {useState} from "react";
import Navigation from "./components/Navigation";
import Logo from "./components/Logo";
import Rank from "./components/Rank";
import ImageForm from "./components/ImageForm";
import FaceRecognition from "./components/FaceRecognition";
import ParticlesBg from "particles-bg";

const App = () => {
	const [imageBytes, setImageBytes] = useState("");
	const [faceData, setFaceData] = useState([]);

	const handleImageUpload = async (file) => {
		try {
			const reader = new FileReader();
			reader.readAsDataURL(file);
			reader.onload = () => {
				const base64Image = reader.result.split(",")[1];
				setImageBytes(base64Image);
				// Call Clarifai API with base64Image here

				const PAT = "9e8702498a2b42b38c254d821f529f5a";
				const USER_ID = "e8pb750e3eqt";
				const APP_ID = "stellar-face-finder";
				const MODEL_ID = "face-detection";
				const MODEL_VERSION_ID = "6dc7e46bc9124c5c8824be4822abe105";
				const raw = JSON.stringify({
					"user_app_id": {
						"user_id": USER_ID,
						"app_id": APP_ID
					},
					"inputs": [
						{
							"data": {
								"image": {
									"base64": base64Image
								}
							}
						}
					]
				});
				const requestOptions = {
					method: "POST",
					headers: {
						"Accept": "application/json",
						"Authorization": "Key " + PAT
					},
					body: raw
				};
				fetch("https://api.clarifai.com/v2/models/" + MODEL_ID + "/versions/" + MODEL_VERSION_ID + "/outputs", requestOptions)
					.then(response => response.json())
					.then(result => {
						const faceRegions = result.outputs[0].data.regions;
						const imageElement = document.getElementById("input-image");
						const width = Number(imageElement.width);
						const height = Number(imageElement.height);
						const faceData = faceRegions.map(region => {
							const boundingBox = region.region_info.bounding_box;
							return {
								topRow: boundingBox.top_row * height,
								rightCol: width - boundingBox.right_col * width,
								bottomRow: height - boundingBox.bottom_row * height,
								leftCol: boundingBox.left_col * width,
							};
						});
						handleFaceData(faceData);
					})
					.catch(error => console.log("error", error));
			};
		} catch (error) {
			console.error("Error uploading image:", error);
		}
	};

	const handleFaceData = (data) => {
		setFaceData(data);
	};

	return (
		<div className="font-mono">
			<ParticlesBg color="#F5F3FF" num={250} type="cobweb" bg={true}/>
			<Navigation/>
			<Logo/>
			<div
				className="grid place-content-center text-center w-full max-w-4xl mt-6 mx-auto">
				<Rank/>
				<ImageForm onImageUpload={handleImageUpload}/>
				<FaceRecognition imageBytes={imageBytes} faceData={faceData}/>

			</div>
		</div>
	);
};

export default App;