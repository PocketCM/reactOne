import React, { Component } from "react";
import Sidebar from "../../components/Sidebar";
import "./Home.css";
import ClientList from "../../components/Clientlist";

class Home extends Component {

    state = {
        clients: [],
        clientInfo: {}
    }

    //this should populate our sidebar with client's connected to the signed in case manager
    //eventually will be connected to DB for now I am hard coding
    componentDidMount() {
        this.setState({ clients: ['Tommy Lee Jones', 'Barbara Ann', 'Peggy Sue'] })
    }

    //hit API.get function
    //return client's data from database


    handleCLick = (id) => {
        // API.GetClientsInfo()
        // let clientInfo = this.clientInfo(this.state.ClientInfo);

        alert(this.state.clients, "client was clicked");

        // this.findAndUpdateClientInfo(clientInfo, id);
    }

    //render returned client data on the right
    findAndUpdateClientInfo = () => {

    }

    render() {
        return (

            <div>

                <Sidebar

                // {this.state.clients.map(clients => {
                //     return <ClientList
                //         id={clients.id}
                //         key={clients.id}
                //         name={clients.name}
                //         handleClick={this.handleCLick} />
                // }
                // )}

                />

                <div class="main">
                    <h1>Welcome Case Manager</h1>


                </div>


            </div>
        );
    }
}

export default Home; 