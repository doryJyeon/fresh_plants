"use client";

import { PlantsDataProps } from '@/src/interfaces/plantsProps';
import React from 'react';
import style from "./../../modules/ListItems.module.css";
import { FaCartArrowDown } from 'react-icons/fa';
import { readStorage, updateStorage } from '@/src/utils/LocalStorage';

interface Props {
  getData: PlantsDataProps
}

const ListItems: React.FC<Props> = ({ getData }) => {
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
    </>
  );
}

export default ListItems;
