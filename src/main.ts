import express, { Request, Response } from "express";

const app = express();

app.use(express.json());

app.listen(3000, () => {
    console.log('Server stardet: http://localhost:3000')
});