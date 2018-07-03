import React, { Component } from 'react';
import Navbar from '../ui/navbar_user';

import './default.css';

class DefaultLayout extends Component {
  render() {
    return (
      <div class="container">
      <header>
      <Navbar />
      </header>
      <main>
        Main
      </main>
      <aside>
        Sidebar
      </aside>
      <footer>
        Footer
      </footer>
      </div>
    );
  }
}
export default DefaultLayout;
