import axios from 'axios'



const UserClient = {  
    goog_id : null,
    loged_in : false,
    username : null,
    base_url : 'http://localhost:8000/data/', //subject to change


    makeGetRequest(url_add, payload_add = {}){
        return axios.get(this.base_url + url_add)
    },

    async getUsername(){
        if (!this.username){
            return await this.makeGetRequest('Username/'+this.goog_id)
            //this.username = await this.makeRequest('getUsename/')
        }
        return this.username
    }

    /*
    async setUsername(){
        
    }

    async getPoints(){

    }

    async setPointsOffset(){

    }
    */
}

export default UserClient;
