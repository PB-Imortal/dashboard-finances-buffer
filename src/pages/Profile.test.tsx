import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { BrowserRouter as Router } from 'react-router-dom';
import Profile from './Profile';
import { useAvatar, useFetchData } from '../hook/useHooks';

vi.mock('../hook/useHooks');

describe('Profile Page', () => {
  beforeEach(() => {
    (useAvatar as jest.Mock).mockReturnValue({
      userAvatar: 'avatar.png',
      changeAvatar: vi.fn(),
    });
    (useFetchData as jest.Mock).mockReturnValue({
      formData: {
        lastName: '',
        firstName: '',
        dateOfBirth: '',
        email: '',
        address: '',
        country: '',
      },
      errors: {},
      handleInputChange: vi.fn(),
      handleSave: vi.fn(),
    });
  });

  it('should render the CarouselNav component', () => {
    render(
      <Router>
        <Profile />
      </Router>
    );

    expect(screen.getByText('Back')).toBeInTheDocument();
    expect(screen.getByText('Edit Profile')).toBeInTheDocument();
    expect(screen.getByText('Preferences')).toBeInTheDocument();
    expect(screen.getByText('Security')).toBeInTheDocument();
  });

  it('should render the form fields', () => {
    render(
      <Router>
        <Profile />
      </Router>
    );

    expect(screen.getByLabelText('Last Name')).toBeInTheDocument();
    expect(screen.getByLabelText('First Name')).toBeInTheDocument();
    expect(screen.getByLabelText('Date of Birth')).toBeInTheDocument();
    expect(screen.getByLabelText('Email')).toBeInTheDocument();
    expect(screen.getByLabelText('Address')).toBeInTheDocument();
    expect(screen.getByLabelText('Country')).toBeInTheDocument();
  });

  it('should render the user avatar and change avatar button', () => {
    render(
      <Router>
        <Profile />
      </Router>
    );

    expect(screen.getByAltText('user avatar')).toBeInTheDocument();
    expect(screen.getByAltText('edit button')).toBeInTheDocument();
  });

  it('should handle avatar change', () => {
    const changeAvatar = vi.fn();

    (useAvatar as jest.Mock).mockReturnValue({
      userAvatar: 'avatar.png',
      changeAvatar,
    });

    render(
      <Router>
        <Profile />
      </Router>
    );

    fireEvent.click(screen.getByAltText('edit button'));
    expect(changeAvatar).toHaveBeenCalledTimes(1);
  });

  it('should handle form submission', () => {
    const handleSave = vi.fn();

    (useFetchData as jest.Mock).mockReturnValue({
      formData: {
        lastName: '',
        firstName: '',
        dateOfBirth: '',
        email: '',
        address: '',
        country: '',
      },
      errors: {},
      handleInputChange: vi.fn(),
      handleSave,
    });

    render(
      <Router>
        <Profile />
      </Router>
    );

    fireEvent.click(screen.getByText('Save'));
    expect(handleSave).toHaveBeenCalledTimes(1);
  });

  it('should display error messages for invalid inputs', () => {
    (useFetchData as jest.Mock).mockReturnValue({
      formData: {
        lastName: '',
        firstName: '',
        dateOfBirth: '',
        email: '',
        address: '',
        country: '',
      },
      errors: {
        lastName: ['Last name is required'],
        firstName: ['First name is required'],
        dateOfBirth: ['Date of birth is required'],
        email: ['Email is required'],
        address: ['Address is required'],
        country: ['Country is required'],
      },
      handleInputChange: vi.fn(),
      handleSave: vi.fn(),
    });

    render(
      <Router>
        <Profile />
      </Router>
    );

    expect(screen.getByText('Last name is required')).toBeInTheDocument();
    expect(screen.getByText('First name is required')).toBeInTheDocument();
    expect(screen.getByText('Date of birth is required')).toBeInTheDocument();
    expect(screen.getByText('Email is required')).toBeInTheDocument();
    expect(screen.getByText('Address is required')).toBeInTheDocument();
    expect(screen.getByText('Country is required')).toBeInTheDocument();
  });

  it('should call handleInputChange on input change', () => {
    const handleInputChange = vi.fn();

    (useFetchData as jest.Mock).mockReturnValue({
      formData: {
        lastName: '',
        firstName: '',
        dateOfBirth: '',
        email: '',
        address: '',
        country: '',
      },
      errors: {},
      handleInputChange,
      handleSave: vi.fn(),
    });

    render(
      <Router>
        <Profile />
      </Router>
    );

    fireEvent.change(screen.getByLabelText('Last Name'), { target: { value: 'Doe' } });
    expect(handleInputChange).toHaveBeenCalledTimes(1);
  });
});