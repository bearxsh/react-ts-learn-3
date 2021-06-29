import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import reportWebVitals from './reportWebVitals';
import {Col, Row} from "antd";
import "antd/dist/antd.css";
import BearMenu from "./component/BearMenu/BearMenu";
import BearMenuItem from "./component/BearMenu/BearMenuItem";
import BearSubMenu from "./component/BearMenu/BearSubMenu";
import "./component/BearMenu/test.scss";

ReactDOM.render(
    <React.StrictMode>
        <Row>
            <Col span={24}>
                <div className="header">
                    <BearMenu>
                        <BearMenuItem id="home">首页</BearMenuItem>
                        <BearMenuItem id="apple">苹果</BearMenuItem>
                        <BearMenuItem id="google">谷歌</BearMenuItem>
                        <BearMenuItem id="tesla">特斯拉</BearMenuItem>
                        <BearMenuItem id="facebook">Facebook</BearMenuItem>
                        <BearSubMenu title={"更多"}>
                            <BearMenuItem id="twitter">Twitter</BearMenuItem>
                            <BearMenuItem id="react">React</BearMenuItem>
                            <BearMenuItem id="vue">Vue</BearMenuItem>
                        </BearSubMenu>
                    </BearMenu>
                </div>
            </Col>
        </Row>
        <div className="content-wrap">
            <Row>
                <Col span={24} xl={12}>
                    <div className="welcome-title">
                        <h1>Making Friends with Time.</h1>
                    </div>
                </Col>
                <Col span={24} xl={12}>
                    <div className="welcome-title second">
                        <h1>Making Friends with Time.</h1>
                    </div>
                </Col>
            </Row>
        </div>
    </React.StrictMode>,
    document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
