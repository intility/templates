import { render } from "@testing-library/react";
import App from "./App";

test("renders read-the-docs paragraph", () => {
  const result = render(<App />);

  const element = result.getByText(
    /Click on the Vite and React logos to learn more/i,
  );

  expect(element).toBeInTheDocument();
});
