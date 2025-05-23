import { faCircleHalfStroke } from "@fortawesome/pro-solid-svg-icons";
import {
  Checkbox,
  type ColorMode,
  Nav,
  useApplyColorMode,
} from "@intility/bifrost-react";
import type React from "react";
import useLocalStorageState from "use-local-storage-state";

const COLOR_MODE_LOCAL_STORAGE_KEY = "bfColorMode";

/**
 * Hook to get and set the color mode in a persistent way
 * Currently uses local storage, but can be changed to use cookies or a database
 * @returns a tuple with the current color mode and a function to set it
 */
function usePersistedColorMode() {
  return useLocalStorageState<ColorMode>(COLOR_MODE_LOCAL_STORAGE_KEY, {
    defaultValue: "system",
  });
}

/**
 * Component to apply the color mode to the document
 * can be used in the main entry point of the app
 * to ensure the color mode is applied as early as possible
 */
export function ColorModeApplier({ children }: React.PropsWithChildren) {
  const [colorMode] = usePersistedColorMode();

  // keep document color mode in sync with state
  useApplyColorMode(colorMode);

  return children;
}

/**
 * Component to pick the color mode
 * to be used in Bifrost Nav
 */
export function ColorModePicker() {
  const [colorMode, setColorMode] = usePersistedColorMode();
  return (
    <Nav.Group icon={faCircleHalfStroke} aria-label="Color Mode picker">
      <section>
        <Nav.Header>Color Mode</Nav.Header>
        <Checkbox
          type="radio"
          label="Dark"
          name="color-mode"
          checked={colorMode === "dark"}
          onChange={() => setColorMode("dark")}
        />
        <Checkbox
          type="radio"
          label="Light"
          name="color-mode"
          checked={colorMode === "light"}
          onChange={() => setColorMode("light")}
        />
        <Checkbox
          type="radio"
          label="System"
          name="color-mode"
          checked={colorMode === "system"}
          onChange={() => setColorMode("system")}
        />
      </section>
    </Nav.Group>
  );
}
