import classNames from "classnames/bind";
import styles from "./AccountItem.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

function AccountItem() {
  return (
    <div className={cx("wrapper")}>
      <img
        className={cx("avatar")}
        src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/cf8cbbbfadf03ccadb9363123bccbef8.jpeg?x-expires=1696176000&x-signature=8AbBwVNNcTTjSu0kudBY6z%2FAVQE%3D"
        alt="Hoaa"
      />
      <div className={cx("info")}>
        <h4 className={cx("username")}>
          behong_2409
          <FontAwesomeIcon className={cx("check")} icon={faCheckCircle} />
        </h4>
        <p className={cx("name")}>Bé Hồng</p>
      </div>
    </div>
  );
}

export default AccountItem;
