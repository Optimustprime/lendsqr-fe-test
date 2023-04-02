import { render, screen } from '@testing-library/react';
import UsersTable, { FilterPayload, UserType } from './UsersTable';

describe('UsersTable', () => {
    const users: UserType['users'] = [
        // @ts-ignore
        { id: 1, username: 'user1', email: 'user1@example.com', phone: '1234567890', orgName: 'org1', status: 'active' },
        // @ts-ignore
        { id: 2, username: 'user2', email: 'user2@example.com', phone: '2345678901', orgName: 'org2', status: 'inactive' },
    ];

    const filterUsers: UserType['filterUsers'] = users;

    const handleFilter = jest.fn((payload: FilterPayload | undefined) => {});
    const handleReset = jest.fn(() => {});

    it('renders the table with data', () => {
        render(<UsersTable users={users} filterUsers={filterUsers} loading={false} handleFilter={handleFilter} handleReset={handleReset} />);
        const tableHead = screen.getByText('Username');
        expect(tableHead).toBeInTheDocument();

        const rows = screen.getAllByRole('row');
        expect(rows).toHaveLength(3); // including the table header

        const usernames = screen.getAllByText(/user\d/);
        expect(usernames).toHaveLength(2);
    });

    it('renders the loading indicator', () => {
        render(<UsersTable users={[]} filterUsers={[]} loading={true} handleFilter={handleFilter} handleReset={handleReset} />);
        const loadingIndicator = screen.getByAltText('Loading');
        expect(loadingIndicator).toBeInTheDocument();
    });

    it('renders the "No Data" message when there is no data', () => {
        render(<UsersTable users={[]} filterUsers={[]} loading={false} handleFilter={handleFilter} handleReset={handleReset} />);
        const noDataMessage = screen.getByText('No Data');
        expect(noDataMessage).toBeInTheDocument();

        const resetButton = screen.getByText('Reset');
        expect(resetButton).toBeInTheDocument();
    });

    it('handles filtering', () => {
        render(<UsersTable users={users} filterUsers={filterUsers} loading={false} handleFilter={handleFilter} handleReset={handleReset} />);
        const filterButton = screen.getByRole('button', { name: 'Filter' });
        filterButton.click();

        const usernameInput = screen.getByPlaceholderText('Username') as HTMLInputElement;
        usernameInput.value = 'user1';
        usernameInput.dispatchEvent(new Event('input'));

        const filterApplyButton = screen.getByRole('button', { name: 'Filter' });
        filterApplyButton.click();

        expect(handleFilter).toHaveBeenCalledWith({
            username: 'user1',
            email: undefined,
            phone: undefined,
            date: '',
            org: undefined,
            status: undefined,
        });
    });
});
