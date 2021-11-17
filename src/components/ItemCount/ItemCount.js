import React, {useState} from 'react';
import './ItemCount.css'
export const ItemCount = () => {
    const [clicks, setClicks] = useState(0)


    const sumarClicks = () => {
        setClicks(clicks + 1)

    }
    return(
    <div onClick={sumarClicks}>
        Clicks: {clicks}
    </div>
    )
}
