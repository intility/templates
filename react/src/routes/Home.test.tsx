import { render } from "@testing-library/react";
import Home from "./Home";

test("renders read-the-docs paragraph", () => {
  const result = render(<Home />);

  const element = result.getByText(
    /Click on the Vite and React logos to learn more/i,
  );

  expect(element).toBeInTheDocument();
});
