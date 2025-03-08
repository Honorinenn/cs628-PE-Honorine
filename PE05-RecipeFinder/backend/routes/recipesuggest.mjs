import express from "express";
import cors from "cors";
import db from "../db/conn.mjs";
import { ObjectId } from "mongodb";

const app = express();
app.use(express.json()); // Add middleware to parse JSON body

// CORS configuration
const corsOptions = {
    origin: 'https://special-succotash-jw47j6jvx9jfr4x-5050.app.github.dev',
    methods: 'GET, POST, PUT, DELETE, OPTIONS',
    allowedHeaders: 'Content-Type, Authorization, Origin, X-Requested-With, Accept',
};
app.use(cors(corsOptions));

const router = express.Router();

// Routes
router.get("/", async (req, res) => {
    let collection = await db.collection("recipes");
    let results = await collection.find({}).toArray();
    res.send(results).status(200);
});

router.get("/:id", async (req, res) => {
    let collection = await db.collection("recipes");
    let query = { _id: new ObjectId(req.params.id) };
    let result = await collection.findOne(query);

    if (!result) res.send("Not found").status(404);
    else res.send(result).status(200);
});

router.post("/", async (req, res) => {
    let newDocument = {
        name: req.body.name,
        ingredients: req.body.ingredients,
        instructions: req.body.instructions,
        cookTime: req.body.cookTime,
        servings: req.body.servings,
        category: req.body.category,
    };
    let collection = await db.collection("recipes");
    let result = await collection.insertOne(newDocument);
    res.send(result).status(201); // Use 201 for successful creation
});

router.patch("/:id", async (req, res) => {
    const query = { _id: new ObjectId(req.params.id) };
    const updates = {
        $set: {
            name: req.body.name,
            ingredients: req.body.ingredients,
            instructions: req.body.instructions,
            cookTime: req.body.cookTime,
            servings: req.body.servings,
            category: req.body.category
        }
    };

    let collection = await db.collection("recipes");
    let result = await collection.updateOne(query, updates);

    res.send(result).status(200);
});

router.delete("/:id", async (req, res) => {
    const query = { _id: new ObjectId(req.params.id) };

    const collection = db.collection("recipes");
    let result = await collection.deleteOne(query);

    res.send(result).status(200);
});

// Mount the router
//app.use("/", router);

// Start the server
//const port = 3000; // Or any other port you prefer
//app.listen(port, () => {
  //  console.log(`Server listening on port ${port}`);
//});

export default router;