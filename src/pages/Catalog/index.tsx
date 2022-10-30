import Navbar from 'components/Navbar';
import CarCard from 'components/CarCard';
import Search from 'components/Search';

const Catalog = () => {
  return (
    <>
      <Navbar />
      <div className="container my-4">
        <Search />
        <div className="row">
          <div className="col-sm-6 col-lg-4">
            <CarCard />
          </div>
          <div className="col-sm-6 col-lg-4">
            <CarCard />
          </div>
          <div className="col-sm-6 col-lg-4">
            <CarCard />
          </div>
          <div className="col-sm-6 col-lg-4">
            <CarCard />
          </div>
          <div className="col-sm-6 col-lg-4">
            <CarCard />
          </div>
          <div className="col-sm-6 col-lg-4">
            <CarCard />
          </div>
        </div>
      </div>
    </>
  );
};

export default Catalog;
