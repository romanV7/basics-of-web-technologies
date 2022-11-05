import React from "react";

function GoodsCard(props) {
    return (
            <div style={{margin: "30px"}}>
                <img src={props.img} alt={props.name} width={300} height={250}/>
                <h3>{props.name}</h3>
                <p>{props.price}</p>
            </div>
    );
}
export default GoodsCard;
