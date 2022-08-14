import React from  'react'

function Card({imageURL, title, price, onPlus, onFavorite}) {
    const [isLiked, setIsLiked] = React.useState(false)

    const onClickHeart = () => {
        setIsLiked(!isLiked);
    }

    const [isAdded, setIsAdded] = React.useState(false)

    const onClickPlus = () => {
        onPlus({imageURL, title, price});
        setIsAdded(!isAdded);
    }


    return (
        <div className="card">
            <div className="favorite">
                <img className="heart" src={isLiked ? "/img/heart-liked.svg" : "/img/heart-unliked.svg" } onClick={onClickHeart} alt="Heart"/>
            </div>
            <img className="photo-sneakers" width={133} height={112} src={imageURL} alt="Sneakers"/>
            <p className="name-sneakers">{title}</p>
            <div className="card-title">
                <div>
                    <p>Цена:</p>
                    <b>{price} руб.</b>
                </div>
                    <img className="button-card-plus" src={isAdded ? "/img/btn-checked.svg" : "/img/btn-plus.svg"} onClick={onClickPlus}/>
            </div>
        </div>
    );
}

export default Card;