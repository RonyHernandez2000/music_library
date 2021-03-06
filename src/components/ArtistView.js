import {useState, useEffect} from 'react';
import {useParams, Link, useNavigate} from 'react-router-dom';

const ArtistView = () => {
    const {id} = useParams();
    const navigate = useNavigate();
    const [artistData, setArtistData] = useState([]);

    const navButtons = () => {
        return (
            <div>
                <button onClick={() => navigate(-1)}>Back</button> 
                <button onClick={() => navigate('/')}>Home</button>
            </div>
        )
    }

    useEffect(() => {
        const API_URL = `https://itunes.apple.com/lookup?id=${id}&entity=album`;
        const fetchData = async () => {
            const response = await fetch(API_URL);
            const resData = await response.json();
            setArtistData(resData.results);
        }
        fetchData();
    }, [id])

    const justAlbums = artistData.filter(entry => entry.collectionType === 'Album');

    const renderAlbums =justAlbums.map((album, i) => {
        return (
            <div key={i}>
                <Link to={`/album/${album.collectionId}`}>
                    <p>{album.collectionName}</p>
                </Link>
            </div>
        )
    })

    return (
        <div>
            {artistData.length > 0 ? <h2>{artistData[0].artistName}</h2> : <h2>Loading ...</h2>}
            {navButtons()}
            {renderAlbums}
        </div>
    )
}

export default ArtistView;