import React from 'react';
import style from "./page.module.css";
import { PlantsData } from '@/src/data/PlantsData';
import ListItems from '@/src/conponents/common/ListItems';

const ListPage = () => {
  return (
    <div className={style.cards}>
      <ListItems getData={PlantsData} />
    </div>
  );
}

export default ListPage;
