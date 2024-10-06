const express = require("express");
const app = express();
const axios = require('axios');

app.use(express.json());


const port = 4000;

const MV_IP = "52.201.250.208";
const HOST_MON = "http://" + MV_IP + ":3000/";
const HOST_MSQL = "http://" + MV_IP + ":5000/";
const HOST_PSQL = "http://" + MV_IP + ":8080/";

// Deudas API

app.get("/deudas", (req, res) => {
  fetch(HOST_MON + "api/deudas")
    .then((response) => response.json())
    .then((data) => {
      res.send(data);
    })
    .catch((error) => console.log(error));
});

app.post("/deudas", (req, res) => {
  fetch(HOST_MON + "api/deudas", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(req.body),
  })
    .then((response) => response.json())
    .then((data) => {
      res.send(data);
    })
    .catch((error) => console.log(error));
});

app.get("/deudas/:id", (req, res) => {
  fetch(HOST_MON + "api/deudas/" + req.params.id)
    .then((response) => response.json())
    .then((data) => {
      res.send(data);
    })
    .catch((error) => console.log(error));
});

app.put("/deudas/:id", (req, res) => {
  fetch(HOST_MON + "api/deudas/" + req.params.id, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(req.body),
  })
    .then((response) => response.json())
    .then((data) => {
      res.send(data);
    })
    .catch((error) => console.log(error));
});

app.delete("/deudas/:id", (req, res) => {
  fetch(HOST_MON + "api/deudas/" + req.params.id, {
    method: "DELETE",
  })
    .then((response) => response.json())
    .then((data) => {
      res.send(data);
    })
    .catch((error) => console.log(error));
});

// RecordPagos API

app.get("/recordpago", (req, res) => {
  fetch(HOST_MON + "api/recordpago")
    .then((response) => response.json())
    .then((data) => {
      res.send(data);
    })
    .catch((error) => console.log(error));
});

app.post("/recordpago", (req, res) => {
  fetch(HOST_MON + "api/recordpago", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(req.body),
  })
    .then((response) => response.json())
    .then((data) => {
      res.send(data);
    })
    .catch((error) => console.log(error));
});

app.get("/recordpago/:id", (req, res) => {
  fetch(HOST_MON + "api/recordpago/" + req.params.id)
    .then((response) => response.json())
    .then((data) => {
      res.send(data);
    })
    .catch((error) => console.log(error));
});

app.get("/recordpago/deuda/:id_deuda", (req, res) => {
  fetch(HOST_MON + "api/recordpago/deuda/" + req.params.id_deuda)
    .then((response) => response.json())
    .then((data) => {
      res.send(data);
    })
    .catch((error) => console.log(error));
});

app.put("/recordpago/:id", (req, res) => {
  fetch(HOST_MON + "api/recordpago/" + req.params.id, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(req.body),
  })
    .then((response) => response.json())
    .then((data) => {
      res.send(data);
    })
    .catch((error) => console.log(error));
});

app.delete("/recordpago/:id", (req, res) => {
  fetch(HOST_MON + "api/recordpago/" + req.params.id, {
    method: "DELETE",
  })
    .then((response) => response.json())
    .then((data) => {
      res.send(data);
    })
    .catch((error) => console.log(error));
});

// Clientes API

app.get("/clientes", (req, res) => {
  fetch(HOST_MSQL + "clientes")
    .then((response) => response.json())
    .then((data) => {
      res.send(data);
    })
    .catch((error) => console.log(error));
});

app.post("/clientes", (req, res) => {
  console.log(req.body);

  axios.post(HOST_MSQL + "clientes", req.body)
    .then((response) => {
      console.log(response)
  
      return response.data})
    .then((data) => {
      res.send(data);
    }).catch((error) => console.log(error));
});

app.get("/clientes/:id", (req, res) => {
  fetch(HOST_MSQL + "clientes/" + req.params.id)
    .then((response) => response.json())
    .then((data) => {
      res.send(data);
    })
    .catch((error) => console.log(error));
});

app.put("/clientes/:id", (req, res) => {
  fetch(HOST_MSQL + "clientes/" + req.params.id, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(req.body),
  })
    .then((response) => response.json())
    .then((data) => {
      res.send(data);
    })
    .catch((error) => console.log(error));
});

app.delete("/clientes/:id", (req, res) => {
  axios.delete(HOST_MSQL + "clientes/" + req.params.id) 
    .then((response) => { 
      return response.data})
      .then((data) => {
        res.send(data);
      }).catch((error) => console.log(error));
});

// Transacciones API

app.get("/transaccion", (req, res) => {
  fetch(HOST_PSQL + "transaccion/all")
    .then((response) => response.json())
    .then((data) => {
      res.send(data);
    })
    .catch((error) => console.log(error));
});

app.post("/transaccion", (req, res) => {
  axios.post(HOST_PSQL + "transaccion/", req.body)
    .then((response) => {
      return response.data})
      .then((data) => {
        res.send(data);
      }).catch((error) => console.log(error));
});

app.put("/transaccion/:id", (req, res) => {
  fetch(HOST_PSQL + "transaccion/" + req.params.id, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(req.body),
  })
    .then((response) => response.json())
    .then((data) => {
      res.send(data);
    })
    .catch((error) => console.log(error));
});

app.delete("/transaccion/:id", (req, res) => {
  axios.delete(HOST_PSQL + "transaccion/" + req.params.id)
    .then((response) => response.data)
    .then((data) => {
      res.send(data);
    })
    .catch((error) => console.log(error));
});

// TipoTransaccion API

app.get("/tipotransaccion", (req, res) => {
  fetch(HOST_PSQL + "tipotransaccion")
    .then((response) => response.json())
    .then((data) => {
      res.send(data);
    })
    .catch((error) => console.log(error));
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
