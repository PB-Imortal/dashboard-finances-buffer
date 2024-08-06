import { render, screen } from '@testing-library/react';
import Title from './Title';

describe('Title component', () => {
  it('renders the children as text', () => {
    render(<Title>Test Title</Title>);
    const titleElement = screen.getByText('Test Title');
    expect(titleElement).toBeInTheDocument();
  });

  it('has the correct styles', () => {
    render(<Title>Styled Title</Title>);
    const titleElement = screen.getByText('Styled Title');
    expect(titleElement).toHaveClass('text-txblack text-2xl font-extrabold dark:text-txwhite');
  });
});