import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import LogInPage from './index';

describe('LogInPage', () => {
    const mockNavigate = jest.fn();
    const mockSetItem = jest.fn();

    beforeAll(() => {
        Object.defineProperty(window, 'localStorage', {
            value: {
                getItem: jest.fn(),
                setItem: mockSetItem,
                removeItem: jest.fn(),
            },
            writable: true,
        });
        jest.mock('react-router-dom', () => ({
            ...jest.requireActual('react-router-dom'),
            useNavigate: () => mockNavigate,
        }));
    });

    beforeEach(() => {
        mockNavigate.mockReset();
        mockSetItem.mockReset();
    });

    it('displays error message if API call fails', async () => {
        const mockAxios = new MockAdapter(axios);
        mockAxios.onGet('/users').reply(500);

        render(
            <BrowserRouter>
                <LogInPage />
            </BrowserRouter>
        );

        fireEvent.submit(screen.getByRole('button', { name: /log in/i }));

        const errorMessage = await screen.findByText(/something went wrong try again/i);
        expect(errorMessage).toBeInTheDocument();
    });

});
