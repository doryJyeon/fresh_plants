"use client";

import { PlantsDataProps } from '@/app/interfaces/plantsProps';
import React, { useState } from 'react';
import style from "./../../modules/ListItems.module.css";
import { FaCartArrowDown } from 'react-icons/fa';
import { readStorage, updateStorage } from '@/app/utils/LocalStorage';
import Toast from './Toast';

interface Props {
  getData: PlantsDataProps
}

const ListItems: React.FC<Props> = ({ getData }) => {
  const [toast, setToast] = useState({ show: false, message: "" });

  // 토스트 메시지
  const showToast = (message: string) => {
    setToast({ show: true, message });
    setTimeout(() => {
      setToast({ show: false, message });
    }, 1800);
  };

  // 장바구니 저장
  const updateCartItem = (id: string) => {
    let cartItems = readStorage("cartItems");

    // 기존에 아이템 있는지 체크
    if (cartItems && cartItems[id]) {
      cartItems[id] = { ...cartItems[id], count: cartItems[id].count + 1 };
    } else {
      cartItems[id] = {
        name: getData[id].name,
        price: getData[id].price,
        count: 1
      }
    }
    updateStorage("cartItems", { ...cartItems });
    showToast("장바구니에 추가했습니다.");
  }

  return (
    <>
      {Object.keys(getData).map((key) => (
        <article className={style.card} key={key}>
          <div
            className={style.card__img}
            style={{ backgroundImage: `url('/images/plants/${getData[key].img_url}.jpg')` }}
          />
          <h3>{getData[key].name}</h3>
          <p>{getData[key].price.toLocaleString()}</p>
          <button className={style.card__btn} onClick={() => updateCartItem(`${key}`)}><FaCartArrowDown /></button>
        </article>
      ))}

      <Toast message={toast.message} show={toast.show} />
    </>
  );
}

export default ListItems;
