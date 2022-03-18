import React from "react";
import useNavbarItem from "../../../hooks/useNavbarItem";
import NavbarItem from "./NavbarItem";

const NavbarItems = ({ rol }) => {
  const { data } = useNavbarItem(rol);
  console.log(data);

  return (
    <>
      {data.map((element, index) => (
        <NavbarItem text={element.text} key={index} link={element.link} />
      ))}
    </>
  );
};

export default NavbarItems;
