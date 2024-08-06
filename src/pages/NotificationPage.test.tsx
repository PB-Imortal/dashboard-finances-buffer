import { render, screen } from '@testing-library/react';
import NotificationPage from './NotificationPage';

describe('NotificationPage', () => {
    test('renders notification message and image', () => {
        render(<NotificationPage />);

        const heading = screen.getByText(/At the moment, there are no notifications./i);
        expect(heading).toBeInTheDocument();

        const image = screen.getByAltText(/Personagem de notificação/i);
        expect(image).toBeInTheDocument();

    });
});