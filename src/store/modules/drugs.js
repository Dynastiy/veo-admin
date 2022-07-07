// import Vue from 'vue';
import axios from '@/plugins/axios'
import createPersistedState from 'vuex-persistedstate';

import "toastify-js/src/toastify.css"
import Toastify from 'toastify-js'

// Vue.prototype.$http = http

const getDefaultState = () => {
    return {
        drugs: [],
        drug: {},
        drug_prices: [],
        drug_price: {}
    };
};

export default {
    namespaced: true,
    strict: true,
    plugins: [createPersistedState()],
    state: getDefaultState(),
    getters: {
        getDrugs: state => {
            return state.drugs
        },
        getDrug: state => {
            return state.drug
        },
        getDrugsPrices: state => {
            return state.drug_prices
        },
        getDrugPrice: state => {
            return state.drug_price
        }
    },
    mutations: {
        SET_DRUGS: (state, drugs) => {
            state.drugs = drugs;
        },
        SET_DRUGS_PRICES: (state, drug_prices) => {
            state.drug_prices = drug_prices;
        },
        SET_DRUG: (state, drug) => {
            state.drug = drug;
        },
        SET_DRUG_PRICE: (state, drug_price) => {
            state.drug_price = drug_price;
        },

    },
    actions: {
        // Get all Services 
        async getDrugs({ commit }) {
            const res = await axios.get('/admin/drugs/all')
            commit('SET_DRUGS', res.data);
            console.log(res)
        },

        // Create a New Service 
        async createDrug({ dispatch }, payload) {
            const res = await axios.post('/admin/drugs/add', payload)
            dispatch('getDrugs');
            Toastify({
                text: "Drug Created Succesfully",
                className: "info",
                style: {
                    background: "green",
                }
            }).showToast();
            console.log(res);
        },


        // Get Drug By Id
        async getDrugById({ commit }, id) {
            const res = await axios.get(`/admin/drugs/view/${id}`)
            commit('SET_DRUG', res.data.data);
            console.log(res)
        },

        // Get all Service Prices
        async getDrugsPrices({ commit }) {
            const res = await axios.get('/admin/drugs/price/all')
            commit('SET_DRUGS_PRICES', res.data);
            console.log(res)
        },

        // Create a New Service Price
        async createDrugPrices({ dispatch }, payload) {
            const res = await axios.post('/admin/drugs/price/add', payload)
            dispatch('getDrugsPrices');
            Toastify({
                text: "Drug Created Succesfully",
                className: "info",
                style: {
                    background: "green",
                }
            }).showToast();
            console.log(res);
        },


        // Get Service Price By Id
        async getDrugPriceById({ commit }, id) {
            const res = await axios.get(`/admin/drugs/price/view/${id}`)
            commit('SET_DRUG_PRICE', res.data.data);
            console.log(res)
        },

        // Delete Price
        async deleteDrugPrices({ dispatch }, id) {
            const res = await axios.get(`/admin/drugs/price/delete/${id}`)
            dispatch('getDrugsPrices');
            Toastify({
                text: "Drug Deleted",
                className: "info",
                style: {
                    background: "green",
                }
            }).showToast();
            console.log(res);
        },

        // Edit Price
        async updateDrugPrices({ dispatch }, id) {
            const res = await axios.get(`/admin/drugs/price/update/${id}`)
            dispatch('getDrugsPrices');
            Toastify({
                text: "Drug Deleted",
                className: "info",
                style: {
                    background: "green",
                }
            }).showToast();
            console.log(res);
        },
    }
};