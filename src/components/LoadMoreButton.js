import styles from "./LoadMoreButton.module.css";

function MoreLessButton({ children, onClick }) {
  return (
    <button type="button" className={styles.loadMoreBtn} onClick={onClick}>
      {children}
    </button>
  );
}

export default MoreLessButton;
