import React from "react";

const Map = () => {
  const shristi = {
    name: "shristi",
  };

  const a = [
    {
      name: "justin",
    },
    {
      name: "shristi",
    },
    {
      name: "nikhil",
    },
    {
      name: "Stephin",
    },
  ];

  return (
    <div>
      {a.map((name) => {
        return (
          <div>
            <h1>{name.name}</h1>
            <span>{name.name}</span>
          </div>
        );
      })}
    </div>
  );
};

export default Map;
