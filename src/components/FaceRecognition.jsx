const FaceRecognition = ({ byteString, box }) => {
    const imageSrc = byteString ? `data:image/jpeg;base64,${byteString}` : '';

    return (
        <div className='flex justify-center'>
            {byteString ? (
                <img src={imageSrc} alt='Uploaded' style={{ maxWidth: '800px', height: '400px' }} />
            ) : (
                <p>No image to display.</p>
            )}
        </div>
    );
};

export default FaceRecognition;
