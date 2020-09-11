import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import axios from 'axios';

Vue.use(Vuex)

/* eslint-disable no-new */
const store = new Vuex.Store({
    plugins: [createPersistedState()],
    modules: {},

    state: {
        pdf_file_name: '',
        baseApiUrl: 'https://still-inlet-23955.herokuapp.com/'
    },
    mutations: {
        setPdfFileName(state, data) {
            state.pdf_file_name = data
        },

        pdf_file_name_set_null(state){
            state.pdf_file_name = ''
        }
    },
    actions: {
        pdfPost: (context, data) => {
            return axios.post(`${context.state.baseApiUrl}api/pdf/pdf/`, data, {
                headers: {
                    'content-type': 'multipart/form-data',
                }
            })
            //     .then(res => {
            //     context.commit('pdf_file_name_set_null')
            //     context.commit('setPdfFileName', res.data)
            //
            //     console.log(res)
            // }).catch(
            //     err => console.log(err)
            // )

        },

        pdfDelete: (context, data) => {
           return axios.delete(`${context.state.baseApiUrl}api/pdf/pdf/` + data+'/')
        }


    },
})

export default store
