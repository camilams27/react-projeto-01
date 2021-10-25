import React from 'react';
import './Header.css';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {fas} from '@fortawesome/free-solid-svg-icons';
library.add(fas);

function Header() {
  return (
      <div className="containerHeader">
          <ul>
              <img src="https://cdn-icons-png.flaticon.com/512/5889/5889005.png" alt="" />
              <li className="home">Home</li>
              <li className="animes">Animes</li>
              
              <li className="manga">Manga</li>
              <li className="notices">Notices</li>
          </ul>
            <div class="searchContainer">
                <input class="searchInput" type="text" placeholder="Search" />
                    <button class="searchButton" href="#">
                        <FontAwesomeIcon icon="search" />
                    </button>
            </div>
        </div>
  );
}

export default Header;