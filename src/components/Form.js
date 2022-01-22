import React, { Component } from 'react'
import { connect } from 'react-redux';
import { createPost } from '../actions/postActions';
import propTypes from "prop-types";

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

        const post = {
            title: this.state.title,
            body: this.state.body
        }

        this.props.createPost(post);
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

Form.propTypes = {
    createPost: propTypes.func.isRequired
}


export default connect(null, {createPost})(Form);