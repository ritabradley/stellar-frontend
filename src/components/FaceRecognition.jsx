const FaceRecognition = ({ byteString, box }) => {
    const imageSrc = byteString ? `data:image/jpeg;base64,${byteString}` : '';

    return (
        <div className='flex justify-center'>
            <div className='mt-2'>
                {byteString ? (
                    <img src={imageSrc} alt='Uploaded' style={{ maxWidth: '100%', height: 'auto' }} />
                ) : (
                    <p>No image to display.</p>
                )}
            </div>
        </div>
    );
};

export default FaceRecognition;
