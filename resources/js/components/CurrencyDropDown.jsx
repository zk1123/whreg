import { useState } from "react";

export default function FlagSelect({ value, onChange, symbols }) {
  const currencyToCountry = {
  AED: "ae",
  AFN: "af",
  ALL: "al",
  AMD: "am",
  ANG: "nl",
  AOA: "ao",
  ARS: "ar",
  AUD: "au",
  AWG: "aw",
  AZN: "az",
  BAM: "ba",
  BBD: "bb",
  BDT: "bd",
  BGN: "bg",
  BHD: "bh",
  BMD: "bm",
  BND: "bn",
  BOB: "bo",
  BRL: "br",
  BSD: "bs",
  BTN: "bt",
  BWP: "bw",
  BYN: "by",
  BZD: "bz",
  CAD: "ca",
  CDF: "cd",
  CHF: "ch",
  CLP: "cl",
  CNY: "cn",
  COP: "co",
  CRC: "cr",
  CUP: "cu",
  CVE: "cv",
  CZK: "cz",
  DJF: "dj",
  DKK: "dk",
  DOP: "do",
  DZD: "dz",
  EGP: "eg",
  ERN: "er",
  ETB: "et",
  EUR: "eu",
  FJD: "fj",
  FKP: "fk",
  GBP: "gb",
  GEL: "ge",
  GHS: "gh",
  GIP: "gi",
  GMD: "gm",
  GNF: "gn",
  GTQ: "gt",
  GYD: "gy",
  HKD: "hk",
  HNL: "hn",
  HRK: "hr",
  HTG: "ht",
  HUF: "hu",
  IDR: "id",
  ILS: "il",
  INR: "in",
  IQD: "iq",
  IRR: "ir",
  ISK: "is",
  JMD: "jm",
  JOD: "jo",
  JPY: "jp",
  KES: "ke",
  KGS: "kg",
  KHR: "kh",
  KMF: "km",
  KRW: "kr",
  KWD: "kw",
  KYD: "ky",
  KZT: "kz",
  LAK: "la",
  LBP: "lb",
  LKR: "lk",
  LRD: "lr",
  LSL: "ls",
  LYD: "ly",
  MAD: "ma",
  MDL: "md",
  MGA: "mg",
  MKD: "mk",
  MMK: "mm",
  MNT: "mn",
  MOP: "mo",
  MRU: "mr",
  MUR: "mu",
  MVR: "mv",
  MWK: "mw",
  MXN: "mx",
  MYR: "my",
  MZN: "mz",
  NAD: "na",
  NGN: "ng",
  NIO: "ni",
  NOK: "no",
  NPR: "np",
  NZD: "nz",
  OMR: "om",
  PAB: "pa",
  PEN: "pe",
  PGK: "pg",
  PHP: "ph",
  PKR: "pk",
  PLN: "pl",
  PYG: "py",
  QAR: "qa",
  RON: "ro",
  RSD: "rs",
  RUB: "ru",
  RWF: "rw",
  SAR: "sa",
  SBD: "sb",
  SCR: "sc",
  SDG: "sd",
  SEK: "se",
  SGD: "sg",
  SHP: "sh",
  SLL: "sl",
  SOS: "so",
  SRD: "sr",
  STN: "st",
  SVC: "sv",
  SYP: "sy",
  SZL: "sz",
  THB: "th",
  TJS: "tj",
  TMT: "tm",
  TND: "tn",
  TOP: "to",
  TRY: "tr",
  TTD: "tt",
  TWD: "tw",
  TZS: "tz",
  UAH: "ua",
  UGX: "ug",
  USD: "us",
  UYU: "uy",
  UZS: "uz",
  VES: "ve",
  VND: "vn",
  VUV: "vu",
  WST: "ws",
  XAF: "cm",
  XCD: "ag",
  XOF: "sn",
  XPF: "pf",
  YER: "ye",
  ZAR: "za",
  ZMW: "zm",
  ZWL: "zw",
  };

  const [open, setOpen] = useState(false);

  const getFlag = (code) =>
    `https://flagcdn.com/24x18/${currencyToCountry[code]?.toLowerCase()}.png`;

  return (
    <div className="dropdown mb-3">
      <button
        type="button"
        className="btn dropdown-toggle w-100 d-flex align-items-center justify-content-between"
        style={{
          backgroundColor: "#fffef6",
          border: "2px solid #dca878",
          borderRadius: "8px",
        }}
        onClick={() => setOpen(!open)}
      >
        <div className="d-flex align-items-center gap-2">
          <img
            src={getFlag(value)}
            alt={value}
            style={{ width: "24px", height: "18px", borderRadius: "4px" }}
          />
          <span style={{ color: "#7b0000", fontWeight: 600 }}>{value}</span>
        </div>
      </button>

      <ul
        className={`dropdown-menu w-100 ${open ? "show" : ""}`}
        style={{
          backgroundColor: "#fffef6",
          border: "2px solid #dca878",
          maxHeight: "250px",
          overflowY: "auto",
        }}
      >
        {symbols.map((sym) => (
          <li key={sym}>
            <button
              type="button"
              className="dropdown-item d-flex align-items-center gap-2"
              style={{ backgroundColor: "#fffef6" }}
              onClick={() => {
                onChange(sym);
                setOpen(false);
              }}
            >
              <img
                src={getFlag(sym)}
                alt={sym}
                style={{ width: "24px", height: "18px", borderRadius: "4px" }}
              />
              <span style={{ color: "#7b0000", fontWeight: 600 }}>{sym}</span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
