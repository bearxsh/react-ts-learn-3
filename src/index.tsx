import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {Col, Menu, Row} from "antd";
import "antd/dist/antd.css";

const {SubMenu} = Menu;

const style1 = {background: '#0092ff'};

ReactDOM.render(
    <React.StrictMode>
        <Row>
            {/*组件自研！*/}
            <Col span={12}>
                <Menu mode="horizontal">
                    <SubMenu key="tech" title="科技">
                        <Menu.Item key="apple">苹果</Menu.Item>
                        <Menu.Item key="google">谷歌</Menu.Item>
                    </SubMenu>
                    <Menu.Item key="facebook">Facebook</Menu.Item>
                    <Menu.Item key="youtube" style={style1}>YouTube</Menu.Item>
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