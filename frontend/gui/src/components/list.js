import React from 'react'
import axios from 'axios'
import SpotifyClient from '../SpotifyClient'

class Applist extends React.Component {
    state = {
        articles: []
    }
        
    /*MOVE TO LOGIN BUTTON */
    login(){   
        SpotifyClient.Login()
        console.log('ran')
    }
    /*END LOGIN MOVE */
    
    /*temp for testing*/
    idWant(){
        console.log(SpotifyClient.getID())
    }

    
    componentDidMount() {
        axios.get("http://127.0.0.1:8000/api/") //subject to change
            .then(res => {
                this.setState({
                    articles: res.data
                })
                console.log(res.data)
            })
    }
    

    render() {
        
        return (<>
            <h1> check console </h1>
            <input id="clickMe" type="button" value="login" onClick= {() => this.login()} />
            <input id="getiD" type="button" value="log ID" onClick= {() => this.idWant()} />
            </>
        )
    }

}


export default Applist;