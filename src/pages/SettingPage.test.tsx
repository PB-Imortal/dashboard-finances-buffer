import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import SettingPage from './SettingPage';

describe('SettingPage', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  test('should render the settings page with the correct title', () => {
    render(<SettingPage />);
    expect(screen.getByText('Settings')).toBeInTheDocument();
  });

  test('should toggle dark mode when the checkbox is clicked', () => {
    render(<SettingPage />);
    
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toBeInTheDocument();
    
    expect(document.documentElement.classList.contains('dark')).toBe(false);
    
    fireEvent.click(checkbox);
    expect(document.documentElement.classList.contains('dark')).toBe(true);
    expect(localStorage.getItem('darkMode')).toBe('true');
    
    fireEvent.click(checkbox);
    expect(document.documentElement.classList.contains('dark')).toBe(false);
    expect(localStorage.getItem('darkMode')).toBe('false');
  });

  test('should display the correct icon and label based on the mode', () => {
    render(<SettingPage />);
    
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toBeInTheDocument();
    
    expect(screen.getByAltText('Light Mode')).toBeInTheDocument();
    expect(screen.getByText('Light Mode')).toBeInTheDocument();
    
    fireEvent.click(checkbox);
    expect(screen.getByAltText('Dark Mode')).toBeInTheDocument();
    expect(screen.getByText('Dark Mode')).toBeInTheDocument();
  });

  test('should initialize with dark mode if localStorage has darkMode set to true', () => {
    localStorage.setItem('darkMode', 'true');
    render(<SettingPage />);
    
    expect(document.documentElement.classList.contains('dark')).toBe(true);
    expect(screen.getByAltText('Dark Mode')).toBeInTheDocument();
    expect(screen.getByText('Dark Mode')).toBeInTheDocument();
  });

  test('should initialize with light mode if localStorage has darkMode set to false', () => {
    localStorage.setItem('darkMode', 'false');
    render(<SettingPage />);
    
    expect(document.documentElement.classList.contains('dark')).toBe(false);
    expect(screen.getByAltText('Light Mode')).toBeInTheDocument();
    expect(screen.getByText('Light Mode')).toBeInTheDocument();
  });
});