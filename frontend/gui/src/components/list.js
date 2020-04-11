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
    }
    /*END LOGIN MOVE */
    
    /*temp for testing*/
    idWant(){
        //console.log(SpotifyClient.getID())
    }

    
    
    
    //https://docs.djangoproject.com/en/3.0/ref/csrf/
    getCookie(name) {
        var cookieValue = null;
        if (document.cookie && document.cookie !== '') {
            var cookies = document.cookie.split(';');
            for (var i = 0; i < cookies.length; i++) {
                var cookie = cookies[i].trim();
                // Does this cookie string begin with the name we want?
                if (cookie.substring(0, name.length + 1) === (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        return cookieValue;


        
    }
    
    


    componentDidMount() {

        var csrftoken = this.getCookie('csrftoken');

        axios.defaults.xsrfCookieName = csrftoken
        axios.defaults.xsrfHeaderName = "X-CSRFTOKEN"


        axios.get("http://127.0.0.1:8000/data/user/1") //subject to change
            .then(res => {
                console.log(res.data)
            })

        axios.post("http://127.0.0.1:8000/data/createUser", {'db_id' : "1"},) //subject to change
            .then(res => {
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