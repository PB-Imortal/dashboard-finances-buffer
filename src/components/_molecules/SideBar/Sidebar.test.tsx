import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import SideBar from './SideBar';

describe('SideBar', () => {
  test('renders SideBar and toggles visibility on burger menu click', () => {
    render(
      <Router>
        <SideBar styles="" />
      </Router>
    );

    const burgerMenu = screen.getByTestId('burger-menu');
    fireEvent.click(burgerMenu);

    const sidebar = screen.getByTestId('sidebar');
    expect(sidebar).toHaveClass('translate-x-0');

    fireEvent.click(burgerMenu);
    expect(sidebar).toHaveClass('-translate-x-full');
  });

  test('closes SideBar when clicking outside', () => {
    render(
      <Router>
        <SideBar styles="" />
      </Router>
    );

    const burgerMenu = screen.getByTestId('burger-menu');
    fireEvent.click(burgerMenu);

    const overlay = screen.getByTestId('overlay');
    fireEvent.click(overlay);

    const sidebar = screen.getByTestId('sidebar');
    expect(sidebar).toHaveClass('-translate-x-full');
  });

  test('closes SideBar when pressing Escape key', () => {
    render(
      <Router>
        <SideBar styles="" />
      </Router>
    );

    const burgerMenu = screen.getByTestId('burger-menu');
    fireEvent.click(burgerMenu);

    fireEvent.keyDown(document, { key: 'Escape', code: 'Escape' });

    const sidebar = screen.getByTestId('sidebar');
    expect(sidebar).toHaveClass('-translate-x-full');
  });

  test('renders all navigation links', () => {
    render(
      <Router>
        <SideBar styles="" />
      </Router>
    );

    const links = [
      { text: 'Home', to: '/' },
      { text: 'Statement', to: '/statement' },
      { text: 'Profile', to: '/profile' },
      { text: 'Notifications', to: '/notifications' },
      { text: 'Setting', to: '/setting' },
      { text: 'Logout', to: '/login' },
    ];

    links.forEach(link => {
      const navLink = screen.getByText(link.text);
      expect(navLink.closest('a')).toHaveAttribute('href', link.to);
    });
  });
});