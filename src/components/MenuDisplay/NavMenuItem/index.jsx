import './styles.scss';

import { useState } from 'react';

import { GoChevronRight, GoChevronDown } from 'react-icons/go';

export function NavMenuItem({ title, options }) {
  const [isOpen, setIsOpen] = useState(false);

  function handleSelect() {
    setIsOpen(!isOpen);
  };

  return (
    <li>
      <div className="select">
        <a href="/">{title}</a>
        <button type="button" onClick={handleSelect}>
          {isOpen ? <GoChevronDown size={16} /> : <GoChevronRight size={16} />}
        </button>
      </div>
      {isOpen && (
        <div className="selectOptions">
          {options.map((option, index) => (
            <a key={index} href="/">
              {option}
            </a>
          ))}
        </div>
      )}
    </li>
  );
}