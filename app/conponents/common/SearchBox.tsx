"use client";

import React, { useEffect, useState } from 'react';
import style from "../../modules/searchBox.module.css";
import { FaSearch } from 'react-icons/fa';
import { useParams, useRouter } from 'next/dist/client/components/navigation';

interface Props {
  id: string
}

const SearchBox: React.FC<Props> = ({ id }) => {
  const params = useParams();
  const { search } = params as { search: string };
  const router = useRouter();
  const [searchText, setSearchText] = useState("");

  const handelSearch = () => {
    searchText.trim() !== "" && router.push(`/list/${searchText}`);
  }

  const handelKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    e.key === "Enter" && handelSearch();
  }

  useEffect(() => {
    (search !== "" && search !== undefined) ? setSearchText(decodeURIComponent(search)) : setSearchText("");
  }, [search]);

  return (
    <div className={style.search_box}>
      <input
        type="text"
        name="search"
        id={id}
        placeholder='검색'
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        onKeyDown={handelKeyDown}
      />
      <button type='button' onClick={handelSearch}><FaSearch /></button>
    </div>
  );
}

export default SearchBox;
