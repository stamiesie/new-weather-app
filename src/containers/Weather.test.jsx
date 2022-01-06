import React from 'react';
import { render, screen } from '@testing-library/react';
import Weather from './Weather';

describe('Weather container', () => {
  it('displays current weather for Portland', async () => {
    render(<Weather />);

    screen.getByText('Loading...');

    const ul = await screen.findByRole('list', { name: 'weather' });
    expect(ul).not.toBeEmptyDOMElement();
  });
});
