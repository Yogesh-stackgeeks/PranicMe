import axios from 'axios';
import { REGISTER_USER } from '../config/urls';


export const UserPostApi =()=>{
axios.post(REGISTER_USER)

}