import React from "react";

import "./style.css";

// This component exports both the List and ListItem components

export const List = ({ children }) => (
  <ol className="list-group">
    {children}
  </ol>
);

export function ListItem({ children }) {
  return <li className="list-group-item">{children}</li>;
}
