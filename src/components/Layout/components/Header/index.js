import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import images from "../../../../assets/images";
import Tippy from "@tippyjs/react/headless";
import Button from "../../../Button";

import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faSpinner,
  faXmarkCircle,
} from "@fortawesome/free-solid-svg-icons";
import { Wrapper as PopperWrapper } from "../../../Popper";
import AccountItem from "../../../AccountItem";

const cx = classNames.bind(styles);
function Header() {
  const [search, setSearch] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setSearch([]);
    }, 0);
  }, []);

  return (
    <header className={cx("wrapper")}>
      <div className={cx("inner")}>
        <div className={cx("logo")}>
          <img src={images.logo} alt="logo" />
        </div>
        <Tippy
          interactive
          visible={search.length > 0}
          render={(attr) => (
            <div className={cx("search-results")} tabIndex="-1" {...attr}>
              <PopperWrapper>
                <div className={cx("search-results-header")}>
                  <h4 className={cx("search-title")}>Accounts</h4>
                </div>
                <AccountItem />
              </PopperWrapper>
            </div>
          )}
        >
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
        </Tippy>
        <div className={cx("actions")}>
          <Button text>Upload</Button>
          <Button primary>Login</Button>
        </div>
      </div>
    </header>
  );
}

export default Header;
