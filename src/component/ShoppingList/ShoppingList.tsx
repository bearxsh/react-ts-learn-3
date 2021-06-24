import React from "react";

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
