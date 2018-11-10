import React, { Component } from "react";
import "./Clientlist.css"


const Clientlist = (props) => {

    return (
        <div>
            <div className="card clientList">
                <div className="card-body">
                    {props.name}
                </div>
            </div>
        </div>
    )

}

export default Clientlist; 