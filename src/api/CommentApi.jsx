import axios from 'axios';
import { COMMENTS_ENDPOINT } from './EndPoint';

export const DeleteComment = async ({id, password}) => {
    try {
        const response = await axios.delete(COMMENTS_ENDPOINT + '/' + id, { data : {password} })
        return response.data;
    } catch (error) {
        console.error("Error getting data:", error.response ? error.response.data : error.message);
        throw error;
    }
}


export const EditComment = async (postid, params) => {
    try {
        const response = await axios.put(COMMENTS_ENDPOINT + '/' + postid, params)
        return response.data;
    } catch (error) {
        console.error("Error getting data:", error.response ? error.response.data : error.message);
        throw error;
    }
}