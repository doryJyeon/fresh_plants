import Image from "next/image";
import style from "./page.module.css";
import logo from "/public/images/logos/logo_icon.png";
import { FaBoxes, FaCaretRight, FaShoppingCart } from "react-icons/fa";
import Link from "next/link";

export default function Home() {
  return (
    <main className={style.main__bg}>
      <section className={style.main}>
        <Image src={logo} alt={"fresh plants"} />
        <p>
          안녕하세요!<br />
          가장 <span className={style.primary}>신선하고</span>
          &nbsp;싱싱한 <span className={style.success}>식물</span> 전용 쇼핑몰
        </p>
        <h2><span className={style.primary}>Fresh</span>&emsp;<span className={style.success}>Plants</span></h2>
        <p>입니다!</p>

        <div className={style.card_box}>
          <Link className={style.card} href={"/list"}>
            <FaBoxes className={style.icon__boxs} />
            <p>모든 제품</p>
            <button>보러가기<FaCaretRight /></button>
          </Link>
          <Link className={style.card} href={"/cart"}>
            <FaShoppingCart className={style.icon__cart} />
            <p>장바구니</p>
            <button>보러가기<FaCaretRight /></button>
          </Link>
        </div>
      </section>
    </main >
  );
}
