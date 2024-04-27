import React from 'react';
import Nav from './Nav';

const BaseLayout = ({ children }: {
  children: React.ReactNode;
}) => (
  <div className=''>
    <div className="flex justify-center">
      {children}
    </div>
    <div className='fixed bottom-0 w-full bg-gray-800 p-4"'>
      <Nav />
    </div>
  </div>
);

export default BaseLayout;
