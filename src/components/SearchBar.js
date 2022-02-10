import {useContext} from 'react';
import {SearchContext} from '../context/SearchContext';

function SearchBar(){
    // let [searchTerm, setSearchTerm] = useState('')
    const {term, handleSearch} = useContext(SearchContext)

    return (
            <form>
                <input ref={term} type="text" placeholder="Music"/>
                <button onClick={(e) => handleSearch(e, term.current.value)}>Submit</button>
            </form>
    )
}

export default SearchBar;