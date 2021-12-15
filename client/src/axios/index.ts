import axios from 'axios';
import axiosConfig from './axiosConfig';

export default axios.create({...axiosConfig})

