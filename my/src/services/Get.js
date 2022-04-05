import axios from 'axios';
import {OnlineRoot, RootPath} from './Config';
//GET
const Get = (path, root) => {
    const promise = new Promise((resolve, reject) => {
        axios.get(`${root ? OnlineRoot : RootPath}/${path}`)
            .then((res) => {
                //jika sukses maka akan mengirimkan res.data
                resolve(res.data);
                // this.setState({
                //     post: res.data
                // });
            }, (err) => {
                reject(err);
            })
    })

    return promise;
}

export default Get;