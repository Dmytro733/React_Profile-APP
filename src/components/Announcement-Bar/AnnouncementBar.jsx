import style from "./AnnouncementBar.module.css"

const AnnounceBar = () => {
  return ( 
    <div className={style.announcement_bar}>
      <h4 className={style.announcement_bar_title}>Announcement bar</h4> 
    </div>
  );
}

export default AnnounceBar;