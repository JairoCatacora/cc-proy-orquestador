const express = require("express");
const app = express();
const axios = require('axios');
const cors = require('cors');

app.use(express.json());
app.use(cors());

const port = 4000;

const MV_IP = "184.72.174.94";
const HOST_MON = "http://" + MV_IP + ":3000/";
const HOST_MSQL = "http://" + MV_IP + ":5000/";
const HOST_PSQL = "http://" + MV_IP + ":8080/";

// Deudas API

app.get("/deudas", (req, res) => {
  axios.get(HOST_MON + "api/deudas")
    .then((response) => res.send(response.data))
    .catch((error) => console.log(error));
});

app.post("/deudas", (req, res) => {
  axios.post(HOST_MON + "api/deudas", req.body)
    .then((response) => res.send(response.data))
    .catch((error) => console.log(error));
});

app.get("/deudas/:id", (req, res) => {
  axios.get(HOST_MON + "api/deudas/" + req.params.id)
    .then((response) => res.send(response.data))
    .catch((error) => console.log(error));
});

app.put("/deudas/:id", (req, res) => {
  axios.put(HOST_MON + "api/deudas/" + req.params.id, req.body)
    .then((response) => res.send(response.data))
    .catch((error) => console.log(error));
});

app.delete("/deudas/:id", (req, res) => {
  axios.delete(HOST_MON + "api/deudas/" + req.params.id)
    .then((response) => res.send(response.data))
    .catch((error) => console.log(error));
});

// RecordPagos API

app.get("/recordpago", (req, res) => {
  axios.get(HOST_MON + "api/recordpago")
    .then((response) => res.send(response.data))
    .catch((error) => console.log(error));
});

app.post("/recordpago", (req, res) => {
  axios.post(HOST_MON + "api/recordpago", req.body)
    .then((response) => res.send(response.data))
    .catch((error) => console.log(error));
});

app.get("/recordpago/:id", (req, res) => {
  axios.get(HOST_MON + "api/recordpago/" + req.params.id)
    .then((response) => res.send(response.data))
    .catch((error) => console.log(error));
});

app.get("/recordpago/deuda/:id_deuda", (req, res) => {
  axios.get(HOST_MON + "api/recordpago/deuda/" + req.params.id_deuda)
    .then((response) => res.send(response.data))
    .catch((error) => console.log(error));
});

app.put("/recordpago/:id", (req, res) => {
  axios.put(HOST_MON + "api/recordpago/" + req.params.id, req.body)
    .then((response) => res.send(response.data))
    .catch((error) => console.log(error));
});

app.delete("/recordpago/:id", (req, res) => {
  axios.delete(HOST_MON + "api/recordpago/" + req.params.id)
    .then((response) => res.send(response.data))
    .catch((error) => console.log(error));
});

// Clientes API

app.get("/clientes", (req, res) => {
  axios.get(HOST_MSQL + "clientes")
    .then((response) => res.send(response.data))
    .catch((error) => console.log(error));
});

app.post("/clientes", (req, res) => {
  axios.post(HOST_MSQL + "clientes", req.body)
    .then((response) => res.send(response.data))
    .catch((error) => console.log(error));
});

app.get("/clientes/:id", (req, res) => {
  axios.get(HOST_MSQL + "clientes/" + req.params.id)
    .then((response) => res.send(response.data))
    .catch((error) => console.log(error));
});

app.put("/clientes/:id", (req, res) => {
  axios.put(HOST_MSQL + "clientes/" + req.params.id, req.body)
    .then((response) => res.send(response.data))
    .catch((error) => console.log(error));
});

app.delete("/clientes/:id", (req, res) => {
  axios.delete(HOST_MSQL + "clientes/" + req.params.id)
    .then((response) => res.send(response.data))
    .catch((error) => console.log(error));
});

// Transacciones API

app.get("/transaccion", (req, res) => {
  axios.get(HOST_PSQL + "transaccion/all")
    .then((response) => res.send(response.data))
    .catch((error) => console.log(error));
});

app.post("/transaccion", (req, res) => {
  console.log(req.body);
  axios.post(HOST_PSQL + "transaccion/", req.body)
    .then((response) => res.send(response.data))
    .catch((error) => console.log(error));
  
});

app.put("/transaccion/:id", (req, res) => {
  axios.put(HOST_PSQL + "transaccion/" + req.params.id, req.body)
    .then((response) => res.send(response.data))
    .catch((error) => console.log(error));
});

app.delete("/transaccion/:id", (req, res) => {
  axios.delete(HOST_PSQL + "transaccion/" + req.params.id)
    .then((response) => res.send(response.data))
    .catch((error) => console.log(error));
});

// TipoTransaccion API

app.get("/tipotransaccion", (req, res) => {
  axios.get(HOST_PSQL + "tipotransaccion")
    .then((response) => res.send(response.data))
    .catch((error) => console.log(error));
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
