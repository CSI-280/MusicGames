import axios from 'axios'



const SpotifyClient = {  
    client_id : '42b56bb8489a418db8bd7d2c631b2eef',
    user_token : null,
    loged_in : false,
    base_url : 'https://api.spotify.com',

    // api doc : https://developer.spotify.com/documentation/web-api/reference/


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
            if (e.data === 'ready') {
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

    
    makeRequest(url_add){
        return axios.get(this.base_url + url_add, {
            headers : {
                Authorization : 'Bearer ' + this.user_token,
                }
        },)
    },


    //albums
    async getAlbum(albumID){
        return await this.makeRequest('/v1/albums/' + albumID);
    },

    async getAlbumTracks(albumID){
        return await this.makeRequest('/v1/albums/' + albumID +'/tracks');
    },



    //artist
    async getArtist(ArtistID){
        return await this.makeRequest('/v1/artists/' + ArtistID);
    },
    
    async getArtistAlbums(ArtistID){
        return await this.makeRequest('/v1/artists/' + ArtistID +'/albums');
    },

    async getArtistTopTracks(ArtistID){
        return await this.makeRequest('/v1/artists/' + ArtistID + '/top-tracks ');
    },



    // get userdata
    async getID() {
        return await this.makeRequest('/v1/me');
    },   

    async getSong(songID) {
        return await this.makeRequest('/v1/tracks/'+songID);
    },

    async getUsersPlaylist() {
        return await this.makeRequest('/v1/me/playlists');
    },



    // browse tab data
    async getCatagory(catagoryID) {
        return await this.makeRequest('/v1/browse/categories/' + catagoryID);
    },

    async getCatagoryPlaylist(catagoryID) {
        return await this.makeRequest('/v1/browse/categories/' + catagoryID + '/playlist');
    },

    async getCatagoryLIST() {
        return await this.makeRequest('/v1/browse/categories/');
    },

    async getFeaturedPlaylists() {
        return await this.makeRequest('/v1/browse/featured-playlists');
    },

    async getNewReleases(){
        return await this.makeRequest('/v1/browse/new-releases');
    },

    async getRecomended(){
        return await this.makeRequest('/v1/recommendations');
    }

}

export default SpotifyClient;
