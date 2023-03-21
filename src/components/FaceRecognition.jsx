const FaceRecognition = ({ byteString, box }) => {
    const imageSrc = byteString ? `data:image/jpeg;base64,${byteString}` : '';

    return (
        <div>
            {byteString ? (
                <img src={imageSrc} alt='Uploaded' style={{ maxWidth: '100%', height: '100%' }} />
            ) : (
                <p>No image to display.</p>
            )}
        </div>
    );
};

export default FaceRecognition;
