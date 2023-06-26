import { Image, Typography, Space, Badge } from "antd";
import { MailOutlined, BellFilled } from "@ant-design/icons";

const Header = () => {
    return (
        <div className="AppHeader">
            <Image width={40} src="https://w7.pngwing.com/pngs/502/794/png-transparent-white-arrow-going-up-computer-icons-dashboard-car-symbol-dashboard-icon-miscellaneous-angle-logo.png"> </Image>
            <Typography.Title> Admin Dashboard</Typography.Title>
            <Space>
                <Badge count={5} dot>
                    <MailOutlined style={{ fontSize: 24 }} /></Badge>
                <Badge count={10}>
                    <BellFilled style={{ fontSize: 24 }} /></Badge>
            </Space>
        </div>
    );
}

export default Header;