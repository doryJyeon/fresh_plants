import React from 'react';
import style from "./searchBox.module.css";
import { FaSearch } from 'react-icons/fa';

interface Props {
  id: string
}

const SearchBox: React.FC<Props> = ({ id }) => {
  return (
    <div className={style.search_box}>
      <input type="text" name="search" id={id} placeholder='검색' />
      <button type='button'><FaSearch /></button>
    </div>
  );
}

export default SearchBox;
