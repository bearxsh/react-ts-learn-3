import React, {useRef} from "react";
import classNames from "classnames";
import arrow from "./arrow.svg";

interface BearSubMenuProps {
    title: string;
    children: React.ReactNode;
}

function BearSubMenu(props: BearSubMenuProps) {
    const subMenuRef = useRef<any>(null);
    const classes = classNames({
        "sub-menu": true
    });
    const handleClick = () => {
        if (subMenuRef) {
            console.log(subMenuRef?.current?.clientHeight);
        }
    }
    return <div className={`sub-menu-wrap`}>
        <div className={`sub-menu-wrap-title`} onClick={handleClick}>
            <span>{props.title}</span>
            <img src={arrow} className="arrow-icon" alt="arrow-icon"/>
        </div>
        <div className={classes} ref={subMenuRef}>
            <div className={`true-content`}>
                {props.children}
            </div>
        </div>
    </div>
}

export default BearSubMenu;
