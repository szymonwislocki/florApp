import { ReactElement, ReactNode } from "react";
interface Props {
  children: JSX.Element;
}
const Layout = ({ children }: Props): ReactElement => {
  return (
    <div className="layout">
      {children}
      <img className="layout__icon" src="../media/iconmonstr-home-thin-240.png" />
    </div>
  );
};

export default Layout;
