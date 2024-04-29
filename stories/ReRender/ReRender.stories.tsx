import { expect } from "@storybook/jest";
import { Meta, StoryObj } from "@storybook/react";
import { getMessage } from "./message";
import { ReRender } from "./ReRender";
import { createMock, getMock, render } from "storybook-addon-vite-mock";
import { waitFor, within } from "@storybook/test";

const meta: Meta<typeof ReRender> = {
  component: ReRender,
};
export default meta;

export const Primary: StoryObj<typeof ReRender> = {};

export const ReRenderTest: StoryObj<typeof ReRender> = {
  parameters: {
    moduleMock: {
      mock: () => {
        const mock = createMock(getMessage);
        return [mock];
      },
    },
  },
  play: async ({ canvasElement, parameters }) => {
    const canvas = within(canvasElement);
    const mock = getMock(parameters, getMessage);
    mock.mockReturnValue("Test1");
    render(parameters);
    await waitFor(() => {
      expect(canvas.getByText("Test1")).toBeInTheDocument();
    });
    mock.mockReturnValue("Test2");
    render(parameters);
    await waitFor(() => {
      expect(canvas.getByText("Test2")).toBeInTheDocument();
    });
  },
};
