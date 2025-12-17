import Navbar from "@/components/sample-b/Navbar";
import Footer from "@/components/sample-b/Footer";
import { Toaster } from "sonner";

export default function SampleBLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#F5E6D3]">
      <Navbar />
      <main className="pt-20">{children}</main>
      <Footer />
      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            background: "#5c4431",
            color: "#F5E6D3",
            border: "1px solid #d79a1b",
          },
        }}
      />
    </div>
  );
}
