import Tilt from 'react-parallax-tilt';

const Logo = () => {
    return (
        <Tilt
            className='bg-main-gradient rounded shadow-md'
            perspective={500}
            glareEnable={true}
            glareMaxOpacity={0.45}
            scale={1.02}
            style={{ height: 150, width: 150 }}
        >
            <div className='inner-element'>
                <h1 className='text-2xl font-bold m-4 mt-0'>Stellar</h1>
            </div>
        </Tilt>
    );
};

export default Logo;
