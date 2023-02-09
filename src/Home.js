import React from "react";
import QRCode from "react-qr-code";
import Interval from 'react-interval-rerender';

function fetchQR(Nithin){
return(
<div style={{ height: "auto", margin: "0 auto", maxWidth: 64, width: "100%" }}>
    <QRCode
    size={256}
    style={{ height: "auto", maxWidth: "100%", width: "100%" }}
    value={Nithin}
    viewBox={`0 0 256 256`}
    />
    <Interval delay={1000}>{() => new Date().toLocaleTimeString()}</Interval>
</div>
)
}

export default fetchQR;


