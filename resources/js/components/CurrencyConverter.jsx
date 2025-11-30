import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import FlagSelect from "./CurrencyDropDown"; // adjust the path if needed


export default function CurrencyConverter() {
  const API_KEY = "f568979681e3a3d367ee47d5";

  const [symbols, setSymbols] = useState([]);
  const [from, setFrom] = useState("EGP");
  const [to, setTo] = useState("USD");
  const [amount, setAmount] = useState(1);
  const [result, setResult] = useState("");


  // Load all currency codes
  useEffect(() => {
    async function loadSymbols() {
      try {
        const res = await fetch(
          `https://v6.exchangerate-api.com/v6/${API_KEY}/latest/EGP`
        );
        const data = await res.json();
        if (data.conversion_rates) {
          setSymbols(Object.keys(data.conversion_rates));
        }
      } catch (err) {
        console.error("Error loading symbols:", err);
      }
    }
    loadSymbols();
  }, []);

  // Auto convert
  useEffect(() => {
    if (!amount || !from || !to) return;

    async function convert() {
      try {
        const url = `https://v6.exchangerate-api.com/v6/${API_KEY}/pair/${from}/${to}/${amount}`;
        const res = await fetch(url);
        const data = await res.json();

        if (data.conversion_result !== undefined) {
          setResult(data.conversion_result);
        } else {
          setResult("Invalid conversion");
        }
      } catch (err) {
        console.error("Conversion error:", err);
      }

    }

    convert();
  }, [from, to, amount]);

  return (
    <div
      className="container my-5"
    >
      <div
        className="card shadow p-4 mx-auto"
        style={{
          backgroundColor: "#fffef6",
          border: "2px solid #dca878",
          maxWidth: "600px",
          width: "100%",
          borderRadius: "12px",
        }}
      >
        <h2
          className="text-center mb-4"
          style={{ color: "#b30000", fontWeight: "700" }}
        >
          Currency Converter
        </h2>

        {/* FROM */}
        <div className="mb-3">
          <label className="form-label fw-bold">From</label>
          <FlagSelect
           value={from}
           onChange={(val) => setFrom(val)}
           symbols={symbols}
          />
        </div>

        {/* AMOUNT */}
        <div className="mb-3">
          <label className="form-label fw-bold">Amount</label>
          <input
            type="number"
            className="form-control"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            style={{
              border: "2px solid #dca878",
              backgroundColor: "#fffef6",
              borderRadius: "8px",
            }}
          />
        </div>

        {/* TO */}
        <div className="mb-3">
          <label className="form-label fw-bold">To</label>
          <FlagSelect
           value={to}
           onChange={(val) => setTo(val)}
           symbols={symbols}
          />
        </div>

        {/* RESULT */}
        <div
          className="text-center mt-4 p-3 fw-bold"
          id="amnt-rslt"
          style={{
            border: "10px solid #64b0ab",
            backgroundColor: "#ffffff",
            borderRadius: "8px",
            fontSize: "20px",
            color: "#b30000",
          }}
        >
          {result !== "" ? result + " " + to : "—"}
        </div>
      </div>
    </div>
  );
}

