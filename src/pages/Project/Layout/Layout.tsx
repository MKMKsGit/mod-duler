import { ReactNode } from "react";
import SideBar from "../../../components/SideBar";
import { Navbar } from "../../Homepage/components/Navbar";

interface Props {
  children: ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <Navbar />
      <SideBar />
      <div className="ml-[130px] px-8 py-4">{children}</div>
    </>
  );
};
export default Layout;
