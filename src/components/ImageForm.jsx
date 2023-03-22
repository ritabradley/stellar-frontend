// ImageForm.jsx
import { useState } from 'react';
import axios from 'axios';

const ImageForm = ({ setImageUrl, setFaceBoxes }) => {
    const [imageData, setImageData] = useState('');

    const handleFileInputChange = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();

        reader.onloadend = () => {
            setImageData(reader.result);
        };

        reader.readAsDataURL(file);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('/process-image', { imageData });
            console.log(response.data);
        } catch (error) {
            console.error('Error processing image:', error);
        }
    };

    return (
        <>
            <div>
                <p className='text-xl'>Use this face detection AI to find faces in your images. Give it a spin!</p>
            </div>
            <div className='flex items-center justify-center w-full p-4'>
                <label
                    className='flex flex-col items-center justify-center w-full h-64 border-2 border-violet-300 border-dashed rounded-lg bg-violet-100 hover:bg-violet-200 shadow-lg cursor-pointer'
                    htmlFor='file-dropzone'
                >
                    <div className='flex flex-col items-center justify-center pt-5 pb-6'>
                        <svg
                            aria-hidden='true'
                            className='w-10 h-10 mb-3 text-violet-400'
                            fill='none'
                            stroke='currentColor'
                            viewBox='0 0 24 24'
                            xmlns='http://www.w3.org/2000/svg'
                        >
                            <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                strokeWidth='2'
                                d='M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12'
                            ></path>
                        </svg>
                        <p className='mb-2 text-sm text-violet-500'>
                            <span className='font-semibold'>Click to upload</span> or drag and drop
                        </p>
                        <p className='text-xs text-violet-500'>JPG or JPEG only (MAX. 800x400px)</p>
                    </div>
                    <input type='file' accept='image/jpeg, image/jpg' className='hidden' id='file-dropzone' onChange={handleFileInputChange} />
                    <button type='submit' disabled={!imageData} className='px-4 py-2 mt-4 bg-violet-500 text-white rounded-md disabled:bg-gray-400'>
                        Detect Faces
                    </button>
                </label>
            </div>
        </>
    );
};

export default ImageForm;
