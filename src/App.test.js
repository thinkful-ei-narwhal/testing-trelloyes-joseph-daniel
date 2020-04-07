import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Store from './store';

describe('<App />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<App store={Store.STORE}/>, div);
    // if something is wrong, itd fail here
    ReactDOM.unmountComponentAtNode(div);
  });
});