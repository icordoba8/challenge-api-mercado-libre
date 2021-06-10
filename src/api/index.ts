import express, { Request, Response } from "express";
import axios from "axios";
import { Autor,Item } from '../types';
import {Utils} from '../libs'
const router = express.Router();
const { API }: any = process.env;

router.get("/items", async (req: Request, res: Response) => {
    const autor:Autor = Utils.getAutor(req.cookies);
    try {
        const { search } = req.query;
        const { data } = await axios.get(`${API}/sites/MLA/search?q=${search}`);
        const { results, filters } = data
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
                        decimals:0
                    },
                    picture: item.thumbnail,
                    condition: item.condition,
                    free_shipping: item.shipping.free_shipping
                }
            })
        res.json({
            autor:autor,
            categies: categies,
            items:items
        });
        
  } catch (error) {
    res.json({ name: "error", message: "Error procesando datos" });
  }
});

router.get("/items/:id", async (req: Request, res: Response) => {
    const autor:Autor = Utils.getAutor(req.cookies);
    try {
        const { id } = req.params;
        const { data } = await axios.get(`${API}/items/${id}`);
        const { data: detaill } = await axios.get(`${API}/items/${id}/description`);
        const item: Item = {
           autor:autor,
            id: data.id,
            title: data.title,
            price: {
                currency: data.currency_id,
                amount:  data.price,
                decimals:0
            },
            picture: Utils.row(data.pictures).url,
            condition: data.condition,
            free_shipping: data.shipping.free_shipping,
            sold_quantity: data.sold_quantity,
            description:detaill.plain_text
        }
      res.json(item);
  } catch (error) {
    res.json({ name: "error", message: "Error procesando datos" });
  }
});


export default router;
