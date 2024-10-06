import axios from "axios";
import { POSTS_ENDPOINT } from "./EndPoint";


export const GetPostDetail = async (postid) => {
    try {
        const response = await axios.get(POSTS_ENDPOINT + '/' + postid)
        return response.data;
    } catch (error) {
        console.error("Error getting data:", error.response ? error.response.data : error.message);
        throw error;
    }
}

export const PostCheckPost = async (postid, password) => {
    try {
        const response = await axios.post(POSTS_ENDPOINT + '/' + postid + '/verify-password', password)
        return response.data;
    } catch (error) {
        console.error("Error posting data:", error.response ? error.response.data : error.message);
    }
}

export const LikePost = async (postid) => {
    try {
        await axios.post(POSTS_ENDPOINT + '/' + postid + '/like')
    } catch (error) {
        console.error("Error posting data:", error.response ? error.response.data : error.message);
    }
}

export const GetPostComments = async (postid, params) => {
    try {
        const response = await axios.get(POSTS_ENDPOINT + '/' + postid + '/comments', params)
        return response.data;
    } catch (error) {
        console.error("Error getting data:", error.response ? error.response.data : error.message);
        throw error;
    }
}

export const PostComment = async (postid, params) => {
    try {
        const response = await axios.post(POSTS_ENDPOINT + '/' + postid + '/comments', params)
        return response.data;
    } catch (error) {
        console.error("Error getting data:", error.response ? error.response.data : error.message);
        throw error;
    }
}


export const DeleteMemory = async ({postid, postPassword}) => {
    try {
        const response = await axios.delete(POSTS_ENDPOINT + '/' + postid, {data:{postPassword}})
        return response.data;
    } catch (error) {
        console.error("Error getting data:", error.response ? error.response.data : error.message);
        throw error;
    }
}