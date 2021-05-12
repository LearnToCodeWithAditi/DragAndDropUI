import React, { Component } from "react";

const ListItem = ({ itemname, id }) => {
  const styles = {
    li: {
      opacity: "1",
      padding: "1rem",
      color: "black",
      backgroundColor: "white",
      margin: "0.3rem",
      position: "static",
      transform: "none",
    },
  };

  return (
    <li style={styles.li} id={id}>
      {itemname}
    </li>
  );
};

export default ListItem;
