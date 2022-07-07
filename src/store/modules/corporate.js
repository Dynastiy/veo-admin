// import Vue from 'vue';
import axios from '@/plugins/axios'
import createPersistedState from 'vuex-persistedstate';

// Vue.prototype.$http = http

const getDefaultState = () => {
    return {
        allCorporate: [],
        corporate: {}
    };
};

export default {
    namespaced: true,
    strict: true,
    plugins: [createPersistedState()],
    state: getDefaultState(),
    getters: {
        getAllCorporate: state => {
            return state.allCorporate
        },
        getCorporate: state => {
            return state.corporate
        }
    },
    mutations: {
        SET_ALL_CORPORATE: (state, allCorporate) => {
            state.allCorporate = allCorporate;
        },
        SET_CORPORATE: (state, corporate) => {
            state.corporate = corporate;
        }
    },
    actions: {
        // Get Hospitals
        async getAllCorporate({ commit }) {
            const res = await axios.get('/admin/hospitals')
            commit('SET_ALL_CORPORATE', res.data);
            return res;
        },

        // Create New Hospital 
        async createCorporateBody({ dispatch }, payload) {
            const res = await axios.post('/admin/hospitals/add', payload)
            dispatch('getAllCorporate')
            return res;
        },

        // Get Single Hospital
        async getCorporate({ commit }, id) {
            const res = await axios.get(`/admin/hospitals/get/${id}`)
            commit('SET_CORPORATE', res.data);
            console.log(res);
        },
    }
};