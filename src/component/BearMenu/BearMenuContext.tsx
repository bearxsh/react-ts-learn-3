import React from "react";

export interface BearMenuContextProps {
    selectedItem: string;
    handleClick: (id: string) => void;
}

const defaultContextProps: BearMenuContextProps = {
    selectedItem: "home",
    handleClick: (id: string) => {console.log(id + "is clicked!");}
};

const BearMenuContext = React.createContext<BearMenuContextProps>(defaultContextProps);

export default BearMenuContext;