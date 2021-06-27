import React from "react";

interface BearMenuItemProps {
    children: React.ReactNode;
}

function BearMenuItem(props: BearMenuItemProps) {
    return <li>{props.children}</li>
}

export default BearMenuItem;
