import React from "react";
import ClientRow from "../Client/ClientRow";
import ArizaRow from "./ArizaRow";

function Arizas({ message }) {
  return (
    <table>
      <thead className="messages-table">
        <tr>
          <th>N</th>
          <th>Name</th>
          <th>Location</th>
          <th>tel</th>
          <th>time</th>
        </tr>
      </thead>
      <tbody>
        {message?.map((item, index) =><ArizaRow key={item.id} index={index} {...item}/>)}
      </tbody>
    </table>
  );
}

export default Arizas;