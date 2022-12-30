import React from 'react';
import { render } from '@testing-library/react-native';

import App from './App';

describe('App', () => {
  it('should set language as system language', () => {
    const { debug } = render(<App />);
    debug();
  });
});
