import axios from 'axios'


const SpotifyClient = {  
    client_id : '42b56bb8489a418db8bd7d2c631b2eef',
    user_token : null,
    loged_in : true,
    refresh_token : "AQCKr3lnfNPGaGRv8sjoq5Yg2nC153VPaKGhG3ha4PQtWgWSJfHFiX13TSU57eu5XYa3RslbCbfckHN4c184_9FFh391FXEHZgVmXEU9pKOm2EkFy5DdLEvVL84vuvn6Gaw", 
    base_url : 'https://api.spotify.com',
    

    // api doc : https://developer.spotify.com/documentation/web-api/reference/

    
    GetAccessToken() {
        var _this = this;

        var secret = new XMLHttpRequest();
        secret.open('GET', './client_secret.config');
        secret.send();
        secret.onload = async function (){

            if (secret.responseText){
                
                axios.post(  
                    'https://accounts.spotify.com/api/token',  
                        new URLSearchParams({ 
                            grant_type: "refresh_token",
                            refresh_token :  _this.refresh_token, 
                        }).toString(),
                        {
                            headers: {
                                'Content-Type': 'application/x-www-form-urlencoded',
                                'Authorization': 'Basic ' + btoa(_this.client_id + ':' + secret.responseText)
                            },
                        }
                ).then(function(response) {
                    let value = Object.values(response)[0]['access_token']
                    _this.user_token = value;

                }).catch(function(error) {
                    console.log(error);

                })
                
                
            }
        }
    },
    
    makeRequest(url_add){
        var _this = this;

        var resp =  axios.get(this.base_url + url_add, {
            headers : {
                Authorization : 'Bearer ' + this.user_token,
                }
        },)
        .catch(function(error) {
            if (error.response.status === "401"){
                _this.GetAccessToken();
            }
        })
        return resp
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
    async getUserData() {
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
