import React, {useState} from 'react';
import {Link} from 'react-router-dom';

function GalleryItem(props) {
    let galleryItemStyle = {
        "display": "inline-block"
    }

    const simpleStyle = {
        'width': '25vw',
        'height': '25vh',
        'border': '1px solid black',
        'margin': '2px'
    }
    
    const detailedStyle = {
        'width': '80vw',
        'height': '25vh',
        'border': '1px solid black',
        'margin': '2px',
        'backgroundImage': `url(${props.item.artworkUrl100})`,
        'backgroundRepeat': 'no-repeat',
        'backgroundSize': 'cover',
        'color': 'yellow'
    }
    
    let [view, setView] = useState(false);

    const simpleView = () => {
        return (
            <div style={simpleStyle}>
                <h3>{props.item.trackName}</h3>
                <h4>{props.item.collectionName}</h4>
                <img src={props.item.artworkUrl100} alt="" />
            </div>
        )
    }

    const detailedView = () => {
        return (
            <div style={detailedStyle}>
                <h2>{props.item.trackName}</h2>
                <h3>
                    <Link to={`/artist/${props.item.artistId}`}>
                        Artist: {props.item.artistName}
                    </Link>
                </h3>
                <h3>
                    <Link to={`/album/${props.item.collectionId}`}>
                        Collection: {props.item.collectionName}
                    </Link>  
                </h3>
                <h4>{props.item.primaryGenreName}</h4>
                <h4>{props.item.releaseDate}</h4>
            </div>
        )
    }
    
    return (
        <div onClick={() => {setView(!view)}} style={galleryItemStyle} >
            {view ? detailedView() : simpleView()}
        </div>
    )
}

export default GalleryItem;