import mongodb from "mongodb";
import dotenv from "dotenv";

dotenv.config();

const client = await mongodb.MongoClient.connect(process.env.MONGODB_URI);
const db = client.db("cartitems");

export const insertCartItem = async (name) => {
  const { insertedId } = await db
    .collection("cartitems")
    .insertOne({ name: name });
  return insertedId;
};

export const getCartItem = async (id) => {
  const { cartitem } = await db
    .collection("cartitems")
    .findOne({ _id: new mongodb.ObjectId(id) });
  return cartitem;
};

export const getCartItems = async () => {
  const cartitems = await db.collection("cartitems").find().toArray();
  // return cartitems;
  return cartitems.map(function ({ _id, name, price }) {
    return { id: _id, name: name, price: price };
  });
};
