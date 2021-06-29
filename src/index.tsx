import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {Col, Menu, Row} from "antd";
import "antd/dist/antd.css";
import BearButton from "./component/BearButton/BearButton";
import BearMenu from "./component/BearMenu/BearMenu";
import BearMenuItem from "./component/BearMenu/BearMenuItem";
import BearSubMenu from "./component/BearMenu/BearSubMenu";
import Test from "./component/Test/Test";
import "./component/BearMenu/test.scss";

const {SubMenu} = Menu;

const style1 = {background: '#0092ff'};


ReactDOM.render(
    <React.StrictMode>
        <Row>
            {/*组件自研！*/}
            <Col span={12}>
                <BearMenu>
                    <BearMenuItem id="apple">苹果</BearMenuItem>
                    <BearMenuItem id="google">谷歌</BearMenuItem>
                    <BearSubMenu title={"更多"}>
                        <BearMenuItem id="twitter">Twitter</BearMenuItem>
                        <BearMenuItem id="react">React</BearMenuItem>
                        <BearMenuItem id="vue">Vue</BearMenuItem>
                    </BearSubMenu>
                    <BearSubMenu title={"更多"}>
                        <BearMenuItem id="twitter">Twitter</BearMenuItem>
                        <BearMenuItem id="react">React</BearMenuItem>
                        <BearMenuItem id="vue">Vue</BearMenuItem>
                    </BearSubMenu>
                    <BearMenuItem id="tesla">特斯拉</BearMenuItem>
                    <BearMenuItem id="facebook">Facebook</BearMenuItem>
                    <BearSubMenu title={"更多"}>
                        <BearMenuItem id="twitter">Twitter</BearMenuItem>
                        <BearMenuItem id="react">React</BearMenuItem>
                        <BearMenuItem id="vue">Vue</BearMenuItem>
                    </BearSubMenu>
                </BearMenu>
                <Menu mode="horizontal">
                    <SubMenu title="国家">
                        <Menu.Item key="zhong">中</Menu.Item>
                        <Menu.Item key="guo">国</Menu.Item>
                    </SubMenu>
                    <Menu.Item></Menu.Item>
                    <Menu.Item key="fdfd">2</Menu.Item>
                    <Menu.Item key="vvv">1</Menu.Item>
                    <Menu.Item key="xx">4</Menu.Item>
                </Menu>
            </Col>
            <Col span={12}>
                <div className={`a-wrap`}>dd</div>
                <div className={`b-wrap`}>dd</div>
                <div className={`c-wrap`}>dd</div>
                <div className={`d-wrap`}>dd</div>
            </Col>
        </Row>
    </React.StrictMode>,
    document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
