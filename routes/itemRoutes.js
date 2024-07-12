const express = require('express');
const {createItem,getItems}= require("../controllers/itemController")


const router = express.Router();
router.post("/",createItem);
router.get("/",getItems);

module.exports =  router;