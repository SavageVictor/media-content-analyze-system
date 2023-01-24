const express = require('express');
const connection = require('./connection');
const router = express.Router();

function handle_error(res, error, message) {
  if (error) {
    res.status(500);
    console.log(error);
    res.send('Something went wrong.');
  }
  else if (message) {
    res.send(message);
  }
}

router.post('/source', (req, res) => {
  const { url, request_id } = req.body;
  
  if(!(url && request_id)) {
    res.status(400);
    res.send('There is an empty field: url or request_id).');
    return;
  }
  
  connection.query(
    `INSERT INTO source (id, url, request_id) 
    VALUES (DEFAULT, '${url}', ${request_id})`,
  (error) => handle_error(res, error, 'Record has been added'));
});
  
router.post('/source/:id', (req, res) => {
  const id = req.params.id;
  const { url, request_id } = req.body;
  
  if(!(url && request_id)) {
    res.status(400);
    res.send('There is empty field.');
    return;
  } 
  
  connection.query(
    `INSERT INTO source (id, url, request_id) 
    VALUES (${id}, '${url}', ${request_id})`,
    (error) => handle_error(res, error, 'Record has been added'));
});
  
router.get('/sources', (req, res) => {
  connection.query('SELECT * FROM source', 
  (error, result) => handle_error(res, error, result));
});
  
router.get('/source/:id', (req, res) => {
  const id = req.params.id;
  connection.query(`SELECT * FROM source WHERE id = ${id}`,
  (error, result) => handle_error(res, error, result));
});
  
router.put('/source/:id', (req, res) => {
  const id = req.params.id;
  
  connection.query(`SELECT * FROM source WHERE id = ${id}`,
  (error, [result]) => {
    if (!result) {
      res.status(404);
      res.send("Record not found");
      return;
    }

    if (error) {
      res.status(500);
      console.log(result);
      console.log(error);
      res.send('Something went wrong.');
      return;
    }
    const { url, request_id } = { ...result, ...req.body};
    connection.query(
      `UPDATE source 
      SET url = '${url}', 
      request_id = ${request_id} 
      WHERE id = ${id}`,
    (error) => handle_error(res, error, 'Record has been updated'));
  });
});
  
router.delete('/source/:id', (req, res) => {
  const id = req.params.id;
  connection.query(`DELETE FROM source WHERE id = ${id}`,
  (error) => handle_error(res, error, 'Record has been deleted'));
});

module.exports = router;