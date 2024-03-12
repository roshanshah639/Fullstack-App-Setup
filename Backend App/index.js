import express from "express";
import "dotenv/config";

const app = express();

// app.get("/", (req, res) => {
//   res.send("<h1>Server is ready!</h1>");
// });

// get a list of 10 jokes
app.get("/api/jokes", (req, res) => {
  const jokes = [
    {
      id: 1,
      title: "Joke 01",
      content: "Joke 01 content",
    },
    {
      id: 2,
      title: "Joke 02",
      content: "Joke 02 content",
    },
    {
      id: 3,
      title: "Joke 03",
      content: "Joke 03 content",
    },
    {
      id: 4,
      title: "Joke 04",
      content: "Joke 04 content",
    },
    {
      id: 5,
      title: "Joke 05",
      content: "Joke 05 content",
    },
    {
      id: 6,
      title: "Joke 06",
      content: "Joke 06 content",
    },
    {
      id: 7,
      title: "Joke 07",
      content: "Joke 07 content",
    },
    {
      id: 8,
      title: "Joke 08",
      content: "Joke 08 content",
    },
    {
      id: 9,
      title: "Joke 09",
      content: "Joke 09 content",
    },
    {
      id: 10,
      title: "Joke 10",
      content: "Joke 10 content",
    },
  ];
  res.send(jokes);
});

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Server is Running on Port ${PORT}`);
});
