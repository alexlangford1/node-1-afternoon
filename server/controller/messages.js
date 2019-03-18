const messages = [];

let id = 0;

module.exports = {
  create: (req, res) => {
    const { text, time } = req.body;
    const newMessage = {
      id,
      text,
      time,
    };
    messages.push(newMessage);
    id++;
    res.status(200).send(messages);
  },
  read: (req, res) => {
    res.status(200).send(messages);
  },
  update: (req, res) => {
    const { text, time } = req.body;
    const { id } = req.params;
    let index = null;
    messages.forEach((msg, i) => {
      if (msg.id === id * 1) {
        index = i;
      }
    });
    messages[index] = {
      id: messages[index].id,
      text,
      time,
    };
    res.status(200).send(messages);
  },
  delete: (req, res) => {
    const { id } = req.params;
    let index = null;
    messages.forEach((msg, i) => {
      if (msg.id === id * 1) {
        index = i;
      }
    });
    messages.splice(index, 1)
    res.status(200).send(messages);
  },
};
