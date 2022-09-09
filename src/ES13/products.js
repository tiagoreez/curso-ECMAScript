import fetch from "node-fetch";

const API = 'https://api.escuelajs.co/api/v1/products'

const response = await fetch(API)
const products = await response.json()

export {products}