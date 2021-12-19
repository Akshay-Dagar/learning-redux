import React, { Component } from 'react'

class Form extends Component {

    constructor (props) {
        super(props);
        this.state = {
            title: String,
            body: String
        }

        this.onSubmit = this.onSubmit.bind(this);
    }

    async onSubmit (event) {
        event.preventDefault();                //by default, submit causes a refresh of the component

        try {
            const post = {
                title: this.state.title,
                body: this.state.body
            }

            const PostsRes = await fetch("https://jsonplaceholder.typicode.com/posts", {
                method : "POST",
                headers : {
                    "content-type" : "application/json"
                },
                body : JSON.stringify(post)
            });

            const PostsData = await PostsRes.json();
            console.log(PostsData);
        }
        catch (err) {
            console.log(err);
        }
    }

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <input type="text" placeholder="Enter Post Title" name="title" onChange={event => {this.setState({title : event.target.value})}} />
                <input type="text" placeholder="Enter Post Text" name="body" onChange={event => {this.setState({body : event.target.value})}} />
                <button type="Submit">Submit</button>
            </form>
        )
    }
}

export default Form;