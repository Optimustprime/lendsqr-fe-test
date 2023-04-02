import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { UserContext } from "../../globalAuth";
import SideNav from "./index";

describe("SideNav", () => {
    it("renders all menu items", () => {
        render(
            <MemoryRouter>
                <UserContext.Provider
                    // @ts-ignore
                    value={{ LogOut: jest.fn() }}>
                    <SideNav closeSideNav={jest.fn()} />
                </UserContext.Provider>
            </MemoryRouter>
        );
        expect(screen.getByText("Dashboard")).toBeInTheDocument();
        expect(screen.getByText("Users")).toBeInTheDocument();
        expect(screen.getByText("Guarantors")).toBeInTheDocument();
        expect(screen.getByText("Loans")).toBeInTheDocument();
        expect(screen.getByText("Decision Models")).toBeInTheDocument();
        expect(screen.getByText("Loan Requests")).toBeInTheDocument();
        expect(screen.getByText("Whitelist")).toBeInTheDocument();
        expect(screen.getByText("Karma")).toBeInTheDocument();
        expect(screen.getByText("Organization")).toBeInTheDocument();
        expect(screen.getByText("Loan Products")).toBeInTheDocument();
        expect(screen.getByText("Savings Products")).toBeInTheDocument();
        expect(screen.getByText("Fees and Charges")).toBeInTheDocument();
        expect(screen.getByText("Transactions")).toBeInTheDocument();
        expect(screen.getByText("Services")).toBeInTheDocument();
        expect(screen.getByText("Service Account")).toBeInTheDocument();
        expect(screen.getByText("Settlements")).toBeInTheDocument();
        expect(screen.getByText("Reports")).toBeInTheDocument();
        expect(screen.getByText("Preferences")).toBeInTheDocument();
        expect(screen.getByText("Fees and Pricing")).toBeInTheDocument();
        expect(screen.getByText("Audit Logs")).toBeInTheDocument();
        expect(screen.getByText("Systems Messages")).toBeInTheDocument();
        expect(screen.getByText("Logout")).toBeInTheDocument();
        expect(screen.getByText("v1.2.0")).toBeInTheDocument();
    });
});
