import React from 'react';
import style from "./page.module.css";
import { FaCartArrowDown } from 'react-icons/fa';
import SearchBox from '@/src/conponents/common/SearchBox';
import { PlantsData } from '@/src/data/PlantsData';

const ListPage = () => {

  return (
    <>
      <div className={style.search_area}>
        <SearchBox id={'listSearch'} />
      </div>

      <div className={style.cards}>
        {Object.keys(PlantsData).map((key) => (
          <article className={style.card} key={key}>
            <div
              className={style.card__img}
              style={{ backgroundImage: `url('/images/plants/${PlantsData[key].img_url}.jpg')` }}
            />
            <h3>{PlantsData[key].name}</h3>
            <p>{PlantsData[key].price.toLocaleString()}</p>
            <button className={style.card__btn} ><FaCartArrowDown /></button>
          </article>
        ))}
      </div>
    </>
  );
}

export default ListPage;
