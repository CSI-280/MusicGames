import React from 'react'
import axios from 'axios'

class Applist extends React.Component {
    state = {
        articles: []
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
        return (
            <h1> check console </h1>
        )
    }

}


export default Applist;