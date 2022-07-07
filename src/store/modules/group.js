// import Vue from 'vue';
import axios from '@/plugins/axios'
import createPersistedState from 'vuex-persistedstate';

// Vue.prototype.$http = http

const getDefaultState = () => {
    return {
        allGroups: [],
        group: {}
    };
};

export default {
    namespaced: true,
    strict: true,
    plugins: [createPersistedState()],
    state: getDefaultState(),
    getters: {
        getGroups: state => {
            return state.allGroups
        },
        getGroup: state => {
            return state.group
        }
    },
    mutations: {
        SET_GROUPS: (state, allGroups) => {
            state.allGroups = allGroups;
        },
        SET_GROUP: (state, group) => {
            state.group = group;
        }
    },
    actions: {
        // Get Groups
        async getGroups({ commit }) {
            const res = await axios.get('/admin/groups')
            commit('SET_GROUPS', res.data);
            console.log(res);
        },

        // Create New Group
        async createGroup({ dispatch }, payload) {
            const res = await axios.post('/admin/groups/add', payload)
            dispatch('getGroups')
            console.log(res);
        },

        // Add Group Members
        async addGroupMembers({ dispatch }, payload) {
            const res = await axios.post('/admin/groups/members/add', payload)
            dispatch('getGroups')
            console.log(res);
        },

        // Get Single Group
        async getGroup({ commit }, id) {
            const res = await axios.get(`/admin/groups/get/${id}`)
            commit('SET_GROUP', res.data);
            console.log(res);
        },
    }
};