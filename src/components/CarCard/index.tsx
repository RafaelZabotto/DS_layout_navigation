import CarImg from 'assets/images/car-card.png';
import Search from 'components/Search';
import './styles.css';

const CarCard = () => {
    return (
        <>
        <div className='catalog-content-container'>
            <div className='catalog-image-container'>
                <img src={CarImg} alt="nome do carro"/>
            </div>
            <div className='catalog-text-container'>
                <h1>Audi Supra TT</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, nisi</p>
            </div>
            <div className='catalog-button-content'>
                <button className="btn-buy-catalog">COMPRAR</button>
            </div>
        </div>
        </>

    );
}

export default CarCard;