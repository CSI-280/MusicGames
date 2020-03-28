import axios from 'axios'



const SpotifyClient = {  
    client_id : '42b56bb8489a418db8bd7d2c631b2eef',
    user_token : null,
    loged_in : false,


    Login() {
        window.open('https://accounts.spotify.com/authorize?' +
            'client_id=' + this.client_id +
            '&response_type=code' + 
            '&redirect_uri=http://localhost:3000/callback.html' +
            '&scope=' + encodeURIComponent('playlist-read-private user-follow-read user-library-read user-top-read user-read-private user-read-email ugc-image-upload')       
            )

        //used to receieve data from callback
        const login = new BroadcastChannel('login');

        //used to send data to callback
        const auth = new BroadcastChannel('auth')



        //when message is recevied from other page
        login.onmessage = function(e) {
            if (e.data == 'ready') {
                auth.postMessage('42b56bb8489a418db8bd7d2c631b2eef');

                auth.close();
            }
            else{
                SpotifyClient.user_token = e.data;
                login.close();
                this.loged_in = true;
                console.log(SpotifyClient.user_token)         
            }
        };
    },

    getID() { 
        axios.get('https://api.spotify.com/v1/me', {
            headers : {
                Authorization : 'Bearer ' + this.user_token,
                }
            },)
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
        })
    }    
}

export default SpotifyClient;
