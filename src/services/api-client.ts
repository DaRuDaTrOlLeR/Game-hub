import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '3d51b987c6a24e3d9b32cc0e3242bffd'
    }
})