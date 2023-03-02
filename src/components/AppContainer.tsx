import React from 'react';

function AppContainer({ children }: { children: React.ReactNode }) {
  return <main className="container">{children}</main>;
}

export default AppContainer;
