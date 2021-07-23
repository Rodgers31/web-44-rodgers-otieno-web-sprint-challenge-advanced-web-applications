import React from 'react';
import MutationObserver from 'mutationobserver-shim';

import { render, screen, waitFor } from '@testing-library/react';
import BubblePage from './BubblePage';

import fetchColorServices from '../services/fetchColorService';
jest.mock('../services/fetchColorService');

const testColor = {
	color: 'white',
	code: { hex: '#fff' },
	id: 1,
};

test('Renders without errors', () => {
	render(<BubblePage />);
});

test('Renders appropriate number of colors passed in through mock', async () => {
	//Keep in mind that our service is called on mount for this component.
	fetchColorServices.mockResolvedValueOnce(testColor);
	render(<BubblePage />);
	const colors = screen.getByText(/colors/i);
	await waitFor(() => {
		expect(colors).toHaveLength(1);
	});
});
