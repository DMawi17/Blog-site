import express from "express";
import articleRouter from "./routes/articles.js";
const app = express();

// view engine convert ejs code to html
app.set("view engine", "ejs");

app.use("/articles", articleRouter);

app.get("/", (req, res) => {
    // creating variable to be passed to index.ejs
    const articles = [
        {
            title: "Test Articles",
            createdAt: new Date(),
            description: "Test description",
        },
        {
            title: "Test Articles 2",
            createdAt: new Date(),
            description: "Test description 2",
        },
    ];
    res.render("articles/index", { articles: articles });
});

// listening
app.listen(5000);
