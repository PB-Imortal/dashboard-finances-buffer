import { Meta, StoryObj } from "@storybook/react";
import Login from "./Login";
import { BrowserRouter } from "react-router-dom";

const meta: Meta<typeof Login> = {
  title: "organisms/Login",
  component: Login,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div className=" lg:-mt-48 flex justify-center -mb-10">
        <BrowserRouter>
          <Story />
        </BrowserRouter>
      </div>
    ),
  ],
};

type Story = StoryObj<typeof Login>;

export default meta;

export const Default: Story = {

};
