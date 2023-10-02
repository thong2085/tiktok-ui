import classNames from "classnames/bind";
import styles from "./Search.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faXmarkCircle,
  faSpinner,
} from "@fortawesome/free-solid-svg-icons";
import { Wrapper as PopperWrapper } from "../../../Popper";
import AccountItem from "../../../AccountItem";
import HeadlessTippy from "@tippyjs/react/headless";
import { useEffect, useState, useRef } from "react";

const cx = classNames.bind(styles);

function Search() {
  const [searchValue, setSearchValue] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [showResults, setShowResults] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const inputRef = useRef();

  useEffect(() => {
    if (!searchValue.trim()) {
      setSearchResults([]);
      return;
    }
    setIsLoading(true);
    fetch(
      `https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeURIComponent(
        searchValue,
      )}&type=less`,
    )
      .then((res) => res.json())
      .then((res) => {
        setSearchResults(res.data);
        setIsLoading(false);
      })
      .catch(() => {
        setIsLoading(false);
      });
  }, [searchValue]);

  const handleClear = () => {
    setSearchValue("");
    setSearchResults([]);
    inputRef.current.focus();
  };

  const handleHideResults = () => setShowResults(false);

  return (
    <HeadlessTippy
      interactive
      visible={showResults && searchResults.length > 0}
      render={(attr) => (
        <div className={cx("search-results")} tabIndex="-1" {...attr}>
          <PopperWrapper>
            <div className={cx("search-results-header")}>
              <h4 className={cx("search-title")}>Accoutns</h4>
            </div>
            {searchResults.map((item) => (
              <AccountItem key={item.id} data={item} />
            ))}
          </PopperWrapper>
        </div>
      )}
      onClickOutside={handleHideResults}
    >
      <div className={cx("search")}>
        <form className={cx("search-form")} method="GET">
          <input
            ref={inputRef}
            value={searchValue}
            type="text"
            placeholder="Tìm kiếm"
            spellCheck={false}
            onChange={(e) => setSearchValue(e.target.value)}
            onFocus={() => setShowResults(true)}
          />
          {!!searchValue && !isLoading && (
            <button className={cx("clear-btn")} onClick={handleClear}>
              <FontAwesomeIcon icon={faXmarkCircle} />
            </button>
          )}

          {isLoading && (
            <FontAwesomeIcon className={cx("loading")} icon={faSpinner} />
          )}

          <button className={cx("search-btn")}>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </form>
      </div>
    </HeadlessTippy>
  );
}

export default Search;
