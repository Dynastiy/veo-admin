// import Vue from 'vue';
import axios from '@/plugins/axios'
import createPersistedState from 'vuex-persistedstate';

// Vue.prototype.$http = http

const getDefaultState = () => {
    return {
        allHospitals: [],
        hospital: {}
    };
};

export default {
    namespaced: true,
    strict: true,
    plugins: [createPersistedState()],
    state: getDefaultState(),
    getters: {
        hospitals: state => {
            return state.allHospitals
        },
        hospital: state => {
            return state.hospital
        }
    },
    mutations: {
        SET_HOSPITALS: (state, allHospitals) => {
            state.allHospitals = allHospitals;
        },
        SET_HOSPITAL: (state, hospital) => {
            state.hospital = hospital;
        }
    },
    actions: {
        // Get Hospitals
        async getHospitals({ commit }) {
            const res = await axios.get('/admin/hospitals')
            commit('SET_HOSPITALS', res.data);
            return res;
        },

        // Create New Hospital 
        async createHospital({ dispatch }, payload) {
            const res = await axios.post('/admin/hospitals/add', payload)
            dispatch('getHospitals')
            return res;
        },

        // Get Single Hospital
        async getHospital({ commit }, id) {
            const res = await axios.get(`/admin/hospitals/get/${id}`)
            commit('SET_HOSPITAL', res.data);
            console.log(res);
        },
    }
};