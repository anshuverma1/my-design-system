import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import BarGraph from "./BarGraph";

const meta: Meta<typeof BarGraph> = {
  title: "Components/BarGraph",
  component: BarGraph,
};

export default meta;
type Story = StoryObj<typeof BarGraph>;

export const Default: Story = {
  args: {
    values: [
      { label: "A", value: 70, color: "#4caf50" },
      { label: "B", value: 50, color: "#2196f3" },
      { label: "C", value: 90, color: "#ff9800" },
      { label: "D", value: 30, color: "#f44336" },
    ],
  },

  render: (args) => <BarGraph {...args} />,
};
