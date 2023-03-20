import Navigation from './components/Navigation';
import Logo from './components/Logo';
import Rank from './components/Rank';
import ImageForm from './components/ImageForm';

const App = () => {
    return (
        <div>
            <Navigation />
            <Logo />
            <div className='grid place-content-center text-center font-mono'>
                <Rank />
                <ImageForm />
            </div>
        </div>
    );
};

export default App;
