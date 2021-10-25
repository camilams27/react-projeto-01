import React from 'react';
import './Footer.css';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {fas} from '@fortawesome/free-solid-svg-icons';
library.add(fas);

function Footer() {
  return (
      <div className="containerFooter">
          <footer>
            <ul>
                <li> <FontAwesomeIcon icon="facebook-square"/> </li>
                <li> <FontAwesomeIcon icon="instagram"/> </li>
            </ul>
            <p>
                &copy; Camila Silva, DEV
            </p>
          </footer>
      </div>
  );
}

export default Footer;