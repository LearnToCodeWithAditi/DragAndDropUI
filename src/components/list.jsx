import React, { Component, useLayoutEffect } from "react";
import ListItem from "./listItem";

const List = ({ list, dragHandler, heading }) => {
  const styles = {
    ul: {
      padding: "0.3rem",
      margin: "0.3rem",
      backgroundColor: "beige",
      listStyle: "none",
    },
    beigeColor: {
      backgroundColor: "beige",
      margin: "0.3rem",
    },
  };

  return (
    <div className="col-4" style={styles.beigeColor}>
      <h3>{heading}</h3>
      <ul style={styles.ul}>
        {list.map((item) => (
          <ListItem key={item.id} itemname={item.name} id={item.id} />
        ))}
      </ul>
    </div>
  );
};

export default List;
