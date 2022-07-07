import Vue from 'vue';
import Vuex from 'vuex';
// import Axios from 'axios';
import createPersistedState from 'vuex-persistedstate';

// Modules 
import auth from './modules/auth'
import hospitalModule from './modules/hospital'
import userModule from './modules/users'
import plansModule from './modules/plans'
import servicesModule from './modules/services'
import drugsModule from './modules/drugs'
import groupsModule from './modules/group'

Vue.use(Vuex);

const getDefaultState = () => {
    return {
        token: '',
        user: {},
        dashboard: []
    };
};

export default new Vuex.Store({
    strict: true,
    plugins: [createPersistedState()],
    state: getDefaultState(),
    getters: {
        isLoggedIn: state => {
            return state.token;
        },
        getUser: state => {
            return state.user;
        },
        getDashboard: state => {
            return state.dashboard;
        }
    },
    mutations: {
        SET_TOKEN: (state, token) => {
            state.token = token;
        },
        SET_USER: (state, user) => {
            state.user = user;
        },
        SET_DASHBOARD: (state, dashboard) => {
            state.dashboard = dashboard;
        },
        RESET: state => {
            Object.assign(state, getDefaultState());
        }
    },
    actions: {
        login: ({ commit }, { token, user }) => {
            commit('SET_TOKEN', token);
            commit('SET_USER', user);
        },
        dashboard: ({ commit }, { dashboard }) => {
            commit('SET_DASHBOARD', dashboard);
        },
        logout: ({ commit }) => {
            commit('RESET', '');
        }
    },
    modules: {
        auth,
        hospitalModule,
        userModule,
        plansModule,
        servicesModule,
        drugsModule,
        groupsModule
    },
});