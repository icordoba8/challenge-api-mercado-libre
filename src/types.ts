interface Autor {
  name: string;
  lastname: string;
}


interface Price {
    currency: string,
    amount: number,
    decimals?: number
}


interface Item {
    id: string,
    title: string,
    price: Price,
    picture: string,
    condition: string,
    free_shipping: boolean,
    sold_quantity?: number
    description?: string
}


export {Autor,Item}






