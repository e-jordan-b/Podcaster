/* eslint-disable */
import { render, screen } from '@testing-library/react';
import { describe, it } from 'vitest';
import { RouterProvider } from 'react-router-dom';
import React from 'react';
import App from './App';


describe('App', () => {
  it('renders without crashing', () => {
    render(<App />);
  });
});