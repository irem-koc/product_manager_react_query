import Image from "next/image";
import style from "./style.module.css";
const Nav = () => {
  return (
    <header className={style.container}>
      <div className={style.logoContainer}>
        <Image alt="logo" src={"/logo-food.webp"} width={100} height={100} />
        <h1 className={style.header}>... Company</h1>
      </div>
      <form>
        <input type="text" placeholder="Aradığım ürün..." />
      </form>
    </header>
  );
};

export default Nav;
