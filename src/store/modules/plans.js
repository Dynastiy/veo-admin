// import Vue from 'vue';
import axios from '@/plugins/axios'
import createPersistedState from 'vuex-persistedstate';

// Vue.prototype.$http = http

import "toastify-js/src/toastify.css"
import Toastify from 'toastify-js'

const getDefaultState = () => {
    return {
        plans: [],
        plan: {},
        plan_benefits: []
    };
};

export default {
    namespaced: true,
    strict: true,
    plugins: [createPersistedState()],
    state: getDefaultState(),
    getters: {
        getPlans: state => {
            return state.plans
        },
        getPlan: state => {
            return state.plan
        },
        getPlanBenefits: state => {
            return state.plan_benefits
        }
    },
    mutations: {
        SET_PLANS: (state, plans) => {
            state.plans = plans;
        },
        SET_PLAN: (state, plan) => {
            state.plan = plan;
        },
        SET_PLAN_BENEFITS: (state, plan_benefits) => {
            state.plan_benefits = plan_benefits;
        },

    },
    actions: {
        // Get Plans
        async getPlans({ commit }) {
            const res = await axios.get('/admin/plans')
            commit('SET_PLANS', res.data);
            return res
        },

        // Create Plan 
        async createPlan({ dispatch }, payload) {
            const res = await axios.post('/admin/plans/add', payload)
            dispatch('getPlans')
            Toastify({
                text: "Plan Created Succesfully",
                className: "info",
                style: {
                    background: "green",
                }
            }).showToast();
            console.log(res);
        },

        // View Single Plan
        async getPlan({ commit }, id) {
            const res = await axios.get(`/admin/plans/view/${id}`)
            commit('SET_PLAN', res.data.data);
            return res
        },

        // Create Plan Benefit 
        async createPlanBenefit({ commit, dispatch }, payload) {
            const res = await axios.post(`/admin/plans/benefits/add`, payload)
            commit('SET_PLAN_BENEFITS', res.data);
            dispatch('getPlans')
            Toastify({
                text: "Plan Benefit Added",
                className: "info",
                style: {
                    background: "green",
                }
            }).showToast();
            return res
        }

    }
};