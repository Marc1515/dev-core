import { Navbar } from "./_components/Navbar";

const PlatformLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <div>{children}</div>
    </>
  );
};

export default PlatformLayout;
