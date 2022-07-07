import Vue from 'vue'
import "toastify-js/src/toastify.css"
import Toastify from 'toastify-js'
// import store from '../store'

Vue.use(Toastify)

import axios from "axios";
// import router from '@/router'
const BASE_URL = 'http://api.veohmo.com';

const instance = axios.create({
    baseURL: BASE_URL,
    headers: {
        "Content-type": "application/json",
        // "Access-Control-Allow-Origin": "*",
        // "Access-Control-Allow-Headers": "*",
        "Access-Control-Allow-Methods": 'GET, HEAD, PUT, PATCH, POST, DELETE',
        // "Authorization": `bearer ${store.state.token}`
    }
});

// Add a request interceptor
instance.interceptors.request.use(function(config) {
    // Do something before request is sent
    // alert("requesting")
    const token = localStorage.getItem('token')
    console.log(token);
    // console.log(`${store.state.token}`);
    // console.log(localStorage.getItem('token'));
    // const token = `${store.state.token}`;

    if (token) {
        config.headers['Authorization'] = `bearer ${token}`;
    }

    return config;
}, function(error) {
    // Do something with request error
    alert("something went wrong")
    return Promise.reject(error);
});

// Add a response interceptor
instance.interceptors.response.use(function(response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
}, function(error) {

    console.log(error);
    // console.log(error.response.data.detail);
    Toastify({
        text: "Something Went wrong",
        className: "info",
        style: {
            background: "red",
        }
    }).showToast();
    // if (error.response.data.message === 'Attempt to read property "role" on null') {
    //     router.push('/sign-in')
    // }
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
    // return error
});

export default instance