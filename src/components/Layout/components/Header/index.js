import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import images from "../../../../assets/images";
import Button from "../../../Button";
import Search from "../Search";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUpFromBracket,
  faCircleQuestion,
  faCoins,
  faEarthAsia,
  faEllipsisVertical,
  faGear,
  faKeyboard,
  faSignOut,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import Menu from "../../../Popper/Menu";
import { faMessage, faPaperPlane } from "@fortawesome/free-regular-svg-icons";
import Image from "../../../Image";

const cx = classNames.bind(styles);

const MENU_ITEMS = [
  {
    icon: <FontAwesomeIcon icon={faEarthAsia} />,
    title: "English",
    children: {
      title: "Language",
      data: [
        {
          type: "language",
          code: "en",
          title: "English",
        },
        {
          type: "language",
          code: "vi",
          title: "Tiếng Việt",
        },
      ],
    },
  },
  {
    icon: <FontAwesomeIcon icon={faCircleQuestion} />,
    title: "Feedback and help",
    to: "/feedback",
  },
  {
    icon: <FontAwesomeIcon icon={faKeyboard} />,
    title: "Keyboard shortcuts",
  },
];

function Header() {
  const currenUser = true;

  // Handle logic
  const handleMenuChange = (menuItem) => {
    switch (menuItem.type) {
      case "language": {
        localStorage.setItem("language", menuItem.code);
        break;
      }
      default: {
        break;
      }
    }
  };

  const userMenu = [
    {
      icon: <FontAwesomeIcon icon={faUser} />,
      title: "View profile",
      to: "/user/profile",
    },
    {
      icon: <FontAwesomeIcon icon={faCoins} />,
      title: "Get coins",
      to: "/coin",
    },
    {
      icon: <FontAwesomeIcon icon={faGear} />,
      title: "Settings",
      to: "/settings",
    },
    ...MENU_ITEMS,
    {
      icon: <FontAwesomeIcon icon={faSignOut} />,
      title: "Log out",
      to: "/logout",
      separate: true,
    },
  ];

  return (
    <header className={cx("wrapper")}>
      <div className={cx("inner")}>
        <div className={cx("logo")}>
          <img src={images.logo} alt="logo" />
        </div>
        {/* Search*/}
        <Search />

        <div className={cx("actions")}>
          {currenUser ? (
            <>
              <button className={cx("action-btn")}>
                <FontAwesomeIcon icon={faArrowUpFromBracket} />
              </button>
              <Tippy content="Message" placement="bottom">
                <button className={cx("action-btn")}>
                  <FontAwesomeIcon icon={faPaperPlane} />
                </button>
              </Tippy>
              <Tippy content="Inbox" placement="bottom">
                <button className={cx("action-btn")}>
                  <FontAwesomeIcon icon={faMessage} />
                </button>
              </Tippy>
            </>
          ) : (
            <>
              <Button text>Upload</Button>
              <Button primary>Login</Button>
            </>
          )}
          <Menu
            items={currenUser ? userMenu : MENU_ITEMS}
            onChange={handleMenuChange}
          >
            {currenUser ? (
              <Image
                className={cx("user-avatar")}
                src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/761da5f5803174d10fc199e11dc3a2d6~c5_100x100.jpeg?x-expires=1696356000&x-signature=9ExbFeI%2FGBZQ5wt31JthhAJYX9k%3D"
              />
            ) : (
              <button className={cx("more-btn")}>
                <FontAwesomeIcon icon={faEllipsisVertical} />
              </button>
            )}
          </Menu>
        </div>
      </div>
    </header>
  );
}

export default Header;
