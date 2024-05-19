import React from "react";
import classes from "./hamburger.module.css";

const DrawerToggle = (props) => {
    let attachClasses = classes["DrawerToggle"];
    if (props.showMenu) {
        attachClasses = [classes["DrawerToggle"], classes["open"]].join(" ");
    }


    return (
        <div className={classes.Wrapper}>
            <div className={attachClasses} onClick={props.clicked}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    );
};

export default DrawerToggle;
