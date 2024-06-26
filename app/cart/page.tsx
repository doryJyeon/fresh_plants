import React from 'react';
import style from "./page.module.css";
import { FaMinus, FaPlus, FaTrashAlt } from 'react-icons/fa';

const CartPage = () => {

  return (
    <>
      <h3 className={style.title}>장바구니</h3>

      <table className={style.cart__table}>
        <thead>
          <tr>
            <th>No.</th>
            <th>식물명</th>
            <th>가격</th>
            <th>수량</th>
            <th>총액</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td></td>
            <td>원</td>
            <td className={style.btn__minus__plus}>
              <button className='btn__minus'><FaMinus /></button>
              <span>1</span>
              <button className='btn__plus'><FaPlus /></button>
            </td>
            <td>원</td>
            <td>
              <button><FaTrashAlt /></button>
            </td>
          </tr>
        </tbody>
      </table>

      <div className={style.cart__total}>
        <span>총 결제 금액 :</span>
        <span>원</span>
      </div>

      <button className={style.cart__order__btn}>결제하기</button>
    </>
  );
}

export default CartPage;
