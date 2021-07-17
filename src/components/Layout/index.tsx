import React from 'react';
import Header from '../Header';

const Layout: React.FC<any> = ({ children }) => {
  return (
    <main>
      {children}
    </main>
  );
};

export default Layout;
