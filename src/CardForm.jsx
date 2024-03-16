import React, { useState } from "react";

export default function CardForm() {
  const [citis, setSitoc] = useState([
    { name: "Sanjar", description: "Kyrgyz" },
    { name: "Sake", description: "Kyrgyzstan" },
  ]);

  const [currentIndex, setCurrendIndex] = useState(0);

  const city = citis[currentIndex];

  const handerChange = (e) => {
    setSitoc(
      citis.map((city, index) => {
        if (index === currentIndex) {
          return {
            ...city,
            description: e.target.value,
          };
        }
        return city;
      })
    );
  };
  return (
    <div>
      {/* <h2>{city.name}</h2> */}
      <textarea value={city.description} onChange={handerChange} />
    </div>
  );
}
