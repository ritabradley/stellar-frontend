import React from 'react';

const FaceRecognition = ({ imageBytes, faceData }) => {
    const displayFaceBoxes = () => {
        return faceData.map((face, index) => {
            const { topRow, rightCol, bottomRow, leftCol } = face;
            return (
                <div
                    key={index}
                    className='absolute border-2 border-violet-500'
                    style={{
                        top: topRow,
                        right: rightCol,
                        bottom: bottomRow,
                        left: leftCol,
                    }}
                ></div>
            );
        });
    };

    return (
        <div className='relative w-full'>
            <img
                id='input-image'
                className='w-full h-full object-fit'
                src={`data:image/jpeg;base64,${imageBytes}`}
                alt='Uploaded'
            />
            {displayFaceBoxes()}
        </div>
    );
};

export default FaceRecognition;
