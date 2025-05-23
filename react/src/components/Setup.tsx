import {
  faGithub,
  faMicrosoft,
  faRedhat,
} from "@fortawesome/free-brands-svg-icons";
import { faBug } from "@fortawesome/pro-solid-svg-icons";
import {
  Ellipsis,
  Grid,
  Icon,
  Message,
  Section,
} from "@intility/bifrost-react";
import type { IconProps } from "@intility/bifrost-react/Icon";

const steps: Array<{
  name: string;
  docs: string;
  icon: IconProps["icon"];
  variables: Array<{
    name: string;
    description: string;
    value: string;
  }>;
}> = [
  {
    name: "GitHub",
    docs: "https://create.intility.app/react/setup/github",
    icon: faGithub,
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
    icon: faMicrosoft,
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
    icon: faBug,
    variables: [
      {
        name: "Project Name",
        description: "Name of the Sentry project",
        value: "__SENTRY_PROJECT_NAME__",
      },
    ],
  },
  {
    name: "Deployment",
    docs: "https://create.intility.app/react/setup/deploy",
    icon: faRedhat,
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

function SetupStep({ step }: { step: (typeof steps)[number] }) {
  return (
    <Section>
      <a
        key={step.name}
        className="bf-neutral-link"
        href={step.docs}
        target="_blank"
        rel="noreferrer"
      >
        <Section.Header arrow style={{ borderBottom: "none" }}>
          <Icon icon={step.icon} fixedWidth marginRight />
          <span className="bf-neutral-link-text">{step.name}</span>
        </Section.Header>
      </a>
      <Section.Content background="base-2" borderTop={false}>
        <Grid gap={16}>
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
      </Section.Content>
    </Section>
  );
}

export default function Setup() {
  return (
    <Grid cols={2}>
      <Grid cols={1}>
        {steps
          .filter((_, i) => i % 2 === 0)
          .map((step) => (
            <SetupStep key={step.name} step={step} />
          ))}
      </Grid>
      <Grid cols={1}>
        {steps
          .filter((_, i) => i % 2 !== 0)
          .map((step) => (
            <SetupStep key={step.name} step={step} />
          ))}
      </Grid>
    </Grid>
  );
}
