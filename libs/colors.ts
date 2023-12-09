"use client";

const webColors = ["#22d3ee"];

const colors = {
  primary: webColors[Math.floor(Math.random() * webColors.length)],
  gradientstart: "#f69dc2",
  gradientFinish: "#9089fc",
  substitute: "#e84646",
};

const getRunTimeColor = () => colors;

export {colors, getRunTimeColor, webColors};
