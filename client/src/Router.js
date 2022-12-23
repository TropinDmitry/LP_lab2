import axios from 'axios'
const BASE_URL = "http://localhost:8000/"

export default class Router {
    static async get(crrntPath) {
        try {
            const res = await axios({
                method:'get',
                url: BASE_URL + '',
                params: { crrntPath }
            })
            return res.data
        } catch (e) {
            console.log(e)
        }
    }

    static async download(crrntPath) {
        try {
            const res = await axios({
                method:'get',
                responseType: 'blob',
                url: BASE_URL + 'download',
                params: { crrntPath }
            })

            return res.data
        } catch (e) {
            console.log(e)
        }
    }

    static async upload(formData) {
        try {
            const res = await axios.post(BASE_URL + 'upload', formData, {
                headers: { 'content-type': 'multipart/form-data' }
            })

            return res.data
        } catch (e) {
            console.log(e)
        }
    }

    static async create(crrntPath) {
        try {
            const res = await axios({
                method:'post',
                url: BASE_URL + 'create',
                data: { crrntPath }
            })

            return res.data
        } catch (e) {
            console.log(e)
        }
    }

    static async delete(crrntPath) {
        try {
            const res = await axios({
                method:'delete',
                url: BASE_URL + 'delete',
                data: { crrntPath }
            })

            return res.data
        } catch (e) {
            console.log(e)
        }
    }
}