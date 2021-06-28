import React from "react";
import {useContext} from "react";
import classNames from "classnames";
import BearMenuContext from "./BearMenuContext";

interface BearMenuItemProps {
    children: React.ReactNode;
    id: string;
}

function BearMenuItem(props: BearMenuItemProps) {
    //console.log(props.id);
    const context = useContext(BearMenuContext);
    console.log(context);
    const classes = classNames({
        "active": context.selectedItem === props.id
    });
    return <li className={classes}>{props.children}</li>
}

export default BearMenuItem;
