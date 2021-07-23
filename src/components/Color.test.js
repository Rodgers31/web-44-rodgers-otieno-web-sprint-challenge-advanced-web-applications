import React from 'react';
import MutationObserver from 'mutationobserver-shim';

import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Color from './Color';

const testColor = {
	color: 'white',
	code: { hex: '#fff' },
	id: 1,
};
test('Renders without errors with blank color passed into component', () => {
	render(<Color color={testColor} />);
});

test('Renders the color passed into component', () => {
	render(<Color color={testColor} />);
	const color = screen.queryAllByTestId('color');
	expect(color).toBeInTheDocument();
});

test("Executes handleDelete and toggleEdit property when the 'x' icon is clicked", () => {
	const handleDelete = jest.fn();
	const toggleEdit = jest.fn();
	render(<Color color={testColor} />);
	const deletbtn = screen.getByTestId('delete');
	userEvent.click(deletbtn);
	expect(handleDelete).toBeCalled();
	expect(toggleEdit).toBeCalledChoices();
});

test('Executes setEditColor and toggleEdit property when color div is clicked', () => {
	const setEditColor = jest.fn();
	const toggleEdit = jest.fn();
	render(<Color color={testColor} />);
	const colorChoices = screen.getByTestId('color');
	userEvent.click(colorChoices);
	expect(setEditColor).toBeCalled();
	expect(toggleEdit).toBeCalled();
});
