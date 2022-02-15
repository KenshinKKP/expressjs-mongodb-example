import express from "express";

import {
  insertCartItem,
  getCartItems,
  getCartItem,
} from "../model/cartitem.js";
const router = express.Router();

router.post("/create", async (req, res) => {
  const insertedId = await insertCartItem(req.body.name);
  res.send({
    id: insertedId,
    name: req.body.name,
  });
});

router.get("/", async (_, res) => {
  const cartitems = await getCartItems();
  res.send({ cartitems });
});

router.get("/:id", async (req, res) => {
  const id = req.params.id;
  const cartitem = await getCartItem(id);
  res.send({ id, cartitem });
});

export default router;
