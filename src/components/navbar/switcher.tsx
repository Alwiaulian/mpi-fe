"use client";

import {
  ComputerDesktopIcon,
  MoonIcon,
  SunIcon,
} from "@heroicons/react/24/solid";
import { Tab, Tabs, TabsHeader } from "@material-tailwind/react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const THEME = [
  {
    name: "light",
    icon: <SunIcon className="w-5 h-5" />,
  },
  {
    name: "dark",
    icon: <MoonIcon className="w-5 h-5" />,
  },
  {
    name: "system",
    icon: <ComputerDesktopIcon className="w-5 h-5" />,
  },
];

const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted || theme === undefined) return null;

  return (
    <Tabs value={"Themes"} defaultValue={theme}>
      <TabsHeader placeholder="" defaultValue={theme}>
        {THEME.map(({ name, icon }) => (
          <Tab
            placeholder={name}
            key={name}
            value={name}
            onClick={() => {
              setTheme(name);
            }}
          >
            {icon}
          </Tab>
        ))}
      </TabsHeader>
    </Tabs>
  );
};

export default ThemeSwitcher;
