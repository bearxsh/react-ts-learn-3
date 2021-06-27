import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {Col, Menu, Row} from "antd";
import "antd/dist/antd.css";
import BearButton from "./component/BearButton/BearButton";
import BearMenu from "./component/BearMenu/BearMenu";
import BearMenuItem from "./component/BearMenu/BearMenuItem";

const {SubMenu} = Menu;

const style1 = {background: '#0092ff'};


ReactDOM.render(
    <React.StrictMode>
        <Row>
            {/*组件自研！*/}
            <Col span={12}>
                <BearMenu>
                    <BearMenuItem>苹果</BearMenuItem>
                    <BearMenuItem>谷歌</BearMenuItem>
                    <BearMenuItem>特斯拉</BearMenuItem>
                    <BearMenuItem>Facebook</BearMenuItem>
                </BearMenu>
                <Menu>
                    <Menu.Item></Menu.Item>
                </Menu>
            </Col>
        </Row>
    </React.StrictMode>,
    document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
