import React from "react";
import classNames from "classnames";
import arrow from "./arrow.svg";

interface BearSubMenuProps {
    title: string;
    children: React.ReactNode;
}

function BearSubMenu(props: BearSubMenuProps) {
    const classes = classNames({
        "sub-menu": true
    });
    return <div className={`sub-menu-wrap`}>
        <div className={`sub-menu-wrap-title`}>
            <span>{props.title}</span>
            <img src={arrow} className="arrow-icon" alt="arrow-icon"/>
        </div>
        <div className={classes}>
            <div className={`true-content`}>
                {props.children}
            </div>
        </div>
    </div>
}

export default BearSubMenu;
