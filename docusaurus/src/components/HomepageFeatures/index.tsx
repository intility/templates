import Link from "@docusaurus/Link";
import Heading from "@theme/Heading";
import clsx from "clsx";

import styles from "./styles.module.css";

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<"svg">>;
  description?: React.ReactNode;
  href: string;
};

const FeatureList: FeatureItem[] = [
  {
    title: "React",
    href: "/react",
    Svg: require("@site/static/img/react-logo.svg").default,
    description: (
      <>Get started with React and TypeScript using our templates for Vite.</>
    ),
  },
  {
    title: ".NET API",
    href: "/dotnet",
    Svg: require("@site/static/img/dotnet-logo.svg").default,
    description: <>Start developing APIs using our templates for .NET.</>,
  },
];

function Feature({ title, Svg, description, href }: FeatureItem) {
  return (
    <div className={clsx("col col--6")}>
      <Link to={href}>
        <div className="text--center">
          <Svg className={styles.featureSvg} role="img" />
        </div>
      </Link>
      <div className="text--center padding-horiz--md">
        <Link to={href}>
          <Heading as="h3">{title}</Heading>
        </Link>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): React.ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props) => (
            <Feature key={props.title} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
