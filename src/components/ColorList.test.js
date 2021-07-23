import React from 'react';
import MutationObserver from 'mutationobserver-shim';

import { render, screen } from '@testing-library/react';
import ColorList from './ColorList';
import EditMenu from './EditMenu';
import userEvent from '@testing-library/user-event';

const testColor = {
	color: 'white',
	code: { hex: '#fff' },
	id: 1,
};

const colorNull = [];

test('Renders an empty list of colors without errors', () => {
	render(<ColorList color={colorNull} />);
});

test('Renders a list of colors without errors', () => {
	render(<ColorList color={testColor} />);
});

test('Renders the EditForm when editing = true and does not render EditForm when editing = false', () => {
	const toggleEdit = jest.fn();
	render(<ColorList color={testColor} />);
	let editForm = screen.queryByTestId('color');
	userEvent.click(editForm);
	expect(toggleEdit).toBeCalled();
});
