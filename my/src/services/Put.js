import axios from 'axios';
import {OnlineRoot, RootPath} from './Config';
//PUT
const PUT = (path, root, data) => {
    const promise = new Promise((resolve, reject) => {
        axios.put(`${root ? OnlineRoot : RootPath}/${path}`, data).then((res) => {
            resolve(res);
        }, (err) => {
            reject(err)
        })
      
    })
        
    return promise;
}

export default PUT;


