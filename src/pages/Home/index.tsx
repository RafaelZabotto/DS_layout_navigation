import { ReactComponent as CarImage } from 'assets/images/car-header.svg';

import './styles.css';

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-card">
        <div className="home-image-container">
          <CarImage />
          <div className="home-image-text">
            <h1>O carro perfeito para você</h1>
            <p>
              Conheça nossos carros e dê mais um passo na realização do seu
              sonho
            </p>
          </div>
        </div>
        <div className="home-content-container">
          <button className="btn-home-catalog">VER CATÁLOGO</button>
          <p>Comece agora a navegar</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
