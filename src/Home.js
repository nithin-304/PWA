import React from "react";
import QRCode from "react-qr-code";
import Interval from "react-interval-rerender";

function fetchQR(t) {
  return (
    <div
      style={{ height: "auto", margin: "0 auto", maxWidth: 64, width: "100%" }}
    >
      <QRCode
        size={256}
        style={{ height: "auto", maxWidth: "100%", width: "100%" }}
        value={t}
        viewBox={`0 0 256 256`}
      />
      <div>{t}</div>
    </div>
  );
}

export default function home() {
  return (
    <div>
      <Interval delay={1000}>
        {() => fetchQR(new Date().toLocaleTimeString())}
      </Interval>
    </div>
  );
}
