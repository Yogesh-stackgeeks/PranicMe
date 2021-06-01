import axios from 'axios';
import { REGISTER_USER } from '../config/urls';


export const UserPostApi =()=>{
    axios.post(REGISTER_USER, {
        firstName: "check api",
        lastName: 'api response'
      })
      .then(function (response) {
        console.log(response);
        alert('data sended')
      })
      .catch(function (error) {
        console.log(error);
        alert('error')
      });
    }