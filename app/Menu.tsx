"use client";

import Footer from '@/app/conponents/Footer/Footer';
import Header from '@/app/conponents/Header/Header';
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react';

const Menu = () => {
  const pathName = usePathname();
  const [hide, setHide] = useState(true);

  useEffect(() => {
    // 페이지 이동 시 hide 변경
    setHide(true);
  }, [pathName]);

  return (
    <>
      <button className={`header__btn ${!hide && "show"}`} onClick={() => setHide(!hide)}>
        <div />
        <div />
        <div />
      </button>

      <section className={`header__footer ${hide && "hide"}`}>
        <Header />
        <Footer />
      </section>
    </>
  );
}

export default Menu;
