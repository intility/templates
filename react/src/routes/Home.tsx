import { Grid } from "@intility/bifrost-react";
import Docs from "~/components/Docs";
import Setup from "~/components/Setup";
import styles from "./Home.module.css";

export default function Home() {
  return (
    <Grid className={styles.home} gap={32}>
      <h2 className="bf-h2">Set up app</h2>
      <p>
        This application was bootstrapped using{" "}
        <a
          className="bf-link"
          href="https://create.intility.app/react"
          target="_blank"
          rel="noreferrer"
        >
          Create Intility App
        </a>
        . Continue to set up your app by following the steps below.
      </p>
      <Setup />
      <h2 className="bf-h2">Read the docs</h2>
      <Docs />
    </Grid>
  );
}
