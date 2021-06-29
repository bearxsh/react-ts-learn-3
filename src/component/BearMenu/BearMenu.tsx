import React, {useState} from "react";
import './index.css';
import classNames from "classnames";
import BearMenuContext, {BearMenuContextProps} from "./BearMenuContext";


interface BearMenuProps {
    children?: React.ReactNode;
}

function BearMenu(props: BearMenuProps) {
    const [selectedItem, setSelectedItem] = useState("tesla");
    const handleClick = (id: string) => {
        console.log(id + " 被点击了！");
        setSelectedItem(id);
    };
    const classes = classNames({
        "menu-wrap": true
    });
    const provider: BearMenuContextProps = {
        "selectedItem": selectedItem,
        "handleClick": handleClick
    };
    const {children} = props;
    return (<ul className={classes}>
        {/*如果要让子组件能够监听到Provider中value某个数据A的变化，则value中的数据A必须是state，不能是普通变量*/}
        <BearMenuContext.Provider value={provider}>
            {children}
        </BearMenuContext.Provider>
    </ul>)
}

export default BearMenu;
