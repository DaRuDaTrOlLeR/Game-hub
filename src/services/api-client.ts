import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '4577c9dea92f4a6c8d22b23ce44809c4'
    }
})