import classNames from "classnames/bind";
import Tippy from "@tippyjs/react/headless";
import React, { useState } from "react";
import { Wrapper as PopperWrapper } from "../../../components/Popper";
import styles from "./Menu.module.scss";
import MenuItem from "./MenuItem";
import Header from "./header";

const cx = classNames.bind(styles);
const defaultFn = () => {};

function Menu({ children, items = [], onChange = defaultFn }) {
  const [history, setHistory] = useState([
    {
      data: items,
    },
  ]);
  const current = history[history.length - 1];

  const renderItems = () => {
    return current.data.map((item, index) => {
      const isParent = !!item.children;

      return (
        <MenuItem
          key={index}
          data={item}
          onClick={() => {
            if (isParent) {
              setHistory((prev) => [...prev, item.children]);
            } else {
              onChange(item);
            }
          }}
        />
      );
    });
  };

  return (
    <Tippy
      offset={[14, 10]}
      delay={[0, 500]}
      interactive
      placement="bottom-end"
      render={(attr) => (
        <div className={cx("menu-list")} tabIndex="-1" {...attr}>
          <PopperWrapper className={cx("menu-popper")}>
            {history.length > 1 && (
              <Header
                title="Language"
                onBack={() =>
                  setHistory((prev) => prev.slice(0, prev.length - 1))
                }
              />
            )}
            {renderItems()}
          </PopperWrapper>
        </div>
      )}
      onHide={() => setHistory((prev) => prev.slice(0, 1))}
    >
      {children}
    </Tippy>
  );
}

export default Menu;
