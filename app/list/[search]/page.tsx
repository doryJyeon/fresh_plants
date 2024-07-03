"use client";

import React, { useEffect, useState } from 'react';
import { PlantsData } from '@/app/data/PlantsData';
import ListItems from '@/app/conponents/common/ListItems';
import { PlantsDataProps } from '@/app/interfaces/plantsProps';
import { useParams } from 'next/navigation';
import DataStateCom from '@/app/conponents/common/DataStateCom';

const SearchPage = () => {
  const params = useParams();
  const { search } = params as { search: string };
  const [datas, setDatas] = useState<PlantsDataProps>({});
  const [state, setState] = useState("");

  useEffect(() => {
    setState("loading");

    if (search) {
      const deCodeSearch = decodeURIComponent(search.toLowerCase());
      const filtered = Object.entries(PlantsData).reduce((acc, [key, plant]) => {
        if (
          plant.name.toLowerCase().includes(deCodeSearch) ||
          plant.tag.toLowerCase().includes(deCodeSearch)
        ) {
          acc[key] = plant;
        }
        return acc;
      }, {} as PlantsDataProps);

      setState("");
      Object.keys(filtered).length > 0 ? setDatas(filtered) : setState("no data");
    } else {
      setState("no search");
    }
  }, [search]);

  return (
    <>
      {state !== "" && <DataStateCom state={state} noDataMent={'검색된 식물이 없습니다.'} />}
      {state === "" && <ListItems getData={datas} />}
    </>
  );
}

export default SearchPage;
