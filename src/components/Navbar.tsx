import React, { useState, useEffect } from "react";
import { Button, Menu, Typography, Avatar } from "antd";
import { Link, useLocation } from "react-router-dom";
import {
  HomeOutlined,
  MoneyCollectOutlined,
  BulbOutlined,
  FundOutlined,
  MenuOutlined,
} from "@ant-design/icons";
import icon from "../assets/images/cryptocurrency.png";
import type { MenuProps } from "antd";
type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: "group"
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem(<Link to="/">Home</Link>, "/", <HomeOutlined />),
  getItem(
    <Link to="/cryptocurrencies">Cryptocurrencies</Link>,
    "/cryptocurrencies",
    <FundOutlined />
  ),
  getItem(
    <Link to="/exchanges">Exchanges</Link>,
    "/exchanges",
    <MoneyCollectOutlined />
  ),
  getItem(<Link to="/news">News</Link>, "/news", <BulbOutlined />),
];
export const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(true);
  const [screenSize, setScreenSize] = useState(0);
  let location = useLocation();

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (screenSize <= 800) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);

  return (
    <div className="nav-container">
      <div className="logo-container">
        <Avatar src={icon} size="large" />
        <Typography.Title level={2} className="logo">
          <Link to="/">Coin Tracker</Link>
        </Typography.Title>
        <Button
          className="menu-control-container"
          onClick={() => setActiveMenu(!activeMenu)}
        >
          <MenuOutlined />
        </Button>
      </div>
      {activeMenu && (
        <Menu
          theme="dark"
          defaultSelectedKeys={["/"]}
          selectedKeys={[location.pathname]}
          items={items}
        />
      )}
    </div>
  );
};
