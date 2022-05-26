import React from "react";
import { Link } from "react-router-dom";
import { Container, Content } from "./styles";
import { FaTimes, FaUserAlt, FaImages, FaSignOutAlt } from "react-icons/fa";

import SidebarItem from "../SidebarItem";

const Sidebar = ({ active }) => {
  const closeSidebar = () => {
    active(false);
  };

  return (
    <Container sidebar={active}>
      <FaTimes onClick={closeSidebar} />
      <Content>
        <Link to={`/users`} style={{ textDecoration: "none" }}>
          <SidebarItem Icon={FaUserAlt} Text="Users" />
        </Link>
        <Link to={`/albums/users`} style={{ textDecoration: "none" }}>
          <SidebarItem Icon={FaImages} Text="Albums" />
        </Link>
        <Link to={`/logout`} style={{ textDecoration: "none" }}>
          <SidebarItem Icon={FaSignOutAlt} Text="Logout" />
        </Link>
      </Content>
    </Container>
  );
};

export default Sidebar;
