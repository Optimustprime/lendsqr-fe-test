import { render } from "@testing-library/react";
import Cards from "./Cards";

test("renders all cards", () => {
    const usersOverview = {
        allUsers: 10,
        activeUsers: 5,
        userWithLoans: 3,
        usersWithSavings: 7,
    };
    const { getByText } = render(<Cards usersOverview={usersOverview} loading={false} />);
    expect(getByText("Users")).toBeInTheDocument();
    expect(getByText("Active Users")).toBeInTheDocument();
    expect(getByText("Users with Loans")).toBeInTheDocument();
    expect(getByText("Users with Savings")).toBeInTheDocument();
});
