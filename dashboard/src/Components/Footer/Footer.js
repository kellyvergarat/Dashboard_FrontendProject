import {Typography} from "antd";
const Footer = () => {
    return (
        <div className="AppFooter">
            <Typography.Link href="tel:+15146738844">tel:+15146738844</Typography.Link>
            <Typography.Link href="https://react.dev/" target={"_blank"}>Privacy Policy</Typography.Link>
            <Typography.Link href="https://create-react-app.dev/" target={"_blank"}>Terms of Use</Typography.Link>
        </div>
    );
}
export default Footer;