import type { Meta, StoryObj } from '@storybook/react';
import { TableData } from './TableData';

import ButtonComponent from '../Button/Button';


const meta = {
  title: "atoms/TableData",
  component: TableData,
  tags: ["autodocs"]
} satisfies Meta<typeof TableData>;

export default meta;

type Story = StoryObj<typeof TableData>;


export const Default: Story = {
  args: {
    children: "Data"
  }
};

export const forDebit: Story = {
  args: {
    variantStyle: "text-txtred",
    children: '-$3422'
  }
};

export const forCredit: Story = {
  args: {
    variantStyle: "text-txtgreen",
    children: '+$3131'
  }
};

export const ButtonWrapper: Story = {
  args: {
    children: <ButtonComponent
                arialabeltext="Download"
                bgcolor="bg-bgwhite"
                styles="border">
                Download
              </ButtonComponent>
  }
};