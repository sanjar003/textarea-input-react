import React, { useState } from "react";

export default function Card(props) {
  const [citis, setSitoc] = useState([
    { name: "Sanjar", description: "Kyrgyz" },
    { name: "Sake", description: "Kyrgyzstan" },
  ]);
  return (
    <ul>
      {citis.map((city) => (
        <li key={city.name}>
          {city.name} ({city.description})
        </li>
      ))}
    </ul>
  );
}
