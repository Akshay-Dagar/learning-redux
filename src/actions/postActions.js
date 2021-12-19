import { FETCH_POSTS, NEW_POST } from "./types";

export const fetchPosts = () =>
    async dispatch => {
        try {
            const PostsRes = await fetch("https://jsonplaceholder.typicode.com/posts");
            const PostsData = await PostsRes.json();
            dispatch({
                type: FETCH_POSTS,       //type of action performed
                payload: PostsData       //data that u want to send to reducer
            })                           //this will dispatch to reducer (postReducer)
        }
        catch (err) {
            console.log(err);
        }
    }