import { Box, Grid } from "@intility/bifrost-react";
import bifrostLogo from "~/assets/bifrost.svg";
import entraIdLogo from "~/assets/entra-id.svg";
import intilityLogo from "~/assets/intility.svg";
import reactRouterDarkLogo from "~/assets/react-router-dark.svg";
import reactRouterLightLogo from "~/assets/react-router-light.svg";
import reactLogo from "~/assets/react.svg";
import viteLogo from "~/assets/vite.svg";
import styles from "./Home.module.css";

const docs: Array<{
  name: string;
  description: string;
  logo: string | [lightLogo: string, darkLogo: string];
  link: string;
}> = [
  {
    name: "Vite",
    description: "Build tool for modern web projects",
    logo: viteLogo,
    link: "https://vite.dev",
  },
  {
    name: "React",
    description: "The library for web and native user interfaces",
    logo: reactLogo,
    link: "https://react.dev",
  },
  {
    name: "Create Intility App",
    description: "Templates for creating Intility apps",
    logo: intilityLogo,
    link: "https://create.intility.app",
  },
  {
    name: "Intility Bifrost",
    description: "The design system for Intility",
    logo: bifrostLogo,
    link: "https://bifrost.intility.com",
  },
  {
    name: "React Router",
    description: "Declarative routing for React",
    logo: [reactRouterLightLogo, reactRouterDarkLogo],
    link: "https://reactrouter.com/start/data/installation",
  },
  {
    name: "MSAL",
    description: "Microsoft Authentication Library for JavaScript",
    logo: entraIdLogo,
    link: "https://github.com/AzureAD/microsoft-authentication-library-for-js/blob/dev/lib/msal-react/docs/getting-started.md",
  },
];

/**
 * Component for displaying the logo of a documentation page.
 * Supports single logo or light/dark mode logos.
 */
function DocLogo({
  logo,
}: { logo: string | [lightLogo: string, darkLogo: string] }) {
  if (typeof logo === "string") {
    return <img src={logo} alt="" />;
  }

  const [lightLogo, darkLogo] = logo;

  return (
    <>
      <img className="bf-light-only" src={lightLogo} alt="" />
      <img className="bf-dark-only" src={darkLogo} alt="" />
    </>
  );
}

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
      <Grid cols={1} small={3}>
        {docs.map((doc) => (
          <Box shadow radius key={doc.name}>
            <a
              className="bf-neutral-link"
              href={doc.link}
              target="_blank"
              rel="noreferrer"
            >
              <Box className={styles.logo} radiusTopLeft radiusTopRight>
                <DocLogo logo={doc.logo} />
              </Box>
              <Box
                padding
                background="base-3"
                radiusBottomLeft
                radiusBottomRight
              >
                <h3 className="bf-neutral-link-text bf-h5">{doc.name}</h3>
                <span>{doc.description}</span>
              </Box>
            </a>
          </Box>
        ))}
      </Grid>
    </Grid>
  );
}
