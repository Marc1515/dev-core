import { Toaster } from "sonner";
import { Navbar } from "./_components/Navbar";

const PlatformLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Toaster position="top-right" />
      <Navbar />
      <div>{children}</div>
    </>
  );
};

export default PlatformLayout;
