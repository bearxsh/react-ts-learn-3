import React from "react";
const { createContext, useContext, useState } = React;
interface ContextProps {
    style?: string;
    visible: boolean;
    toggleStyle?: ()=>void;
    toggleVisible?: ()=>void;
}
const ThemeContext = createContext<ContextProps>({visible: false});

function Content() {
    const { style, visible, toggleStyle, toggleVisible } = useContext(
        ThemeContext
    );

    return (
        <div>
            <p>
                The theme is <em>{style}</em> and state of visibility is
                <em> {visible.toString()}</em>
            </p>
            <button onClick={toggleStyle}>Change Theme</button>
            <button onClick={toggleVisible}>Change Visibility</button>
        </div>
    );
}

function Test() {
    const [style, setStyle] = useState("light");
    const [visible, setVisible] = useState(true);

    function toggleStyle() {
        setStyle(style => (style === "light" ? "dark" : "light"));
    }
    function toggleVisible() {
        setVisible(visible => !visible);
    }

    setInterval(()=> {
        console.log("change");
        setStyle("dark");
    }, 3000);

    return (
        <ThemeContext.Provider
            value={{ style, visible, toggleStyle, toggleVisible }}
        >
            <Content />
        </ThemeContext.Provider>
    );
}

export default Test;
