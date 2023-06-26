import {Menu} from "antd";
import {AppstoreOutlined, ShopOutlined, ShoppingCartOutlined, UserOutlined} from "@ant-design/icons";
const Sidemenu = () => {
    return (
        <div className="SideMenu">
            <Menu items={[
                {
                    label:"Dashboard",
                    icon:<AppstoreOutlined/>,
                    key:"/",
                },
                {
                    label:"Inventory",
                    icon:<ShopOutlined/>,
                    key:"/Inventory",
                },
                {
                    label:"Orders",
                    icon:<ShoppingCartOutlined/>,
                    key:"/Orders",
                },
                {
                    label:"Customers",
                    icon:<UserOutlined/>,
                    key:"/Customers",
                },
            ]}>

            </Menu>
        </div>
    );
}

export default Sidemenu;