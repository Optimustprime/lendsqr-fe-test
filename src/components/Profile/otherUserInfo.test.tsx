import React from 'react';
import { render } from '@testing-library/react';
import OtherUserInfo from './OtherUserInfo';

const userDetails = {
    profile: {
        firstName: 'John',
        phoneNumber: '1234567890',
        bvn: '12345678901',
        gender: 'Male',
    },
    email: 'john@example.com',
    education: {
        level: 'Bachelor',
        employmentStatus: 'Employed',
        sector: 'Technology',
        duration: '3 years',
        officeEmail: 'john@company.com',
        monthlyIncome: [50000, 75000],
        loanRepayment: 'No',
    },
    socials: {
        twitter: 'john_twitter',
        facebook: 'john_facebook',
        instagram: 'john_instagram',
    },
    guarantor: {
        firstName: 'Jane',
        lastName: 'Doe',
        phoneNumber: '0987654321',
    },
};

describe('OtherUserInfo', () => {
    it('should render loading state', () => {
        const { container } = render(
            // @ts-ignore
            <OtherUserInfo userDetails={null} loading />);
        expect(container.querySelector('.loading')).toBeInTheDocument();
    });

    it('should render personal information tab', () => {
        const { container } = render(<OtherUserInfo
            // @ts-ignore

            userDetails={userDetails} tab={0} />);
        expect(
            // @ts-ignore
            container.querySelector('h5').textContent).toEqual('Personal Information');
        expect(
            // @ts-ignore
            container.querySelector('h6').textContent).toEqual('full Name');
        expect(
            // @ts-ignore

            container.querySelector('span').textContent).toEqual('John');
    });

    it('should render no data available state', () => {
        const { container } = render(
            // @ts-ignore

            <OtherUserInfo userDetails={null} tab={1} />);
        expect(container.querySelector('.nodata')).toBeInTheDocument();
    });
});
