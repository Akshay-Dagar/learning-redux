import React, { Component } from 'react'

class Posts extends Component {

    constructor (props) {
        super(props);
        this.state = {
            posts : []
        }
    }

    componentDidMount = async () => {
        try {
            const PostsRes = await fetch("https://jsonplaceholder.typicode.com/posts");
            const PostsData = await PostsRes.json();
            this.setState({posts: PostsData});
        }
        catch (err) {
            console.log(err);
        }
    }

    render() {

        const PostItems = this.state.posts.map(post => {
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

export default Posts;