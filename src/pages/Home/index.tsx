import Navbar from 'components/Navbar';
import {ReactComponent as CarImage} from 'assets/images/car-header.svg'; 


import './styles.css';

const Home = () => {
  return (
    <>
      <Navbar />
      <div className='home-container'>
        <div className='home-card'>
            <div className='home-image-container'>
                <CarImage />
                <h1>O carro perfeito para você</h1>
                <p>Conheça nossos carros e dê mais um passo na realização do seu sonho</p>
            </div>
            <div className='home-content-container'>
                <button className='btn-home-catalog'>VER CATÁLOGO</button>
                <p>Comece agora a navegar</p>
            </div>
        </div>
      </div>
    </>
  );
};

export default Home;
