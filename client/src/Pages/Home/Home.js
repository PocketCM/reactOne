import React, { Component } from "react";
import Sidebar from "../../Components/Sidebar";

class Home extends Component {

    state = {
        clients: [],

    }

    render() {
        return (
            <div>
                <h1>Case Manager Dashboard</h1>
                {/* <Sidebar
                    this.state.clients.map(clients => {
                    return <ClientName
                    id={client.id}
                    key={clientInformation.id}
                    name={client.name}
                    handleClick={this.handleCLick} />
                } */}




            </div>
        )
    }
}

export default Home; 