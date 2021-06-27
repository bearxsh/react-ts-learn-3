import React from "react";
import instance from "../../axios-config";
import {ConfigProvider, DatePicker} from "antd";
import "antd/dist/antd.css";
import zhCN from 'antd/lib/locale/zh_CN';
import moment from 'moment';
import 'moment/locale/zh-cn';

moment.locale("zh-cn");

const {BrowserRouter, Switch, Route, Link}  = require("react-router-dom");

function sayHello(name: string) {
    return <h1>{name}</h1>;
}

const name1 = "Duo";
interface MyProps {
    name: string
}
interface MyState {
    title: string,
    date: Date,
    isToggleOn: boolean
}

class ShoppingList extends React.Component<MyProps, MyState> {
    private timerId: number;

    constructor(props: MyProps) {
        super(props);
        this.state = {
            title: "Faker",
            date: new Date(),
            isToggleOn: true
        };
        this.timerId = 0;
    }
    componentDidMount(): void {
        console.log("我被挂载了");
        this.timerId = window.setInterval(() => this.tick(), 1000);

        instance.get("/")
            .then(function (response: any) {
                //console.log(response.data);
            })
            .catch(function (error: any) {
                //console.log("出现错误！");
                //console.log(error);
            })
            .then(function () {
                //console.log("我总是被执行！")
            })
    }

    componentDidUpdate(prevProps: Readonly<MyProps>, prevState: Readonly<MyState>, snapshot?: any) {
        console.log("我的值被更新了？");
    }

    componentWillUnmount(): void {
        console.log("我被卸载了");
        clearInterval(this.timerId);
    }

    render() {
        const name = "Peter";
        const isToggleOn = this.state.isToggleOn;
        let button;
        if (isToggleOn) {
            button = <h1>开启</h1>;
        } else {
            button = <h1>关闭</h1>
        }
        const numbers = [1,3,5,7,9];
        return (

                <div className="shopping-list">
                    <h3>Shopping List for {sayHello("Jack")}</h3>
                    <ul>
                        <li>{name}</li>
                        <li>{name1}</li>
                        <li>{this.props.name}</li>
                        <li>{this.state.title}</li>
                        <li>{this.state.date.toLocaleTimeString()}</li>
                    </ul>
                    <button onClick={this.handleClick.bind(this)}>{this.state.isToggleOn ? "ON" : "OFF"}</button>
                    <button onClick={this.deleteRow.bind(this, name)}>click me</button>
                    {button}
                    {isToggleOn && <div>开启</div>}
                    {isToggleOn ? <h1>开启</h1> : <h1>关闭</h1>}
                    {numbers.map((number) => <li key={number}>{number * 2}</li>)}
                    <input value={name}/>
                    <BrowserRouter>
                        <Link to="/about">About</Link>
                        <Link to="/users">Users</Link>
                        <Switch>
                            <Route path="/about">
                                <h1>我是about</h1>
                            </Route>
                            <Route path="/users">
                                <h1>我是users</h1>
                            </Route>
                            <Route>
                                <h1>page not found!</h1>
                            </Route>
                        </Switch>
                    </BrowserRouter>
                    <ConfigProvider locale={zhCN}>
                        <DatePicker />
                    </ConfigProvider>
                </div>


        );
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }

    handleClick() {
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }))
    }

    deleteRow(name: string) {
        console.log(this);
        console.log(name);
    }

}

export default ShoppingList;
