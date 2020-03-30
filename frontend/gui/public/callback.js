var urlParams = new URLSearchParams(window.location.search);
var code = urlParams.get('code');


//used to send message to client
const login = new BroadcastChannel('login');

//used to receve message from the client
const auth = new BroadcastChannel('auth');

login.postMessage('ready')

//when we get the 
auth.onmessage = function(e) {
    const client_id = e.data;
    
    console.log(client_id);
    
    client_secret = ''
    
    //TO DO: make axios request to server to get client_secret
    //for now its has been sent to your email
    
    var client = new XMLHttpRequest();
    client.open('GET', './client_secret.config')
    client.onreadystatechange = function() {
        
        //if the response is not empty
        if (client.responseText){
            
            
            client_secret = client.responseText
            
            //end TO DO


            //step 2
            //get token from spotify and save data in client and DB
            axios.post(  
                'https://accounts.spotify.com/api/token',  
                    new URLSearchParams({ 
                        grant_type: "authorization_code",  
                        code: code,  
                        redirect_uri: 'http://localhost:3000/callback.html'  
                    }).toString(),
                    {
                        headers: {
                            'Content-Type': 'application/x-www-form-urlencoded',
                            'Authorization': 'Basic ' + btoa(client_id + ':' + client_secret)
                        },
                    }
            )

            //give client access token
            .then(function(response) {
                let value = Object.values(response)[0]['access_token']

                // should also save refresh token to db
                // can access via Object.values(response)[0]['refresh_token']
                login.postMessage(value);
                login.close();
                console.log(value)
                window.close()
            })
            .catch(function(error) {
                console.log(error);
                window.close()
            })
        }
    }
    client.send();
};









