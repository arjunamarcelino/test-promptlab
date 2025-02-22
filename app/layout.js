import Header from "./_components/Header";
import Footer from "./_components/Footer";
import "../styles/index.css";
import "../styles/font.css";

export const metadata = {
  title: "PromptLab",
  description: "Building App with AI",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  );
}
