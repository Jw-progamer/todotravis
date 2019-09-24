import React from "react";

import { Header } from "../../components";
import withSettings from "./withSettings";

import "./settings.scss";

const themes = [
  { key: "defalt", label: "Padrão" },
  { key: "ace", label: "Spade Ace", navBar: { backgroundColor: "#cc0000" } },
  { key: "jack", label: "Heat Jack", navBar: { backgroundColor: "#1a1aff" } },
  { key: "queen", label: "Cub Queen", navBar: { backgroundColor: "#33ff33" , color: "#212121"} },
  { key: "king", label: "Diamont King", navBar: { backgroundColor: "#ffd11a" , color: "#212121"} },
  {
    key: "light",
    label: "Light",
    navBar: { backgroundColor: "#fff", color: "#212121" }
  },
];

const SettingsPage = ({ theme: selectedTheme, toggleTheme }) => (
  <div>
    <Header>Temas</Header>
    <div className="themes">
      {themes.map(theme => (
        <button
          key={theme.key}
          className="themes__item"
          style={theme.navBar}
          onClick={() => {
            toggleTheme(theme);
          }}
        >
          <p>
            {theme.label}
            {theme.key === selectedTheme.key && (
              <i className="material-icons">check</i>
            )}
          </p>
        </button>
      ))}
    </div>
  </div>
);

export default withSettings(SettingsPage);
