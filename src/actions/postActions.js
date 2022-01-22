import { FETCH_POSTS, NEW_POST } from "./types";

export const fetchPosts = () =>
    async dispatch => {
        try {
            const PostsRes = await fetch("https://jsonplaceholder.typicode.com/posts");
            const PostsData = await PostsRes.json();
            dispatch({
                type: FETCH_POSTS,       //type of action performed
                payload: PostsData       //data that u want to send to reducer
            })                           //this will dispatch to reducers. Note that by default, it will dispatch to all reducers and final handling will be done based on action type. Whichever reducer handles this particular action type will handle it.
        }
        catch (err) {
            console.log(err);
        }
    }

export const createPost = post =>
    async dispatch => {
        try {

            const PostsRes = await fetch("https://jsonplaceholder.typicode.com/posts", {
                method : "POST",
                headers : {
                    "content-type" : "application/json"
                },
                body : JSON.stringify(post)
            });

            const PostsData = await PostsRes.json();

            dispatch({
                type: NEW_POST,       //type of action performed
                payload: PostsData       //data that u want to send to reducer
            })                           //this will dispatch to reducers. Note that by default, it will dispatch to all reducers and final handling will be done based on action type. Whichever reducer handles this particular action type will handle it.
        }
        catch (err) {
            console.log(err);
        }
    }

