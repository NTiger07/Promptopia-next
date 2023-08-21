import "../styles/globals.css";

export const metadata = {
  title: "Promptopia",
  description: "Discover and Share AI Prompts!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
