import React from 'react';
import style from "./page.module.css";
import { PlantsData } from '@/app/data/PlantsData';
import ListItems from '@/app/conponents/common/ListItems';

const ListPage = () => {
  return (
    <div className={style.cards}>
      <ListItems getData={PlantsData} />
    </div>
  );
}

export default ListPage;
