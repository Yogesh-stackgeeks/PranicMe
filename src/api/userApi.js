import { HEIGHT_USER, LIST_COUNTRY, REGISTER_USER, WEIGHT_USER } from "../config/urls";
import { Login } from "../screens";
import {apiGet,apiPost} from '../utils/utils';


export const userGetHeight =()=>{
    const promise = new Promise((resolve, reject) => {
        apiGet(HEIGHT_USER)
                .then((response) => {
                    let data2 = response.data.listing
                    resolve(data2)
                })
                .catch((error) => {
                    alert("HEIGHT API ERROR")
                    reject(error);
                
                });
        });
        return promise;
    }
export const userGetWeight =() =>{
    const promise = new Promise((resolve, reject) => {
apiGet(WEIGHT_USER)
    .then((response) => {
       
       const list = response.data.listing
     resolve(list)
    })
    .catch((error) => {
     reject(error)
        alert('WEIGHT API ERROR')
    });

})
return promise;
}

export const userGetCountry = () =>{
    const promise = new Promise((resolve, reject) => {
apiGet(LIST_COUNTRY)
    .then((response) => {
        const items = response.data.listing
        resolve(items)

    })
    .catch((error) => {
      reject(error)
        alert('COUNTRY API ERROR')
    });
})
return promise
}

export const userRegister =(item)=>{
    apiPost(REGISTER_USER,item)  
        .then( (response) => {
            console.log(response);
            alert('SUCCESSFULLY REGISTERED')
            
        }
)
        .catch( (error) => {
            console.log(error);
            alert('SOMETHING WRONG IN DATA')
        });

}