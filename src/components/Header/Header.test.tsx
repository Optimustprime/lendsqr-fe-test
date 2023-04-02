import { render, screen, fireEvent } from "@testing-library/react";
import {UserContext, UserContextType} from "../../globalAuth";
import Header from "./index";

const mockUserContext: UserContextType = {
    userDetails: null,
    updateUser: jest.fn(),
    getUser: jest.fn(),
    users: [],
    usersOverview: {
        allUsers: 0, // assign a default value of 0 for numeric properties
        activeUsers: 0,
        userWithLoans: 0,
        usersWithSavings: 0,
    },
    loading: false,
    LogOut: jest.fn(),
    getUsers: jest.fn(),
};



describe("Header component", () => {
    it("should render correctly", () => {
        render(
            <UserContext.Provider value={mockUserContext}>
                <Header />
            </UserContext.Provider>
        );
        expect(screen.getByText("Docs")).toBeInTheDocument();
    });

    it("should open dropdown menu on click", () => {
        render(
            <UserContext.Provider value={mockUserContext}>
                <Header />
            </UserContext.Provider>
        );
        fireEvent.click(screen.getByText(/@/i));
        expect(screen.getByText("Log Out")).toBeInTheDocument();
    });

    it("should call LogOut function on logout click", () => {
        render(
            <UserContext.Provider value={mockUserContext}>
                <Header />
            </UserContext.Provider>
        );
        fireEvent.click(screen.getByText(/@/i));
        fireEvent.click(screen.getByText("Log Out"));
        expect(mockUserContext.LogOut).toHaveBeenCalled();
    });
});
