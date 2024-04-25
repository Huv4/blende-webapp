//This component represents the burger menu button that toggles the mobile menu.
//It toggles between a closing icon and open icon depending on the isOpen State
"useClient";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faGripLines } from "@fortawesome/free-solid-svg-icons";

type MobileMenuButtonProps = {
  isOpen: boolean;
  toggleMenu: () => void;
};

const MobileMenuButton = ({ isOpen, toggleMenu }: MobileMenuButtonProps) => {
  return (
    <div className="lg:hidden hover:text-deer">
      <button onClick={toggleMenu}>
        {isOpen ? (
          <div>
            <FontAwesomeIcon icon={faGripLines} stroke="currentColor" />
          </div>
        ) : (
          <div>
            <FontAwesomeIcon icon={faBars} stroke="currentColor" />
          </div>
        )}
      </button>
    </div>
  );
};

export default MobileMenuButton;
