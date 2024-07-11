"use client";

import React, { useEffect, useState } from 'react';
import style from "./page.module.css";
import { FaMinus, FaPlus, FaTrashAlt } from 'react-icons/fa';
import { readStorage, updateStorage } from '@/app/utils/LocalStorage';
import { CartStoragePtops } from '@/app/interfaces/cartStorageProps';

const CartPage = () => {
  const [cartItems, setItems] = useState<CartStoragePtops>(readStorage("cartItems"));
  const [totalPrice, setTotalPrice] = useState(0);

  const handelCountPlus = (id: string) => {
    setItems({ ...cartItems, [id]: { ...cartItems[id], count: cartItems[id].count + 1 } })
  }
  const handelCountMinus = (id: string) => {
    if (cartItems[id].count > 1) {
      setItems({ ...cartItems, [id]: { ...cartItems[id], count: cartItems[id].count - 1 } })
    }
  }
  const handelDeleteProduct = (id: string) => {
    const newItems = Object.fromEntries(
      Object.entries(cartItems).filter(([key]) => key !== id)
    )
    setItems(newItems);
  }

  // 구매 확인
  const checkCart = () => {
    if (Object.keys(cartItems).length < 1) {
      alert("구매 할 상품이 없습니다.");
    } else {
      confirm("구매하시겠습니까?\n\n\n(구매 부분은 미제작입니다.😢)");
    }
  }

  // total price
  useEffect(() => {
    let addPrice = 0;

    cartItems && Object.values(cartItems).forEach(items => {
      addPrice += (items.price * items.count);
    })
    setTotalPrice(addPrice);

    // localStorage update
    updateStorage("cartItems", cartItems);
  }, [cartItems]);

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
          {cartItems && Object.entries(cartItems).map(([key, items], index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{items.name}</td>
              <td>{items.price.toLocaleString()}원</td>
              <td className={style.btn__minus__plus}>
                <button onClick={() => handelCountMinus(`${key}`)} className='btn__minus'><FaMinus /></button>
                <span>{items.count}</span>
                <button onClick={() => handelCountPlus(`${key}`)} className='btn__plus'><FaPlus /></button>
              </td>
              <td>{(items.price * items.count).toLocaleString()}원</td>
              <td>
                <button onClick={() => handelDeleteProduct(`${key}`)}><FaTrashAlt /></button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className={style.cart__total}>
        <span>총 결제 금액 :</span>
        <span>{totalPrice.toLocaleString()}원</span>
      </div>

      <button onClick={() => checkCart()} className={style.cart__order__btn}>결제하기</button>
    </>
  );
}

export default CartPage;
