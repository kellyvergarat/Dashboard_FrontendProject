import { Menu } from "antd";
import {
  AppstoreOutlined,
  ShopOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const Sidemenu = () => {
  const location = useLocation();
  const [selectedKeys, setSelectedKeys] = useState("/");

  useEffect(() => {
    const pathName = location.pathName;
    setSelectedKeys(pathName);
  }, [Location.pathName]);

  const navigate = useNavigate();
  return (
    <div className="SideMenu">
      <Menu
        className="SideMenuVertical"
        mode="vertical"
        onClick={(item) => {
          navigate(item.key);
        }}
        selectedKey={[selectedKeys]}
        items={[
          {
            label: "Dashboard",
            icon: <AppstoreOutlined />,
            key: "/",
          },
          {
            label: "Inventory",
            icon: <ShopOutlined />,
            key: "/Inventory",
          },
          {
            label: "Orders",
            icon: <ShoppingCartOutlined />,
            key: "/Orders",
          },
          {
            label: "Customers",
            icon: <UserOutlined />,
            key: "/Customers",
          },
        ]}
      ></Menu>
    </div>
  );
};

export default Sidemenu;
