import Image from "next/image";
import style from "./style.module.css";
const Nav = () => {
  return (
    <header className={style.container}>
      <div>
        <Image alt="logo" src={"/m"} width={50} height={50} />
        <h1 className={style.header}>Hello</h1>
      </div>
    </header>
  );
};

export default Nav;
