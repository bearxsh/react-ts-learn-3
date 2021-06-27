import React from "react";

interface ButtonProps {
    children: any;

}

function BearButton(props: ButtonProps) {
    const {children} = props;
    return <button>{children}</button>
}

export default  BearButton;
