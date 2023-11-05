"use client";

const webColors = [
  "#fcd34d",
  // "#e33e3e",
  "#a3e635",
  "#22d3ee",
  "#818cf8",
  "#8b5cf6",
];

const colors = {
  primary: webColors[Math.floor(Math.random() * webColors.length)],
  gradientstart: "#f69dc2",
  gradientFinish: "#9089fc",
  substitute: "#e84646",
};

export {colors, webColors};
