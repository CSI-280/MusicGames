import React from 'react'
import axios from 'axios'
import SpotifyClient from '../SpotifyClient'
import userClient from '../userClient'


class Applist extends React.Component {
    state = {
        articles: []
    }
        
    /*MOVE TO LOGIN BUTTON */
    login(){   
        SpotifyClient.Login()
    }
    /*END LOGIN MOVE */
    
    /*temp for testing*/
    idWant(){
        //console.log(SpotifyClient.getID())
    }


    componentDidMount() {
            userClient.login(1)
            console.log(userClient.getUserData())  
            console.log(userClient.setUsername('danny123'))
            
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