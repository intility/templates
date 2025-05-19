import { render } from "@testing-library/react";
import Home from "./Home";

test("renders read-the-docs paragraph", () => {
  const result = render(<Home />);

  const element = result.getByText(/Read the docs/i);

  expect(element).toBeInTheDocument();
});
