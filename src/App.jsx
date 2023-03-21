import Navigation from './components/Navigation';
import Logo from './components/Logo';
import Rank from './components/Rank';
import ImageForm from './components/ImageForm';
import ParticlesBg from 'particles-bg';

const App = () => {
    return (
        <div className='font-mono'>
            <ParticlesBg color='#F5F3FF' num={250} type='cobweb' bg={true} />
            <Navigation />
            <Logo />
            <div className='grid place-content-center text-center w-full max-w-4xl mt-6 mx-auto'>
                <Rank />
                <ImageForm />
            </div>
        </div>
    );
};

export default App;
