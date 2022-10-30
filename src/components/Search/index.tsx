import './styles.css';


const Search = () => {

    return (
        <div className='search-container'>
            <div className='search-content-container'>
                <input type="text" placeholder="Digite sua busca" />
                <button>BUSCAR</button>
            </div>
        </div>
    );
}

export default Search;