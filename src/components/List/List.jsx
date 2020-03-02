import React from "react";

import "./List.scss";

const List = ({ items }) => (
  <ul className="list">
    {items.map((item, idx) => (
      <li className="list__item" key={idx}>
        {item}
      </li>
    ))}
  </ul>
);

export default List;
