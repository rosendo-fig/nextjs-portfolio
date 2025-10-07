import "@/styles/globals.scss";

export const metadata = {
  title: {
    template: "%s | Rosendo Figueroa - Principal UX/Web Architect & UX Technical Leader",
    default: "Rosendo Figueroa | Principal UX/Web Architect & UX Technical Leader",
  },
  description:
    "Explore the portfolio of Rosendo Figueroa, a Principal UX/Web Architect and UX Technical Leader with over a decade of experience designing accessible, user-centered, and high-performing web experiences. Specializing in UX strategy, web architecture, and inclusive design for government and enterprise digital ecosystems.",
  keywords:
    "Rosendo Figueroa, UX Web Architect, UX Technical Leader, Web Developer Portfolio, UX/UI Designer, Accessibility Specialist, WCAG Compliance, Drupal Developer, Front-End Architect, UX Strategy, User Experience Portfolio, Government Web Design, UX Engineering, Web Accessibility, Inclusive Design",
  author: "Rosendo Figueroa",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
