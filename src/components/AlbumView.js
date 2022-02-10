import {useState, useEffect} from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const AlbumView = () => {
    const {id} = useParams();
    const navigate = useNavigate();
    const [albumData, setAlbumData] = useState([]);

    const navButtons = () => {
        return (
            <div>
                <button onClick={() => navigate(-1)}>Back</button>
                <button onClick={() => navigate('/')}>Home</button>
            </div>
        )
    }

    useEffect(() => {
        const API_URL = `https://itunes.apple.com/lookup?id=${id}&entity=song`;
        const fetchData = async () => {
            const response = await fetch(API_URL);
            const resData = await response.json();
            setAlbumData(resData.results);
        }
        fetchData();
    }, [id])

    const justSongs = albumData.filter(entry => entry.kind === 'song');

    const renderSongs = justSongs.map((song,i) => {
        return (
            <div key={i}>
                <p>{song.trackName}</p>
            </div>
        )
    })

    return (
        <div>
            {albumData.length > 0 ? <h2>{albumData[0].collectionName}</h2> : <h2>Loading ...</h2>}
            {navButtons()}
            {renderSongs}
        </div>
    )
}

export default AlbumView;