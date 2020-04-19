import axios from 'axios'


const UserClient = {  
    goog_id : null,
    loged_in : false,
    username : null,
    firstName: null,
    lastName: null,
    profilePic: null,
    base_url : 'http://localhost:8000/data/', //subject to change

    //basic get request
    makeGetRequest(url_add){
        return axios.get(this.base_url + url_add)
    },

    //basic post request
    makePostRequest(url_add, payload_add = {}){
        var payload = {...{'google_id' : this.goog_id},...payload_add}
        return axios.post(this.base_url + url_add, 
            JSON.stringify(payload)
        ) //subject to change
        
    },

    //log in the user 
    async login(g_id){
        this.goog_id = g_id
        var rsp = await this.makePostRequest('login/')
        if (rsp.data === "user added to db"){
            this.login(g_id)
        }
        this.loged_in = true
        this.username = await this.getUsername()
    },


    // -------SET USER INFO -----//

    // set user username
    async setUsername(new_name){
        if (new_name !== this.username){
            await this.makePostRequest('setUserData/', {'username': new_name})
            this.username = new_name
            
        }
    },

    // set user public access key
    async setPublicAccessKey(new_data){
        await this.makePostRequest('setUserData/', {'pbk': new_data})
    },


    //set user google id
    async setGoogleID(new_data){
        await this.makePostRequest('setUserData/', {'new_g_id': new_data})
    },


    //set user points
    async setPoints(new_data){
        await this.makePostRequest('setUserData/', {'points': new_data})
    },


    // set point offset
    // use this to add or subtract points
    // negative numbers will take away posotive will add
    async setPointsOffset(value){
        let cur_points = await this.getPoints()
        let new_points = Number(cur_points) + Number(value)
        await this.setPoints(new_points)
    },


    //set users real life name
    setName(firstName, lastName){
        this.firstName = firstName
        this.lastName = lastName
    },


    setProfilePic(pic){
        this.profilePic = pic
    },


    //-----------------GET USER DATA ------------------//


    getFullName(){
        return [this.firstName, this.lastName]
    },


    getProfilePic(){
        return this.profilePic
    },




    //get all user data in server
    async getUserData(){
        return await this.makeGetRequest('user/'+this.goog_id)
    },

    // get user username
    async getUsername(){
        if (!this.username){
            var incoming = await this.getUserData()
            this.username = incoming.data['username']
        }
        return this.username
    },

    // get users points
    async getPoints(){
        var incoming = await this.getUserData()
        return incoming.data['points']
    },

    // get user public access key
    async getPublicAccessKey(){
        var incoming = await this.getUserData()
        return incoming.data['pbk']
    },

    // get user g_id
    async getGooogleID(){
        var incoming = await this.getUserData()
        this.goog_id = incoming.data['g_id']
        return incoming.data['g_id']
    },

    //get user ID
    async getID(){
        var incoming = await this.getUserData()
        return incoming.data['id']
    },

}

export default UserClient;




/*

saving code for later when cors are added

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

    var csrftoken = this.getCookie('csrftoken');
*/