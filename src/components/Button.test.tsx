import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Btn, { BtnProps } from './Button';

describe('Btn', () => {
    const defaultProps: BtnProps = {
        title: 'Click me',
        action: jest.fn(),
        primary: false,
        disabled: false,
        name: 'btn',
    };

    it('should render a button with title', () => {
        const { getByRole } = render(<Btn {...defaultProps} />);
        const button = getByRole('button', { name: 'Click me' });
        expect(button).toBeInTheDocument();
    });

    it('should call action when clicked', () => {
        const { getByRole } = render(<Btn {...defaultProps} />);
        const button = getByRole('button');
        fireEvent.click(button);
        expect(defaultProps.action).toHaveBeenCalled();
    });

    it('should disable the button when disabled prop is true', () => {
        const { getByRole } = render(<Btn {...defaultProps} disabled={true} />);
        const button = getByRole('button');
        expect(button).toBeDisabled();
    });

    it('should have a primary class when primary prop is true', () => {
        const { getByRole } = render(<Btn {...defaultProps} primary={true} />);
        const button = getByRole('button');
        expect(button).toHaveClass('primary_btn');
    });

    it('should have a name attribute when name prop is provided', () => {
        const { getByRole } = render(<Btn {...defaultProps} />);
        const button = getByRole('button');
        expect(button).toHaveAttribute('name', 'btn');
    });
});
