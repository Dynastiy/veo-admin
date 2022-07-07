// import Vue from 'vue';
import http from '@/plugins/http'
import Axios from '@/plugins/axios'
import createPersistedState from 'vuex-persistedstate';

// Vue.prototype.$http = http

const getDefaultState = () => {
    return {
        token: '',
        user: {},
        loggedIn: false
    };
};

export default {
    namespaced: true,
    strict: true,
    plugins: [createPersistedState()],
    state: getDefaultState(),
    getters: {
        isAuthenticated: state => {
            return state.token;
        },
        isLoggedIn: state => {
            return state.loggedIn
        },
        getUser: state => {
            return state.user;
        },
    },
    mutations: {
        SET_TOKEN: (state, token) => {
            state.token = token;
        },
        SET_LOGGED_IN: state => {
            state.loggedIn = true;
        },
        SET_USER: (state, user) => {
            state.user = user;
        },
        RESET: state => {
            Object.assign(state, getDefaultState());
        }
    },
    actions: {
        // Get Countries
        async userLogin({ commit }, payload) {
            const res = await http.post('/auth/login', payload)
            commit('SET_TOKEN', res.data.access_token);
            commit('SET_USER', res.data.user);
            let token = res.data.access_token
            localStorage.setItem('token', token)
                // let loggedIn = true
            commit('SET_LOGGED_IN', '')
            console.log(res);
        },
        async userLogout({ commit }) {
            const res = await Axios.post('/auth/logout')
            console.log(res);
            commit('RESET', '');
            localStorage.removeItem('token')
        },
    }
};