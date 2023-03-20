const Rank = ({ name = 'Rita', entries = 7 }) => {
    return (
        <div>
            <p>
                {name}, you've submitted {entries} images for detection
            </p>
        </div>
    );
};

export default Rank;
