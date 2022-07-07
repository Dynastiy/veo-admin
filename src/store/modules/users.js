// import Vue from 'vue';
import axios from '@/plugins/axios'
import createPersistedState from 'vuex-persistedstate';

// Vue.prototype.$http = http

const getDefaultState = () => {
    return {
        users: [],
        single_user: {}
    };
};

export default {
    namespaced: true,
    strict: true,
    plugins: [createPersistedState()],
    state: getDefaultState(),
    getters: {
        getUsers: state => {
            return state.users
        },
        user: state => {
            return state.single_user
        }
    },
    mutations: {
        SET_USERS: (state, users) => {
            state.users = users;
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
        async getUsers({ commit }) {
            const res = await axios.get('/admin/users')
            commit('SET_USERS', res.data.data);
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