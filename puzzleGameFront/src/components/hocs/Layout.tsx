import React from 'react';
import Nav from './Nav';

const BaseLayout = ({ children }: {
  children: React.ReactNode;
}) => (
  <div>
    <div className="">
      {children}
    </div>
    <Nav />
  </div>
);

export default BaseLayout;
