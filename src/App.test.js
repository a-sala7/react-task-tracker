import React from "react";
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

it('renders hello from', () => {
    render(<App />);
    expect(screen.getByText(/hello from/i)).toBeInTheDocument();
});