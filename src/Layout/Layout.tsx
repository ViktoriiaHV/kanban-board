import { Header } from "../components/Header/Header";

type Props = { children: JSX.Element };

export function Layout({ children }: Props) {
  return (
    <div className="layout">
      <div className="layout__header">
        <Header />
      </div>
      <div className="layout__main">{children}</div>
    </div>
  );
}
