import style from "./NavMenu.module.css";

const NavMenu = () => {
  return (
    <nav className={style.nav}>
      <div className={style.nav_item}><a href="#"><span>H</span>ome</a></div>
      <div className={style.nav_item}><a href="#"><span>B</span>log</a></div>
      <div className={style.nav_item}><a href="#"><span>C</span>atalog</a></div>
      <div className={style.nav_item}><a href="#"><span>A</span>bout</a></div>
    </nav>
  );
}

export default NavMenu;
  