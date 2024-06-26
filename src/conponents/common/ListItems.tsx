import { PlantsDataProps } from '@/src/interfaces/plantsProps';
import React from 'react';
import style from "./../../modules/ListItems.module.css";
import { FaCartArrowDown } from 'react-icons/fa';

interface Props {
  getData: PlantsDataProps
}

const ListItems: React.FC<Props> = ({ getData }) => {
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
          <button className={style.card__btn} ><FaCartArrowDown /></button>
        </article>
      ))}
    </>
  );
}

export default ListItems;
