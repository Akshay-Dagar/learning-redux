import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/postActions';
import propTypes from "prop-types";

class Posts extends Component {

    componentDidMount = () => {
        this.props.fetchPosts();
    }

    componentWillReceiveProps = newProps => {
        if (newProps.newPost)
            this.props.posts.unshift(newProps.newPost);    //will push newPost to front of array posts
    }

    render() {

        const PostItems = this.props.posts.map(post => {
            return (
                <div key={post.id}>
                    <h3>{post.title}</h3>
                    <p>{post.body}</p>
                </div>
            )
        });

        return (
            <div>
                <h1>Posts</h1>
                {PostItems}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return ({
        posts: state.posts.items,
        newPost: state.posts.item
    })
}

Posts.propTypes = {
    fetchPosts: propTypes.func.isRequired,
    posts: propTypes.array.isRequired,
    newPost: propTypes.object
}

export default connect(mapStateToProps,{fetchPosts})(Posts);     
//The connect() function connects a React component to a Redux store. It provides its connected component
//with the pieces of the data it needs from the store, and the functions it can use to dispatch actions
//to the store. It does not modify the component class passed to it; instead, it returns a new, 
//connected component class that wraps the component you passed in (which is Posts here).
//The first argument (mapStateToProps) will map the state stored in store to props of your react component.
//U can access the state now using this.props as it has become a prop.
//The second argument (mapDispatchToProps) can be an object containing all your dispatch action 
//functions for the component or can be a function.