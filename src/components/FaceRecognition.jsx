// FaceRecognition.jsx
const FaceRecognition = ({ imageUrl, faceBoxes }) => {
    return (
        <div className='relative'>
            <img src={imageUrl} alt='input' className='mx-auto' width='800' height='auto' />
            {faceBoxes.map((box) => (
                <div
                    key={box.id}
                    className='absolute border-4 border-violet-500'
                    style={{
                        top: box.region_info.bounding_box.top_row * 100 + '%',
                        left: box.region_info.bounding_box.left_col * 100 + '%',
                        bottom: (1 - box.region_info.bounding_box.bottom_row) * 100 + '%',
                        right: (1 - box.region_info.bounding_box.right_col) * 100 + '%',
                    }}
                ></div>
            ))}
        </div>
    );
};

export default FaceRecognition;
