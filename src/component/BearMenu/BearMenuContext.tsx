import React from "react";

interface BearMenuContextProps {
    selectedItem: string;
}

const BearMenuContext = React.createContext<BearMenuContextProps>({selectedItem: "2"});

export default BearMenuContext;