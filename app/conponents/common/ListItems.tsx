"use client";

import { PlantsDataProps } from '@/app/interfaces/plantsProps';
import React, { useEffect, useState } from 'react';
import style from "@/app/modules/listItems.module.css";
import { FaCartArrowDown } from 'react-icons/fa';
import { readStorage, updateStorage } from '@/app/utils/LocalStorage';
import Toast from './Toast';

interface Props {
  getData: PlantsDataProps
}

const ListItems: React.FC<Props> = ({ getData }) => {
  const [toast, setToast] = useState({ show: false, message: "" });
  const [cartItems, setCartItems] = useState(readStorage("cartItems") || {});

  // 토스트 메시지
  const showToast = (message: string) => {
    setToast({ show: true, message });
    setTimeout(() => {
      setToast({ show: false, message });
    }, 1800);
  };

  useEffect(() => {
    updateStorage("cartItems", cartItems);
  }, [cartItems]);

  // 장바구니 저장
  const updateCartItem = (id: string) => {
    // 기존에 아이템 있는지 체크
    if (cartItems && cartItems[id]) {
      setCartItems({
        ...cartItems,
        [id]: {
          ...cartItems[id],
          count: cartItems[id].count + 1
        }
      })
    } else {
      setCartItems({
        ...cartItems,
        [id]: {
          name: getData[id].name,
          price: getData[id].price,
          count: 1
        }
      })
    }

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
