import React from "react";
import classNames from "classnames";

interface BearSubMenuProps {
    title: string;
    children: React.ReactNode;
}
function BearSubMenu(props: BearSubMenuProps) {
    const classes = classNames({
            "sub-menu": true
        });
    return <div className={`sub-menu-wrap`}>
       <li>{props.title}</li>
       <div className={classes}>{props.children}</div>
    </div>
}
export default BearSubMenu;
