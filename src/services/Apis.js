import axios from "axios";
import { toast } from 'react-toastify';

export const axiosInstance = axios.create({
    baseURL: `https://fakestoreapi.com/`,
    headers: {
        "Accept": "application/json"
    },
});

const showError = (error) => {
    if (error?.response?.data?.message || error?.response?.data?.error) {
        return toast.error(error?.response?.data?.message || error?.response?.data?.error);
    }
    let messages = error?.response?.data?._server_messages ? JSON.parse(JSON.parse(error?.response?.data?._server_messages)[0]) : null
    if (messages) {
        return toast.error(messages?.message);
    }
    if (error?.code == "ERR_NETWORK" || error?.code == "ERR_BAD_RESPONSE") {
       
    }
};

const Apis = {
   
    getDataApi: async (params) => {
        axiosInstance.defaults.headers['Authorization'] = ''
        let URL = params.url + "?"
        for (let key in params.query) {
            URL += `${key}=${params.query[key]}&`
        }
        return axiosInstance
            .get(URL, params.query, { withCredentials: false })
            .then((response) => {
                if (response?.status == 200 || response?.status == 201 || response?.status == 202) {
                    return response?.data
                } else {
                    throw new Error(response)
                }
            })
            .catch((error) => {
                showError(error);
                return { error: true, message: error?.message }
            });
    },
    getSingleDataApi: async (params) => {
        axiosInstance.defaults.headers['Authorization'] = ''
        let URL = params.url + "/" + params.id
        return axiosInstance
            .get(URL, {}, { withCredentials: false })
            .then((response) => {
                if (response?.status == 200 || response?.status == 201 || response?.status == 202) {
                    return response?.data
                } else {
                    throw new Error(response)
                }
            })
            .catch((error) => {
                showError(error);
                return { error: true, message: error?.message }
            });
    },
    
   
};

export default Apis;
