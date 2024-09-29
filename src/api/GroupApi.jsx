import axios from 'axios';
import { GROUP_ENDPOINT } from './EndPoint';

const GroupListData = async (params) => {
    try {
        const response = await axios.get(GROUP_ENDPOINT, { params });
        return response.data;
    } catch (error) {
        console.error("Error fetching data:", error);
        throw error;
    }
};

export default GroupListData;