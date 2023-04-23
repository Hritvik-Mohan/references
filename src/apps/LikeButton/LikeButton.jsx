import { useState } from 'react';
import './LikeButton.css'

export default function LikeButton() {
    const [like, setLike] = useState(0)

    const handleDoubleClick = () => {
        setLike(like + 1)
    }

    const handleRefresh = () => {
        setLike(0)
    }

    return (
        <div className='like-button'>
            <p className='like-button__text'>Double tap to Like this picture</p>
            <div className='image-container'>
                <img onDoubleClick={handleDoubleClick} className="image-like-button" src={"https://picsum.photos/200/300"} alt="" />
                <div className="text-container">
                    <h3>{like}</h3>
                </div>
            </div>
            <button onClick={handleRefresh}>Refresh</button>
        </div>
    )
}