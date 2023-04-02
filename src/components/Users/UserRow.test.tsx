import { render, fireEvent } from "@testing-library/react";
import UserRow from "./UserRow";

const user = {
    orgName: "Test Organization",
    createdAt: "2022-01-01",
    userName: "testuser",
    email: "testuser@test.com",
    phoneNumber: "123-456-7890",
    status: "active",
    id: "123",
};

const mockOpenFilter = jest.fn();

describe("UserRow", () => {
    test("renders user data", () => {
        const { getByText } = render(
            <UserRow
                // @ts-ignore
                user={user} idx={0} openFilter={mockOpenFilter} />
        );

        expect(getByText(user.orgName)).toBeInTheDocument();
        expect(getByText(user.userName)).toBeInTheDocument();
        expect(getByText(user.email)).toBeInTheDocument();
        expect(getByText(user.phoneNumber)).toBeInTheDocument();
        expect(getByText(user.createdAt)).toBeInTheDocument();
        expect(getByText(user.status)).toBeInTheDocument();
    });

});
