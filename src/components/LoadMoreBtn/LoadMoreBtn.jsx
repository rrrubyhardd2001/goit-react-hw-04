import style from "./LoadMoreBtn.module.css";

export default function LoadMoreBtn({ onClick }) {
  return (
    <button className={style.LoadMoreBtnWrap} onClick={onClick}>
      Load more
    </button>
  );
}
