import Image from "next/image";
import styles from "./header.module.css";
import headerLogo from "/public/images/logos/logo_v.png";
import SearchBox from "../common/SearchBox";
import Link from "next/link";
import { FaBoxes, FaShoppingCart } from "react-icons/fa";

const Header = () => {
  return (
    <header>
      <Image
        src={headerLogo}
        alt="fresh plants logo"
        priority
        className={styles.logo}
      />

      <SearchBox id="headerSearch" />

      <ul className={styles.ul}>
        <li>
          <Link href={"/list"}>
            <FaBoxes />&emsp;모든 제품
          </Link>
        </li>

        <li>
          <Link href={"/cart"}>
            <FaShoppingCart />&emsp;장바구니
          </Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;
