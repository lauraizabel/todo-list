// not using so far --

import pool from "./pool";

module.exports = {
    query(queryText, params){
        return new Promise((resolve, reject) =>{
            pool.query(queryText, params)
            .then((res) => {
                resolve(res);
            }).catch((err) => {
                reject(err);
            });
        });
    }
}