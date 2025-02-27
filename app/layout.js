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
        {children}
      </body>
    </html>
  );
}
