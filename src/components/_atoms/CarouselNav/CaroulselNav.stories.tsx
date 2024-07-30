import type { Meta, StoryObj } from '@storybook/react';
import { BrowserRouter as Router } from 'react-router-dom';
import CarouselNav from './CarouselNav';

const meta = {
  title: 'Atoms/CarouselNav',
  component: CarouselNav,
  tags: ['autodocs'],
  args: {
    items: [
      { label: "Back", to: "/" },
      { label: "Edit Profile", to: "" },
      { label: "Preferences", to: "preferences" },
      { label: "Security", to: "security" },
    ]
  }
} satisfies Meta<typeof CarouselNav>;

export default meta;
type Story = StoryObj<typeof meta>;

const Template: Story = {
  render: (args) => (
    <Router>
      <CarouselNav {...args} />
    </Router>
  ),
};

export const Default: Story = {
  ...Template,
};


