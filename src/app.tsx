import * as React from 'react';
import { HeaderContainer } from './components';
import { FooterComponent } from './components';

export const App = (props: { children?}) => {
  return (
    <>
      <header>
        <HeaderContainer userName="Max Mustermann" auto="Vokswagen - Arteon 2.0 TDI Elegance 4Motion" />
      </header>
      <main>
        {props.children}
      </main>
      <footer>
        <FooterComponent />
      </footer>
    </>
  )
}