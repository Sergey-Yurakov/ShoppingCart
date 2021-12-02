import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {selectGoods} from "../store/goodsSlice";
import {dlete, minus, selectCart} from "../store/cartSlice";
import Cart from "../components/Cart";


function CartList() {

    //This dispath
    const dispatch = useDispatch();

    //This initaialState
    const goods = useSelector(selectGoods);
    const cart = useSelector(selectCart);

    const goodsOdj = goods.reduce( (accum, item) => {
        accum[item['articul']] = item;
        return accum;
    }, {} );

    //This listener
    let clickHandler = (e) => {
        e.preventDefault();
        let target = e.target;

        if(target.classList.contains('delete')) {
            dispatch(dlete(target.getAttribute('data-key')));

        }
        else if (target.classList.contains('minus')) {
            dispatch(minus(target.getAttribute('data-key')));
        }

    }

    //Проверяем наличие товаров в корзине и если их нет, то скрываем ее
    let table = '';
    if(Object.keys(cart).length !== 0) {
       table =  <table onClick={clickHandler} >
            <thead>
            <tr>
                <th>Title</th>
                <th>Cost</th>
                <th>Count</th>
                <th>All products</th>
            </tr>
            </thead>
            <tbody>
            {Object.keys(cart).map( (item) =>
                <Cart key = {goodsOdj[item]['articul']} title = {goodsOdj[item]['title']} cost = {goodsOdj[item]['cost']}
                      count = {cart[item]} image = {goodsOdj[item]['image']} articul = {goodsOdj[item]['articul']} />
            )}
            </tbody>
            <tfoot>
            <tr>
                <td colSpan='3' style={{textAlign:'right'}}>All price </td>
                <td>
                    {Object.keys(cart).reduce( (accum,item) => {
                        return  accum += goodsOdj[item]['cost']* cart[item] },0 )}
                </td>
            </tr>
            </tfoot>
        </table>
    }
    else {
        table = ''
    }

    return(
        <>
            {table}
        </>
    );
}

export default CartList;