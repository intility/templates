import { Box, Ellipsis, Grid, Message } from "@intility/bifrost-react";

const steps: Array<{
  name: string;
  docs: string;
  variables: Array<{
    name: string;
    description: string;
    value: string;
  }>;
}> = [
  {
    name: "GitHub",
    docs: "https://create.intility.app/react/setup/github",
    variables: [
      {
        name: "Repository Name",
        description: "Name of the GitHub repository",
        value: "__REPO_NAME__",
      },
      {
        name: "Docker Image Name",
        description: "Name of Docker image to push in action",
        value: "__DOCKER_IMAGE_NAME__",
      },
    ],
  },
  {
    name: "Entra ID",
    docs: "https://create.intility.app/react/setup/entra-id",
    variables: [
      {
        name: "Client ID",
        description: "Client ID for the app registration",
        value: import.meta.env.VITE_ENTRA_CLIENT_ID,
      },
    ],
  },
  {
    name: "Sentry",
    docs: "https://create.intility.app/react/setup/sentry",
    variables: [
      {
        name: "Project Name",
        description: "Name of the Sentry project",
        value: "__PROJECT_NAME__",
      },
    ],
  },
  {
    name: "Deployment",
    docs: "https://create.intility.app/react/setup/deploy",
    variables: [
      {
        name: "App Name",
        description: "Kubernetes-friendly name of the app",
        value: "__APP_NAME__",
      },
      {
        name: "Argo Project",
        description: "Name of the Argo project",
        value: "__ARGO_PROJECT__",
      },
    ],
  },
];

export default function Setup() {
  return (
    <Grid cols={1} small={2}>
      {steps.map((step) => (
        <a
          key={step.name}
          className="bf-neutral-link"
          href={step.docs}
          target="_blank"
          rel="noreferrer"
        >
          <Box background="base-3" radius shadow padding>
            <Grid gap={16}>
              <h3 className="bf-h5 bf-neutral-link-text">{step.name}</h3>
              {step.variables.map((variable) => (
                <Message
                  state={variable.value.startsWith("__") ? "alert" : "success"}
                  key={variable.name}
                  header={variable.name}
                >
                  <p>
                    <i>
                      <Ellipsis>{variable.value}</Ellipsis>
                    </i>
                  </p>
                  {variable.description}
                </Message>
              ))}
            </Grid>
          </Box>
        </a>
      ))}
    </Grid>
  );
}
