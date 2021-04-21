import React from "react";
import { Box } from "./Box";
import { Meta } from "@storybook/react";

export default {
	title: "Components/Box",
	component: Box,
} as Meta;

export const Primary: React.VFC<{}> = () => <Box />;
export const Secondary: React.VFC<{}> = () => <Box />;
export const Tertiary: React.VFC<{}> = () => <Box />;
