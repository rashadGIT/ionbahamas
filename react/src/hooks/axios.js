import React, { useEffect, useState } from 'react';
import { failIcon } from '../css/style.css.js'
import { square } from '../env/square'
import axios from 'axios';

const useAxiosGet = async (url,params) => {
    let data = await axios.get(url,params,{headers: {'Accept': 'application/json','Content-Type': 'application/json'}})
    .then(x => x)
    .catch(err => err);
    return {data : data.data, status : data.status, statusText : data.statusText, request : data.request}
}

const useAxiosPost = async (url,params) => {
    let data = await axios.post(url,params,{headers: {'Accept': 'application/json','Content-Type': 'application/json'}})
    .then(x => {
        console.log(x)
        return x;
    })
    .catch(err => {
        console.log(err)
        return err; //err.response.data.message
    });
    console.log(data)
    return data
}

export {
    useAxiosGet,
    useAxiosPost
}