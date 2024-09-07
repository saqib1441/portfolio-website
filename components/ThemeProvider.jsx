"use client";

import { ThemeProvider as NextTheme } from "next-themes";

const ThemeProvider = ({ children, ...props }) => {
  return <NextTheme {...props}>{children}</NextTheme>;
};

export default ThemeProvider;
