import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import images from "../../../../assets/images";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faSpinner, faXmarkCircle } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);
function Header() {
  return (
    <header className={cx("wrapper")}>
      <div className={cx("inner")}>
        <div className={cx("logo")}>
          <img src={images.logo} alt="logo" />
        </div>
        <div className={cx("search")}>
          <form className={cx("search-form")} method="GET">
            <input type="text" placeholder="Search" />
            <button className={cx("clear-btn")}>
              <FontAwesomeIcon icon={faXmarkCircle} />
            </button>
            <FontAwesomeIcon className={cx("loading")} icon={faSpinner} />
            <button className={cx("search-btn")}>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
          </form>
        </div>
        <div className={cx("actions")}></div>
      </div>
    </header>
  );
}

export default Header;
