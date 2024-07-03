import SearchBox from "@/app/conponents/common/SearchBox";
import style from "./page.module.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className={style.search_area}>
        <SearchBox id={'listSearch'} />
      </div>

      {children}
    </>
  );
}