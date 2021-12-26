import { render, screen } from "@testing-library/react";
import React from "react";
import App from "./App";

test("renders a land like", () => {
  render(<App />);
  const linkElement = screen.getByText("A land like");
  expect(linkElement).toBeInTheDocument();
});
