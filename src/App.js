import React, { Component } from 'react';
import axios from 'axios';
import WalletPage from './components/gas/wallet/WalletPage'

class App extends Component {
    // state = {
    //     gasList: []
    // }
    //
    // componentDidMount() {
    //     axios.get('http://localhost:3000/api/Gas')
    //         .then(response => {
    //             this.setState({gasList: response.data})
    //         })
    //         .catch(error => console.log(error))
    // };
    //
    //
    // render() {
    //     const gasList = this.state.gasList;
    //
    //         return (
    //             <ul>
    //                 {gasList.map(gas => (
    //                     <h1>{gas.id} + {gas.owner} + {gas.amount}</h1>
    //                 ))}
    //             </ul>
    //         );
    //     }
    render() {
        return(
            <div>
                <h1>adasdasd</h1>
            <WalletPage />
            </div>
        )
    }
}

export default App;
