// import Vue from 'vue';
import axios from '@/plugins/axios'
import createPersistedState from 'vuex-persistedstate';

import "toastify-js/src/toastify.css"
import Toastify from 'toastify-js'

// Vue.prototype.$http = http

const getDefaultState = () => {
    return {
        services: [],
        service: {},
        service_prices: [],
        service_price: {}
    };
};

export default {
    namespaced: true,
    strict: true,
    plugins: [createPersistedState()],
    state: getDefaultState(),
    getters: {
        getServices: state => {
            return state.services
        },
        getService: state => {
            return state.service
        },
        getServicesPrices: state => {
            return state.service_prices
        },
        getServicePrice: state => {
            return state.service_price
        }
    },
    mutations: {
        SET_SERVICES: (state, services) => {
            state.services = services;
        },
        SET_SERVICES_PRICES: (state, service_prices) => {
            state.service_prices = service_prices;
        },
        SET_SERVICE: (state, service) => {
            state.service = service;
        },
        SET_SERVICE_PRICE: (state, service_price) => {
            state.service_price = service_price;
        },

    },
    actions: {
        // Get all Services 
        async getServices({ commit }) {
            const res = await axios.get('/admin/services/')
            commit('SET_SERVICES', res.data);
            console.log(res)
        },

        // Create a New Service 
        async createService({ dispatch }, payload) {
            const res = await axios.post('/admin/services/add', payload)
            dispatch('getServices');
            Toastify({
                text: "Service Created Succesfully",
                className: "info",
                style: {
                    background: "green",
                }
            }).showToast();
            console.log(res);
        },


        // Get Service By Id
        async getServiceById({ commit }, id) {
            const res = await axios.get(`/admin/services/view/${id}`)
            commit('SET_SERVICE', res.data.data);
            console.log(res)
        },

        // Get all Service Prices
        async getServicesPrices({ commit }) {
            const res = await axios.get('/admin/services/price/all')
            commit('SET_SERVICES_PRICES', res.data);
            console.log(res)
        },

        // Create a New Service Price
        async createServicePrices({ dispatch }, payload) {
            const res = await axios.post('/admin/services/price/add', payload)
            dispatch('getServicesPrices');
            Toastify({
                text: "Service Created Succesfully",
                className: "info",
                style: {
                    background: "green",
                }
            }).showToast();
            console.log(res);
        },


        // Get Service Price By Id
        async getServicePriceById({ commit }, id) {
            const res = await axios.get(`/admin/services/price/view/${id}`)
            commit('SET_SERVICE_PRICE', res.data.data);
            console.log(res)
        },

        // Delete Price
        async deleteServicePrices({ dispatch }, id) {
            const res = await axios.get(`/admin/services/price/delete/${id}`)
            dispatch('getServicesPrices');
            Toastify({
                text: "Service Deleted",
                className: "info",
                style: {
                    background: "green",
                }
            }).showToast();
            console.log(res);
        },

        // Edit Price
        async updateServicePrices({ dispatch }, id) {
            const res = await axios.get(`/admin/services/price/update/${id}`)
            dispatch('getServicesPrices');
            Toastify({
                text: "Service Deleted",
                className: "info",
                style: {
                    background: "green",
                }
            }).showToast();
            console.log(res);
        },
    }
};