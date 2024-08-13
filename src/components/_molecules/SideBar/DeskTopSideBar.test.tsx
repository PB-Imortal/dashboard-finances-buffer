import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import DeskTopSideBar from './DeskTopSideBar';

describe('DeskTopSideBar', () => {
  test('renders DeskTopSideBar component', () => {
    render(
      <Router>
        <DeskTopSideBar styles="test-styles" />
      </Router>
    );

    expect(screen.getByTestId('desktopsidebar')).toBeInTheDocument();
  });

  test('renders NavLink components with correct props', () => {
    render(
      <Router>
        <DeskTopSideBar styles="test-styles" />
      </Router>
    );

    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Statement')).toBeInTheDocument();
    expect(screen.getByText('Profile')).toBeInTheDocument();
    expect(screen.getByText('Notifications')).toBeInTheDocument();
    expect(screen.getByText('Setting')).toBeInTheDocument();
    expect(screen.getByText('Logout')).toBeInTheDocument();
  });

  test('hover state changes correctly', () => {
    render(
      <Router>
        <DeskTopSideBar styles="test-styles" />
      </Router>
    );

    const homeLink = screen.getByText('Home').closest('a');
    fireEvent.mouseEnter(homeLink!);
    expect(homeLink).toHaveClass('text-purple-600');

    fireEvent.mouseLeave(homeLink!);
    expect(homeLink).toHaveClass('text-purple-600');
  });

  test('active state changes correctly', () => {
    render(
      <Router>
        <DeskTopSideBar styles="test-styles" />
      </Router>
    );

    const homeLink = screen.getByText('Home').closest('a');
    expect(homeLink).toHaveClass('text-purple-600');
  });

  test('NavLink components have correct inactiveImgSrc prop', () => {
    render(
      <Router>
        <DeskTopSideBar styles="test-styles" />
      </Router>
    );

    const statementLink = screen.getByText('Statement').closest('a');
    const img = statementLink?.querySelector('img');
    expect(img).toHaveAttribute('src', '/src/assets/statement-icon.svg');
  });

  test('renders all icons correctly', () => {
    render(
      <Router>
        <DeskTopSideBar styles="test-styles" />
      </Router>
    );

    expect(screen.getByAltText('Logo')).toBeInTheDocument();
    expect(screen.getByAltText('HomeIconActive')).toBeInTheDocument();
    expect(screen.getByAltText('HomeIconInactive')).toBeInTheDocument();
    expect(screen.getByAltText('StatementIconActive')).toBeInTheDocument();
    expect(screen.getByAltText('StatementIconInactive')).toBeInTheDocument();
    expect(screen.getByAltText('SettingSideBar')).toBeInTheDocument();
    expect(screen.getByAltText('UserProfileActive')).toBeInTheDocument();
    expect(screen.getByAltText('UserProfile')).toBeInTheDocument();
    expect(screen.getByAltText('SettingSideBarActive')).toBeInTheDocument();
    expect(screen.getByAltText('LogoutSideBarInactive')).toBeInTheDocument();
    expect(screen.getByAltText('NotificationsSideBarActive')).toBeInTheDocument();
    expect(screen.getByAltText('NotificationsSideBar')).toBeInTheDocument();
  });

  test('navigates to correct routes on link click', () => {
    render(
      <Router>
        <DeskTopSideBar styles="test-styles" />
      </Router>
    );

    fireEvent.click(screen.getByText('Home'));
    expect(window.location.pathname).toBe('/');

    fireEvent.click(screen.getByText('Statement'));
    expect(window.location.pathname).toBe('/statement');

    fireEvent.click(screen.getByText('Setting'));
    expect(window.location.pathname).toBe('/setting');

    fireEvent.click(screen.getByText('Profile'));
    expect(window.location.pathname).toBe('/profile');

    fireEvent.click(screen.getByText('Logout'));
    expect(window.location.pathname).toBe('/login');

    fireEvent.click(screen.getByText('Notifications'));
    expect(window.location.pathname).toBe('/notifications');
  });
});