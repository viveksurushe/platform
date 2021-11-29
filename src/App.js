import React from 'react';
import Body from './components/Body/body';
import Header from './components/Header';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';

const generateClassName = createGenerateClassName({
  productionPrefix: 'c',
  disableGlobal: true
});


function App() {
  return (
    <StylesProvider generateClassName={generateClassName}>
    <div className="App">
        <Header/>
        <Body/>
    </div>
    </StylesProvider>
  );
}

export default App;
