import { Grid } from "@intility/bifrost-react";
import Docs from "~/components/Docs";
import styles from "./Home.module.css";

export default function Home() {
  return (
    <Grid className={styles.home} gap={32}>
      <h2 className="bf-h2">Intility App</h2>
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
        . Follow the steps in the docs to finish setting up your application.
      </p>
      <h2 className="bf-h2">Read the docs</h2>
      <Docs />
    </Grid>
  );
}
