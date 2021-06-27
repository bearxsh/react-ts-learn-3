import React from "react";
import './index.css'
interface BearMenuProps {
    children?: React.ReactNode;
}
function BearMenu(props: BearMenuProps) {
    return <ul className={`menu-wrap`}>{props.children}</ul>
}

export default BearMenu;
