import "../styles/globals.css";

export const metadata = {
  title: "Nobel price",
  description: "list of nobel price winner",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
