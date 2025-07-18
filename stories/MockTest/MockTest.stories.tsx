import { Meta, StoryObj } from "@storybook/nextjs-vite";
import { DependencyList, useMemo } from "react";
import { expect, userEvent, waitFor, within } from "storybook/test";
import { createMock, getMock, getOriginal } from "storybook-addon-vite-mock";
import { MockTest } from "./MockTest";

const meta: Meta<typeof MockTest> = {
  component: MockTest,
};
export default meta;

export const Primary: StoryObj<typeof MockTest> = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText("Before")).toBeInTheDocument();
  },
};

export const Mock: StoryObj<typeof MockTest> = {
  parameters: {
    moduleMock: {
      mock: () => {
        const mock = createMock(useMemo);
        mock.mockImplementation((fn: () => unknown, deps: DependencyList) => {
          const value = getOriginal(useMemo)(fn, deps);
          return value === "Before" ? "After" : value;
        });
        return [mock];
      },
    },
  },
  play: async ({ canvasElement, parameters }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText("After")).toBeInTheDocument();
    const mock = getMock(parameters, useMemo);
    expect(mock).toBeCalled();
  },
};

export const Action: StoryObj<typeof MockTest> = {
  parameters: {
    moduleMock: {
      mock: () => {
        const mock = createMock(useMemo);
        mock.mockImplementation(getOriginal(useMemo));
        return [mock];
      },
    },
  },
  play: async ({ canvasElement, parameters }) => {
    const canvas = within(canvasElement);
    const mock = getMock(parameters, useMemo);
    mock.mockImplementation((fn: () => unknown, deps: DependencyList) => {
      const value = getOriginal(useMemo)(fn, deps);
      return value === "Before" ? "Action" : value;
    });
    userEvent.click(await canvas.findByRole("button"));
    await waitFor(() => {
      expect(canvas.getByText("Action")).toBeInTheDocument();
    });
  },
};
