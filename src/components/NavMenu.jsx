import style from "./NavMenu.module.css";

const NavMenu = () => {
  return (
    <nav className={style.nav}>
      <div className={style.nav_item}><a href="#">Home</a></div>
      <div className={style.nav_item}><a href="#">Blog</a></div>
      <div className={style.nav_item}><a href="#">Catalog</a></div>
      <div className={style.nav_item}><a href="#">About</a></div>
    </nav>
  );
}

export default NavMenu;
  