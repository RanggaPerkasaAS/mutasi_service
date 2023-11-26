const express = require("express");
const cors = require("cors")
const app = express();

app.use(express.json());

const model = require("../models/index");
const transaction = model.transactions;

// Service mutasi
app.post("/mutasi", async (request, response) => {
  try {
    const { id_account, kode_transaksi, amount } = request.body;
    
    let newTransaction = {
      id_account: id_account,
      amount: amount,
      kode_transaksi: kode_transaksi,
    }

    console.log(newTransaction);
    await transaction.create(newTransaction);

    return response.json({
      message: "Permintaan mutasi diterima dan sedang diproses.",
    });
  } catch (error) {
    return response.status(500).json({
      remark: error.message,
    });
  }
});

module.exports = app;