import React from "react";

const fonts = [
  "sans-serif",
  "Anton",
  "Gloria+Hallelujah",
  "Indie+Flower",
  "Josefin+Sans",
  "Della+Respira"
];

export const Input = ({ set, value, name, label, type = "text" }) => (
  <>
    <label htmlFor={name}>{label}</label>{" "}
    <input
      value={value}
      type={type}
      id={name}
      onChange={({ target }) => set(target.value)}
    />
    <br />
  </>
);

export const FontInput = ({ font, setFont }) => (
  <>
    <label htmlFor="font">Font choice</label>{" "}
    <select
      value={(font && font.replace(" ", "+")) || ""}
      onChange={({ target }) => setFont(target.value.replace("+", " "))}
    >
      {fonts.map(font => (
        <option key={font} value={font}>
          {font.replace("+", " ")}
        </option>
      ))}
    </select>
    <br />
  </>
);

export const username = (set, username) => (
  <>
    <label htmlFor="username">Last.fm Username</label>{" "}
    <input
      value={username}
      type="text"
      id="username"
      onChange={({ target }) => set(target.value)}
    />
    <br />
  </>
);
