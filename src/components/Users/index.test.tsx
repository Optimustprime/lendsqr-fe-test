import { render, screen } from "@testing-library/react";
import React from "react";
import Users from "./index";
import { UserContext } from "../../globalAuth";

describe("Users component", () => {
    const mockUserContext = {
        loading: false,
        users: [
            {
                id: 1,
                userName: "john.doe",
                email: "john.doe@example.com",
                status: "Active",
                orgName: "ABC Corp",
                createdAt: new Date().toISOString(),
            },
        ],
        usersOverview: {
            allUsers: 1,
            activeUsers: 1,
            userWithLoans: 0,
            usersWithSavings: 0,
        },
    };

    it("should render Users component correctly", () => {
        render(
            <UserContext.Provider
                // @ts-ignore
                value={mockUserContext}>
                <Users />
            </UserContext.Provider>
        );

        expect(screen.getByText("Active Users")).toBeInTheDocument();
        expect(screen.getByText("Users with Loans")).toBeInTheDocument();
        expect(screen.getByText("Users with Savings")).toBeInTheDocument();
    });
});
