import axios from 'axios';
import { IMAGE_ENDPOINT } from './EndPoint';

export const PostImageUrl = async (params) => {
    try {
        const response = await axios.post(IMAGE_ENDPOINT, params,
            {
                headers: {
                    'Content-Type': 'multipart/form-data', // FormData 전송 시 명시적으로 설정
                },
            },
        );
        return response.data;
    } catch (error) {
        console.error("Error Posting Image:", error);
        throw error;
    }
};