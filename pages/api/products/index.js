import dbConnect from "../../../util/mongo";
import Product from "../../../models/Product";

export default async function handler(req, res) {
  const { method, cookies } = req;

  const token = cookies.token

   await dbConnect();

  if (method === "GET") {
    try {
      
      const products = await Product.find();
      res.status(200).json(products);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  if (method === "POST") {
    console.log("HEYA");
    if(!token || token !== process.env.TOKEN){
      console.log("Not authenticated");
      return res.status(401).json("Not authenticated!")
    }
    try {
      const product = await Product.create(req.body);
      res.status(201).json(product);
      console.log("Added!");
    } catch (err) {
      console.log("error");
      res.status(500).json(err);
    }
  }
}