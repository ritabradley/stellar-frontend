import Tilt from 'react-parallax-tilt';
import star from '../assets/shooting-star.png';

const Logo = () => {
    return (
        <Tilt
            className='bg-main-gradient rounded shadow-md p-6'
            perspective={500}
            glareEnable={true}
            glareMaxOpacity={0.45}
            scale={1.02}
            style={{ height: 150, width: 150 }}
        >
            <div className='inner-element '>
                <img src={star} />
            </div>
        </Tilt>
    );
};

export default Logo;
