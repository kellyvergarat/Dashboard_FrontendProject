import {Space} from "antd";
import './App.css';
import Header from './Components/Header/Header';
import Content from './Components/Content/Content';
import Sidemenu from './Components/Sidemenu/Sidemenu';
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="App">     
    <Header className="App-header"/ >
      <Space className="SideMenuAndContent">
        <Sidemenu/>
        <Content/>
      </Space>
      <Footer/>
    </div>
  );
}

export default App;
