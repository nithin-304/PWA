import React from "react";
import Interval from 'react-interval-rerender'

const Home: React.FC = () => (
  <h1>Welcome to your PWA!</h1>
);

export const Clock = () => (
  <Interval delay={1000}>{() => new Date().toLocaleTimeString()}</Interval>
)

export default Home;