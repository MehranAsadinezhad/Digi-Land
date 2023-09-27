import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function SecondAdvertise({homeImages}) {
    const navigate = useNavigate();
    return (
        <div className="mx-3 flex items-start justify-around gap-x-2">
            <img
                src={homeImages[2].image}
                alt="firstImg"
                className="w-2/4 cursor-pointer rounded-xl"
                onClick={() => navigate(`/${homeImages[2].title}`)}
            ></img>
            <img
                src={homeImages[5].image}
                alt="secondImg"
                className="w-2/4 cursor-pointer rounded-xl"
                onClick={() => navigate(`/${homeImages[5].title}`)}
            ></img>
        </div>
    );
}
