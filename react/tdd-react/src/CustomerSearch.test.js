import React from 'react';
import { render, screen } from '@testing-library/react';
import CustomerSearch from './CustomerSearch';

test('renders a customer search component with text area and button', () => {
    render(<CustomerSearch />);

    expect(screen.getByRole('heading')).toHaveTextContent('Customer Search');
    expect(screen.getByPlaceholderText('Enter customer name...'))
        .toBeInTheDocument();
    expect(screen.getByRole('button')).toHaveTextContent('Search');
});
