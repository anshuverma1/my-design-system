import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import BarGraph from "./BarGraph";

test("renders BarGraph", () => {
  render(<BarGraph values={[{ label: "A", value: 70, color: "#4caf50" }]} />);
  expect(screen.getByText("A")).toBeInTheDocument();
});
