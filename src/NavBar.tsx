import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { Button, Text, Header } from "grommet";
import { Home, Alert } from "grommet-icons";

interface GrommetButtonNavProps {
  text: string;
  path: string;
  icon: ReactNode;
}

export function GrommetButtonNav({ text, path, icon }: GrommetButtonNavProps) {
  return (
    <Link to={path}>
      <Button
        icon={icon}
        label={<Text color="white">{text}</Text>}
        color="white"
      ></Button>
    </Link>
  );
}

export function NavBar() {
  return (
    <div id="nav-bar">
      <Header
        align="center"
        flex={false}
        justify="center"
        gap="5px"
        wrap={true}
      >
        <div className="navLink">
          <GrommetButtonNav
            icon={<Home />}
            text="Home"
            path="/"
          ></GrommetButtonNav>
          <GrommetButtonNav
            icon={<Alert />}
            text="Other Page"
            path="/error"
          ></GrommetButtonNav>
        </div>
      </Header>
    </div>
  );
}
