"use client";

import { useEffect, useState } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';
import style from "./darkMode.module.css";
import { readStorage, updateStorage } from '@/src/utils/LocalStorage';

const DarkModeBtn = () => {
  const [darkMode, setDarkMode] = useState(false);

  // 이전에 다크 모드였는지 체크
  useEffect(() => {
    const savedMode = readStorage("thema");
    if (savedMode) {
      setDarkMode(savedMode === "dark");
    }
  }, []);

  useEffect(() => {
    document.body.classList.toggle("dark", darkMode);
    updateStorage("thema", darkMode ? "dark" : "light");
  }, [darkMode]);

  return (
    <button
      className={style.button}
      onClick={() => setDarkMode(!darkMode)}
    >
      {!darkMode ? <FaSun className={style.thema__sun} /> : <FaMoon className={style.thema__moon} />}
      &emsp;테마 변경
    </button>
  );
}

export default DarkModeBtn;
