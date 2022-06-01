const { response } = require("express");
const express = require("express");
const app = express();
const PORT = 8002;

// content

const bballPlayers = {
  "lebron james": {
    number: 23,
    team: "Los Angeles Lakers",
    position: "Small forward",
  },

  "chris paul": {
    number: 3,
    team: "Phoenix Suns",
    position: "Point guard",
  },

  "Russell Westbrook": {
    number: 0,
    team: "Los Angeles Lakers",
    position: "Point guard",
  },
};

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/api", (req, res) => {
  //  console.log(req.params.playerName)

  res.json(bballPlayers);
});

app.get("/api/:playerName", (req, res) => {
  // console.log(req.params.playerName)
  const playersName = req.params.playerName.toLowerCase();

  bballPlayers[playersName]
    ? res.json(bballPlayers[playersName])
    : res.json(bballPlayers["russell westbrook"]);

  //  res.json(bballPlayers);
});

// listening code
app.listen(PORT, () => {
  console.log(`The server is running and it's on port ${PORT}`);
});
