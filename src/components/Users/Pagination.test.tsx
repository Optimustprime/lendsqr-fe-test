import React from "react";
import { render } from "@testing-library/react";
import Pagination from "./Pagination";

describe("Pagination", () => {
    test("renders pagination component", () => {
        const props = {
            currentPage: 1,
            numberOfPages: 10,
            next: () => {},
            previous: () => {},
            setPage: (num: number) => {},
        };
        const { getByText } = render(<Pagination {...props} />);
        expect(getByText("Showing")).toBeInTheDocument();
        expect(getByText("out of 10")).toBeInTheDocument();
    });
});
