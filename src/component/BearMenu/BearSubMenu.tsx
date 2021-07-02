import React, {useRef, useState} from "react";
import classNames from "classnames";
import arrow from "./arrow.svg";
import {Transition} from 'react-transition-group';
interface BearSubMenuProps {
    title: string;
    children: React.ReactNode;
}

function BearSubMenu(props: BearSubMenuProps) {
    const [show, setShow] = useState(false);
    const nodeRef = useRef<any>(null);
    const classes = classNames({
        "sub-menu": true
    });
    const handleClick = () => {
        if (nodeRef) {
        setShow(!show);
            console.log("handleClick:" + nodeRef?.current?.clientHeight);
        }
    }
    /* -- Expanding -- */
    const handleEnter = () => {
    console.log("enter");
        nodeRef.current.style.height = '0';
      };

     const handleEntering = () => {
        console.log("entering: " + nodeRef.current.scrollHeight);
        nodeRef.current.style.height = `${nodeRef.current.scrollHeight}px`;
      };

      const handleEntered = () => {
      console.log("entered");
        //nodeRef.current.style.height = null;
      };

      /* -- Collapsing -- */
      const handleExit = () => {
      console.log("exit: " + nodeRef?.current?.clientHeight);
        nodeRef.current.style.height = nodeRef?.current?.clientHeight + 'px';
        //this.nodeRef.current.offsetHeight; // eslint-disable-line no-unused-expressions
      };

      const handleExiting = () => {
      console.log("exiting");
        nodeRef.current.style.height = '0';
      };

        const handleExited = () => {
      console.log("exited");
      };

    return <div className={`sub-menu-wrap`}>
        <div className={`sub-menu-wrap-title`} onClick={handleClick}>
            <span>{props.title}</span>
            <img src={arrow} className="arrow-icon" alt="arrow-icon"/>
        </div>
        <Transition
        in={show}
                nodeRef={nodeRef}
                timeout={300}
                onEnter={handleEnter}
                onEntering={handleEntering}
                onEntered={handleEntered}
                onExit={handleExit}
                onExiting={handleExiting}
                onExited={handleExited}
              >
                {(state: any) => (
                  <div ref={nodeRef} className={`sub-menu collapse-${state}`}>
                              <div className={`true-content`}>
                                  {props.children}
                              </div>
                          </div>
                )}
              </Transition>
    </div>
}

export default BearSubMenu;
