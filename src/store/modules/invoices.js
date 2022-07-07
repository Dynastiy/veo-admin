// import Vue from 'vue';
import axios from '@/plugins/axios'
import createPersistedState from 'vuex-persistedstate';

// Vue.prototype.$http = http

const getDefaultState = () => {
    return {
        invoices: [],
        single_user: {}
    };
};

export default {
    namespaced: true,
    strict: true,
    plugins: [createPersistedState()],
    state: getDefaultState(),
    getters: {
        getInvoices: state => {
            return state.invoices
        },
        user: state => {
            return state.single_user
        }
    },
    mutations: {
        SET_INVOICES: (state, invoices) => {
            state.invoices = invoices;
        },
        SET_SINGLE_USER: (state, single_user) => {
            state.single_user = single_user;
        },
        SET_LOGGED_IN: (state, token) => {
            state.token = token;
        },
        SET_USER: (state, user) => {
            state.user = user;
        }
    },
    actions: {
        // Get Countries
        async getInvoices({ commit }) {
            const res = await axios.get('/admin/invoice/all')
            commit('SET_INVOICES', res.data);
            console.log(res);
        },
        // Get User By Id
        async getUserById({ commit }, id) {
            const res = await axios.get(`/admin/users/get/${id}`)
            commit('SET_SINGLE_USER', res.data.data);
            console.log(res);
        },
        // async createHospital({ dispatch }, payload) {
        //     const res = await axios.post('/admin/hospitals/add', payload)
        //     dispatch('getHospitals')
        //     console.log(res);
        // },
    }
};