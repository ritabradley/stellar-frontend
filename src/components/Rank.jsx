const Rank = ({ name = 'Rita', entries = 7 }) => {
    return (
        <div>
            <p className='text-xl text-violet-50'>
                {name}, you've submitted <span className='text-2xl font-bold'>{entries} </span>images for detection
            </p>
        </div>
    );
};

export default Rank;
