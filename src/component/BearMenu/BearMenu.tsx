import React, {useState} from "react";
import './index.css';
import classNames from "classnames";
import BearMenuContext from "./BearMenuContext";

interface BearMenuProps {
    children?: React.ReactNode;
}

function BearMenu(props: BearMenuProps) {
    console.log("渲染");
    const [selectedItem, setSelectedItem] = useState("tesla");
    const classes = classNames({
        "menu-wrap": true
    });
    function handleClick(e: any) {
        console.log(e.target);
    }
    console.log(props.children);
    setInterval(() => {
        setSelectedItem("apple");
    }, 3000);
    const {children} = props;
    return (<ul className={classes} onClick={handleClick}>
        {/*如果要让子组件能够监听到Provider中value的变化，则value必须是state，不能是普通变量*/}
        <BearMenuContext.Provider value={{selectedItem}}>
            {children}
        </BearMenuContext.Provider>
    </ul>)
}

export default BearMenu;
