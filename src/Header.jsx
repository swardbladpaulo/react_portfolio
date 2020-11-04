import React from "react";
import { Menu, Segment } from "semantic-ui-react";

const Header = () => {
  return (
    <Segment inverted>
      <Menu inverted secondary>
        <Menu.Item
          id="header"
          name="my portfolio"
        />
        <Menu.Item
          id="about-tab"
          name="About Me"
          />
      </Menu>
    </Segment>
  );
};

export default Header;