import { Poppins, Montserrat } from "next/font/google";
import "./globals.css";

// Components
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Theme Provider
import ThemeProvider from "@/components/ThemeProvider";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const nerkoOne = Montserrat({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-nerko-one",
});

export const metadata = {
  title: "Saqib Ali - A Full Stack Developer",
  description:
    "My name is Saqib Ali, a dedicated and skilled Web Developer with over 2 years of experience specializing in MERN stack development. My expertise spans MongoDB, Express.js, React.js, and Node.js, with a proven track record in delivering successful full-stack web development projects. In addition to my professional background, I have spent a year teaching at THE ACE ACADEMY, where I effectively guided over 100 students in mastering front-end and back-end development with the MERN stack. As a freelancer, I have collaborated with more than 50 clients globally, consistently delivering high-quality projects involving RESTful APIs, CRUD operations, and server-side rendering. I am available around the clock for freelance opportunities. Feel free to reach out to discuss how I can assist with your web development needs.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppins.className} ${nerkoOne.variable}`}>
        <ThemeProvider attribute="class" defaultTheme="light">
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
