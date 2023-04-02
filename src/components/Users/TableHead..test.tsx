import React from "react";
import { render, fireEvent } from "@testing-library/react";
import TableHead from "./TableHead";
import { FilterIcon } from "../icons";

describe("TableHead", () => {
    it("renders the correct headings with filter buttons", () => {
        const openFilter = jest.fn();
        const { getByText, getAllByRole } = render(<TableHead openFilter={openFilter} />);
        expect(getByText("Organization")).toBeInTheDocument();
        expect(getByText("Username")).toBeInTheDocument();
        expect(getByText("Email")).toBeInTheDocument();
        expect(getByText("Phone Number")).toBeInTheDocument();
        expect(getByText("Date joined")).toBeInTheDocument();
        expect(getByText("Status")).toBeInTheDocument();
        const filterButtons = getAllByRole("button");
        expect(filterButtons.length).toBe(6);
        filterButtons.forEach((button) => {
            fireEvent.click(button);
        });
        expect(openFilter).toHaveBeenCalledTimes(6);
    });
});
