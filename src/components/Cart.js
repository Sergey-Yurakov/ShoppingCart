import React from "react";

function Cart(props) {

    return(
        <>
            <tr>
                <td>{props.title} <br/>
                    <img className='imageFruit' src={props.image} alt=""/> <br/>
                    <button className='minus' data-key = {props.articul}>-</button>
                    <button className='delete' data-key = {props.articul}>delete</button>
                </td>
                <td>{props.cost}</td>
                <td>{props.count}</td>
                <td>{props.cost * props.count}</td>
            </tr>

        </>
    );
}

export default Cart;