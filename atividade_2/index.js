const express = require("express");

const port = 3333;
const app = express();
app.use(express.json());

const data = {
  users: [
    {
      id: 1,
      name: "fulano1",
    },
    {
      id: 2,
      name: "fulano2",
    },
  ],
};

app.get("/users", (request, response) => {
  return response.status(201).json(data.users);
});

app.get("/users/:id", (request, response) => {
  let { id } = request.params;
  id = Number(id);
  const indexId = data.users.findIndex((user) => user.id === id);

  if (indexId >= 0) {
    return response.status(201).json(data.users[indexId]);
  } else {
    return response.status(400).json({ error: "user not exists!" });
  }
});

app.post("/users", (request, response) => {
  const { name } = request.body;

  if (name) {
    const addID = function () {
      let userId = data.users.length + 1;
      const ids = data.users.map((user) => user.id);

      while (ids.includes(userId)) {
        userId++;
      }
      return userId;
    };

    const id = addID();
    const newUser = { id, name };
    data.users.push(newUser);

    return response.status(200).json(newUser);
  } else {
    return response.status(400).json({ error: "Insert an user name!" });
  }
});

app.put("/users/:id", (request, response) => {
  const { id } = request.body;

  if (id) {
    // terminar
  }
});

app.listen(port, console.log("Server is running..."));
