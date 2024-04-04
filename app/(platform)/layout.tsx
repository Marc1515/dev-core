import { Navbar } from "./_components/navbar";

const PlatformLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <div>{children}</div>
    </>
  );
};

export default PlatformLayout;
