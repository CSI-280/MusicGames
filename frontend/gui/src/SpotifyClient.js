import axios from 'axios'



const SpotifyClient = {  
    client_id : '42b56bb8489a418db8bd7d2c631b2eef',
    user_token : 'BQDUr9gnn32ItYl0HMh1BknIFeZzAHgAKb21gJbhXsTL4aak2BP9QHvWKUMk5_H3e8gvh2V1DPxIQDNbQ9mme_u16VmAI0w5i_dySkQJzsNpowW1xmRm1_7zvh7bO_uIrjg4znMLRIu2FelIXPmHc3dxbTIsoFJlx9zX_onddJd2mbYx56BrdcbHVvSXwEHCbc7Yx4Y6vedHmocY0g',
    loged_in : true,
    base_url : 'https://api.spotify.com',

    // api doc : https://developer.spotify.com/documentation/web-api/reference/


    
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
