import { Header } from "../components/Header/Header";

import classes from "./Layout.module.css";

type Props = { children: JSX.Element };

export function Layout({ children }: Props) {
  return (
    <div className={classes.layout}>
      <Header />
      <div className={classes.main}>{children}</div>
    </div>
  );
}
