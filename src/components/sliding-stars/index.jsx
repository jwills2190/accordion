import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa'
import './styles.css'

function StarRating({ numberOfStars = 5 }) {

    const [rating, setRating] = useState(0)
    const [hover, setHover] = useState(0);

    function handleClick(getCurrentIndex) {
        setRating(getCurrentIndex)
    }

    function handleMouseEnter(getCurrentIndex) {
        setHover(getCurrentIndex)
    }

    function handleMouseLeave() {
        setHover(rating)
    }

    return (
        <div className="star-rating">
            <h1>Star Rating Sliding Scale</h1>
            {[...Array(numberOfStars)].map((_, index) => {
                index += 1;

                return (
                    <FaStar
                        key={index}
                        className={index <= (hover || rating) ? 'active' : 'inactive'}
                        onClick={() => handleClick(index)}
                        onMouseMove={() => handleMouseEnter(index)}
                        onMouseLeave={() => handleMouseLeave(index)}
                        size={40}
                    />
                );
            })}

        </div>
    );
}

export default StarRating;