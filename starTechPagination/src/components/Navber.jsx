import React from "react";
import Container from "./layout/Container";
import List from "./layout/List";
import ListItem from "./layout/ListItem";

const Navber = () => {
  return (
    <nav>
      <Container>
        <List className=" flex justify-between font-semibold text-sm text-[#222] py-5">
          <ListItem itemName="Desktop" />
          <ListItem itemName="Laptop" />
          <ListItem itemName="Component" />
          <ListItem itemName="Monitor" />
          <ListItem itemName="UPS" />
          <ListItem itemName="Phone" />
          <ListItem itemName="Tablet" />
          <ListItem itemName="Office Equipment" />
          <ListItem itemName="Camera" />
          <ListItem itemName="Security" />
          <ListItem itemName="Networking" />
          <ListItem itemName="Software" />
          <ListItem itemName="Server & Storage" />
          <ListItem itemName="Accessories" />
          <ListItem itemName="Gadget" />
          <ListItem itemName="Gaming" />
          <ListItem itemName="TV" />
          <ListItem itemName="Appliance" />
        </List>
      </Container>
    </nav>
  );
};

export default Navber;
