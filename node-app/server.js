const express = require('express');
const bodyParser = require('body-parser');
const mondaySdk = require('monday-sdk-js');
const app = express();
const port = 3000;

const monday = mondaySdk();
monday.setToken(process.env.MONDAY_API_KEY);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/add-to-table', async (req, res) => {
  try {
    const result = await monday.api(
      `mutation {
        create_item (
          board_id: 4314605035,
          group_id: 4314605039,
          item_name: "${req.body.itemName}",
          column_values: "{\"numbers\":\"${req.body.columnValue}\"}"
        ) {
          id
        }
      }`
    );
    res.send('Item added successfully');
  } catch (error) {
    console.log(error);
    res.status(500).send('An error occurred');
  }
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
