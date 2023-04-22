/*
MADE BY stf-dev-ro
stf.dev.ro@gmail.com

Github:
https://github.com/stf-dev-ro/stf-dev-ro

TikTok:
https://tiktok.com/@stf.dev

Check out some other projects:
https://github.com/stf-dev-ro/Stefan-Web-Server

visit the official website:
https://stf-dev-ro.github.io/StefanTechnologies/


Built With TypeScript
Made to work with JavaScript version ES6 or higher

*/

export class Item {

    name: string
    price: number

    constructor(name: string, price: number) {
        this.name = name
        this.price = price
    }

}

class shoppingCartMethod {

    addItem(itemToAdd, quantity) {
        for (let i = 0; i < quantity; i++) {
            shoppingCart.push(itemToAdd)
        }
    }

    removeItem(itemToRemove: any, quantity: number) {
        for (let i = 0; i < quantity; i++) {
            const indexToRemove = shoppingCart.indexOf(itemToRemove)
            if (indexToRemove !== -1) {
                shoppingCart.splice(indexToRemove, 1)
            }
        }
    }
}

// Shorter document.getElementById
export function $(element) {
    return document.getElementById(element)
}

// Create a new instance of shoppingCartMethod
export const cartMethod = new shoppingCartMethod()

// Create the cart array
export const shoppingCart: string[] = []
