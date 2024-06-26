import DarkModeBtn from "./DarkModeBtn";
import style from "./footer.module.css";

const Footer = () => {
  return (
    <footer className={style.footer}>
      <DarkModeBtn />

      <p>
        Logo &copy; BrandCrowd Ai
      </p>
      <p>
        이 사이트는 개인 포트폴리오용으로 실제 운영중인 사이트가 아닙니다.
      </p>
    </footer>
  );
}

export default Footer;
