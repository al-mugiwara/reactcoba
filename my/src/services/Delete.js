import axios from 'axios';
import {OnlineRoot, RootPath} from './Config';
//GET
const DELETE = (path, root) => {
    const promise = new Promise((resolve, reject) => {
        axios.delete(`${root ? OnlineRoot : RootPath}/${path}`)
            .then((res) => {
                //jika sukses maka akan mengirimkan res.data
                resolve(res.data);
            }, (err) => {
                reject(err);
            })
    })
    return promise;
}

export default DELETE;
