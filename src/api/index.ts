
import request from 'request';
import express, { Request, Response } from "express";
import { Autor, Item } from '../types';
import {Utils} from '../libs'
const router = express.Router();
const { API }: any = process.env;

router.get("/items", async (req: Request, res: Response) => {
 
    try {
        const { search } = req.query;
        request(`${API}search?q=${search}`,async (error, response)=> {
            if(error) {
                return  res.json({ error: error, message: "Error procesando datos" });
            }
            
            const { results, filters } = JSON.parse(response.body)
            const categies: Array<string> = await Utils.getCategorys(filters)
            
            const items: Array<Item> = results.filter((item: object, index: number) => index <= 4)
                .map( (item: any) => {
                    const price =  Utils.row(item.prices.prices);
                    return {
                        id: item.id,
                        title: item.title,
                        price: {
                            currency: price.currency_id,
                            amount:  price.amount,
                            // decimals:null
                        },
                        picture: item.thumbnail,
                        condition: item.condition,
                        free_shipping: item.shipping.free_shipping
                    }
                })
            
            res.json({
                categies: categies,
                items:items
            });
            
        });
        
  } catch (error) {
    res.json({ name: "error", message: "Error procesando datos" });
  }
});


export default router;
