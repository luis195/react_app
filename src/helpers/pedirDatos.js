import {stock} from "../data/stock";

export const pedirDatos = (valor) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(stock)
        }, 3000)
    })
}