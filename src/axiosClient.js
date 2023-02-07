import axios from 'axios';

const axiosClient = axios.create();

axiosClient.defaults.baseURL = 'http://localhost:8000/api';
axiosClient.defaults.headers = {
    'Content-Type': 'application/json',
    Accept: 'application/json'
};

export async function getRequest(url){
    const response = await axiosClient.get(`/${url}`);
    return response;
}

export async function postRequst(url, payload){
    const response = await axiosClient.post(`/${url}`, payload);
    return response;
}

export async function patchRequest(url, payload){
    const config = {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      };

    const response = await axiosClient.patch(`/${url}`, payload, config);
    return response;
}

export async function deleteRequest(url){
    const response = await axiosClient.delete(`/${url}`);
    return response;
}