import { faCircleHalfStroke } from "@fortawesome/free-solid-svg-icons";
import {
  Checkbox,
  type ColorMode,
  Nav,
  useApplyColorMode,
} from "@intility/bifrost-react";
import useLocalStorageState from "use-local-storage-state";

export function ColorModePicker() {
  // persist theme state in local storage.
  // you might want to use a cookie or a database instead?
  const [colorMode, setColorMode] = useLocalStorageState<ColorMode>(
    "bfColorMode",
    {
      defaultValue: "system",
    },
  );
  // keep document theme in sync with state
  useApplyColorMode(colorMode);

  return (
    <Nav.Group icon={faCircleHalfStroke} aria-label="Theme picker">
      <section>
        <Nav.Header>Color theme</Nav.Header>
        <Checkbox
          type="radio"
          label="Dark"
          name="color-theme"
          checked={colorMode === "dark"}
          onChange={() => setColorMode("dark")}
        />
        <Checkbox
          type="radio"
          label="Light"
          name="color-theme"
          checked={colorMode === "light"}
          onChange={() => setColorMode("light")}
        />
        <Checkbox
          type="radio"
          label="System"
          name="color-theme"
          checked={colorMode === "system"}
          onChange={() => setColorMode("system")}
        />
      </section>
    </Nav.Group>
  );
}
