import React from "react";
import {useSelector, useDispatch} from "react-redux";
import {selectGoods} from "../store/goodsSlice";
import Goods from "../components/Goods";
import {increment} from "../store/cartSlice";

function GoodsList() {

    const data = useSelector(selectGoods);
    const dispatch = useDispatch();

    let clickHandler = (e) => {
        e.preventDefault();
        let tarGet = e.target;
        if( !tarGet.classList.contains('addToCart') ) return true
        dispatch(increment(tarGet.getAttribute('data-key')));
    }

    return(
        <>
            <div className='goods-field' onClick={clickHandler}>
                {data.map( item => <Goods title = {item.title} cost ={item.cost} image = {item.image}
                articul = {item.articul} key = {item.articul} /> )}
            </div>
        </>
    );
}

export default GoodsList;