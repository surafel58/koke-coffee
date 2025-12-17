import Navbar from "@/components/sample-a/Navbar";
import Footer from "@/components/sample-a/Footer";
import { Toaster } from "sonner";

export default function SampleALayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#1A1A1A]">
      <Navbar />
      <main className="pt-20">{children}</main>
      <Footer />
      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            background: "#1A1A1A",
            color: "#F5E6D3",
            border: "1px solid #faba21",
          },
        }}
      />
    </div>
  );
}
