import React, { useEffect, useState } from 'react';

interface IProps {
  handleChange: (value: boolean) => void;
}

const Header: React.FC<IProps> = ({ handleChange }) => {
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;
    setChecked(currentTheme === 'light' ? false : true);
    checked ? handleChange(true) : handleChange(false);
  }, [checked]);

  const handleChange1 = () => {
    setChecked(!checked);
    checked ? handleChange(true) : handleChange(false);
    localStorage.setItem('theme', checked ? 'light' : 'dark');
  };

  return (
    <header className="header">
      <a className="link" href="https://www.github.com/inPhoenix/colorPicker" rel="noopener noreferrer" target="_blank">
        GitHub
      </a>
      <div className="theme-switch-wrapper">
        <em>Light</em>
        <label className="theme-switch" htmlFor="checkbox">
          <input type="checkbox" id="checkbox" onChange={handleChange1} checked={checked} />
          <div className="slider round"></div>
        </label>
        <em>Dark</em>
      </div>
    </header>
  );
};

export default Header;
