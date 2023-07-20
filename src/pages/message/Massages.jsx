import React from "react";
import MessageCard from "./MessageCard";

function Massages({ messages }) {
  return (
    <table>
      <thead className="messages-table">
        <tr>
          <th>N</th>
          <th>Name</th>
          <th>phone</th>
          <th>ariza</th>
        </tr>
      </thead>
      <tbody>
        {messages?.map((item, index) =><MessageCard key={item.id} index={index} {...item}/>)}
      </tbody>
    </table>
  );
}

export default Massages;