import Navbar from "./Navbar";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-bg-primary text-text-primary font-body">
      <Navbar />
      <main>{children}</main>
    </div>
  );
}