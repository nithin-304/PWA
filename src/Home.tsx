import React from "react";
import Interval from 'react-interval-rerender';

const Clock = () => (
  <Interval delay={1000}>{() => new Date().toLocaleTimeString()}</Interval>
)

export default Clock;