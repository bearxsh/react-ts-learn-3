import React from "react";
import {useContext} from "react";
import classNames from "classnames";
import BearMenuContext from "./BearMenuContext";

interface BearMenuItemProps {
    children: React.ReactNode;
    id: string;
}

function BearMenuItem(props: BearMenuItemProps) {
    const context = useContext(BearMenuContext);
    const classes = classNames({
        "active": context.selectedItem === props.id
    });
    const handleClick = () => {
        context.handleClick(props.id);
    };
    return <li className={classes} onClick={handleClick}>{props.children}</li>
}

export default BearMenuItem;
