// App.jsx
import { useState } from 'react';
import axios from 'axios';
import Navigation from './components/Navigation';
import Logo from './components/Logo';
import Rank from './components/Rank';
import ImageForm from './components/ImageForm';
import FaceRecognition from './components/FaceRecognition';
import ParticlesBg from 'particles-bg';

const App = () => {
    const [imageUrl, setImageUrl] = useState('');
    const [faceBoxes, setFaceBoxes] = useState([]);

    return (
        <div className='font-mono'>
            <ParticlesBg color='#F5F3FF' num={250} type='cobweb' bg={true} />
            <Navigation />
            <Logo />
            <div className='grid place-content-center text-center w-full max-w-4xl mt-6 mx-auto'>
                <Rank />
                <ImageForm setImageUrl={setImageUrl} setFaceBoxes={setFaceBoxes} />
                <FaceRecognition imageUrl={imageUrl} faceBoxes={faceBoxes} />
            </div>
        </div>
    );
};

export default App;
