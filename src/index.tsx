import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {Col, Menu, Row} from "antd";
import "antd/dist/antd.css";
import BearButton from "./component/BearButton/BearButton";
import BearMenu from "./component/BearMenu/BearMenu";
import BearMenuItem from "./component/BearMenu/BearMenuItem";
import Test from "./component/Test/Test";
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
                    <BearMenuItem id="tesla">特斯拉</BearMenuItem>
                    <BearMenuItem id="facebook">Facebook</BearMenuItem>
                </BearMenu>
                <Menu>
                    <Menu.Item key="fdfd">2</Menu.Item>
                    <Menu.Item key="vvv">1</Menu.Item>
                    <Menu.Item key="xx">4</Menu.Item>
                </Menu>
            </Col>
            <Col span={12}>

            </Col>
        </Row>
    </React.StrictMode>,
    document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
