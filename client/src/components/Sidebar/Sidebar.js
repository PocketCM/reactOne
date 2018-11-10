import React, { Component } from "react";
import "./Sidebar.css"


const Sidebar = (props) => {

    return (
        <div>
            <div className="sidenav">
                <a href={props.name}
                    id={props.id}
                    onClick={() => props.handleClick(props.id)}>
                    {props.name}
                </a>
            </div>

        </div>
    )

}

export default Sidebar; 