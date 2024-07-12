//import item from model

const Item = require("../models/item");

//controller function to create a new item

const createItem = async (req, res) => {
  try {
    //we are going to create a new item instance from the request body
    const newItem = new Item(req.body);
    //save the new item to the database
    const savedItem = await newItem.save();
    res.status(201).send(savedItem);
  } catch (error) {
    res.status(400).send(error);
  }
};

const getItems = async (req, res) => {
  try {
    const items = await Item.find();
    res.status(200).send(items);
  } catch (error) {
    res.status(400).send(error);
  }
}

module.exports = {
    createItem,
    getItems
}
