import {useContext} from 'react';
import {DataContext} from '../context/DataContext'
import GalleryItem from './GalleryItem';

function Gallery() {
    let galleryStyle = {
        "display": "flex",
        "flexWrap": "wrap"
    }
    
    const data = useContext(DataContext);

    const itemsMap = data.map((item, index) => {
        return (
            <GalleryItem item={item} key={index} />
        )
    })
    
    return (
        <div style={galleryStyle}>
            {itemsMap}
        </div>
    )
}

export default Gallery;