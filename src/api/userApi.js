import { HEIGHT_USER, LIST_COUNTRY, REGISTER_USER, WEIGHT_USER } from "../config/urls";
import {apiGet,apiPost} from '../utils/utils'
export const userGetHeight =()=>{
  
    apiGet(HEIGHT_USER)
    .then((response) => {
        // var a = []
        // for (var i = 0; i < list; i++) {
        //     var counter = response.data.listing[i];
        //     Name = counter.name
        //     ID = counter._id
        //     this.state.arrHeight[i] = { _id: ID, name: Name }
        console.log(response.data.listing)
        return response.data.listing
        
    })
    .catch((error) => {
        console.log(error);
        alert('SOME ERROR')
    });
}
export const userGetWeight =() =>{

apiGet(WEIGHT_USER)
    .then((response) => {
        console.log(response.data.listing)
        return response.data.listing
    
        // console.log(response.data.listing, "hello")
        // var list = (response.data.listing).length;
        // var a = []
        // for (var i = 0; i < list; i++) {
        //     var counter = response.data.listing[i];
        //     Name = counter.name
        //     ID = counter._id
        //     this.state.arrWeight[i] = { _id: ID, name: Name }
    })
    .catch((error) => {
        console.log(error);
        alert('SOME ERROR')
    });
}

export const userGetCountry = () =>{
apiGet(LIST_COUNTRY)
    .then((response) => {
        console.log(response.data.listing)
        return response.data.listing
        // var list = (response.data.listing).length;
        // var a = []
        // for (var i = 0; i < list; i++) {
        //     var counter = response.data.listing[i];
        //     Name = counter.name
        //     ID = counter._id
        //     this.state.arrCountry[i] = { _id: ID, name: Name }

        // }

    })
    .catch((error) => {
        console.log(error);
        alert('SOME ERROR')
    });
}

export const userRegister =()=>{
    apiPost(REGISTER_USER)  
        .then( (response) => {
            console.log(response);
            alert('SUCCESSFULLY REGISTERED')

        })
        .catch( (error) => {
            console.log(error);
            alert('SOMETHING WRONG IN DATA')
        });

}