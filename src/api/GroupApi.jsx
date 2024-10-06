import axios from 'axios';
import { GROUP_ENDPOINT } from './EndPoint';

export const GroupListData = async (params) => {
    try {
        const response = await axios.get(GROUP_ENDPOINT, { params });
        return response.data;
    } catch (error) {
        console.error("Error fetching data:", error);
        throw error;
    }
};

export const PostMakeGroup = async (params) => {
    try {
        const response = await axios.post(GROUP_ENDPOINT, params,
            {
                headers: {
                    'Content-Type': 'multipart/form-data', // FormData 전송 시 명시적으로 설정
                },
            },
        );
        
    } catch (error) {
        console.error("Error posting data:", error);
    }
};

export const GroupDetailData = async (params) => {
    try {
        const response = await axios.get(GROUP_ENDPOINT + `/${params}`);
        return response;
    } catch (error) {
        console.error("Error posting data:", error);
    }
};

export const GroupLike = async (params) => {
    try {
        const response = await axios.post(GROUP_ENDPOINT + `/${params}/like`);
        
    } catch (error) {
        console.error("Error posting data:", error);
    }
};

export const GroupDelete = async ({ path, password }) => {

    try {
        const response = await axios.delete(GROUP_ENDPOINT + `/${path}`, {
            data: { password }
        });
        console.log(response.data)
        return response.data
    } catch (error) {
        console.error("Error deleting data:", error);
        return "비밀번호가 틀렸습니다";
    }
};

export const MemoryListData = async ({ params, groupId }) => {
    try {
        const response = await axios.get(GROUP_ENDPOINT + `/${groupId}/posts`, { params });
        return response.data;
    } catch (error) {
        console.error("Error posting data:", error);
    }
}

export const CheckPassword = async (groupId, password) => {
    try {
        const response = await axios.post(GROUP_ENDPOINT + `/${groupId}/verify-password`, password)
        

        return response.data.message;
    } catch (error) {
        console.error("Error posting data:", error.response ? error.response.data : error.message);
        throw error;
    }
}

export const PostMemory = async (groupId, params) => {
    try {
        const response = await axios.post(GROUP_ENDPOINT + `/${groupId}/posts`, params)
        

        return response.data;
    } catch (error) {
        console.error("Error posting data:", error.response ? error.response.data : error.message);
        throw error;
    }
}

export const EditGroup = async (groupid, params) => {
    try {
        const response = await axios.put(GROUP_ENDPOINT+'/'+groupid, params);
        
    } catch (error) {
        console.error("Error posting data:", error);
    }
};