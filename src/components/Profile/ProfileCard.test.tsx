import React from "react";
import { render } from "@testing-library/react";
import ProfileCard from "./ProfileCard";

describe("ProfileCard component", () => {
    const mockUserDetails = {
        profile: {
            firstName: "John",
            lastName: "Doe",
            avatar: "https://example.com/avatar.jpg",
        },
        accountBalance: 1000,
        accountNumber: "1234567890",
    };
    const mockSwitchTab = jest.fn();

    test("calls switchTab function when clicking on tab", () => {
        const { getByText } = render(
            <ProfileCard
                // @ts-ignore
                userDetails={mockUserDetails}
                loading={false}
                switchTab={mockSwitchTab}
                tab={0}
            />
        );

        getByText("General Details").click();
        expect(mockSwitchTab).toHaveBeenCalledWith(0);

        getByText("Documents").click();
        expect(mockSwitchTab).toHaveBeenCalledWith(1);

        getByText("Bank Details").click();
        expect(mockSwitchTab).toHaveBeenCalledWith(2);

        getByText("Loans").click();
        expect(mockSwitchTab).toHaveBeenCalledWith(3);

        getByText("Savings").click();
        expect(mockSwitchTab).toHaveBeenCalledWith(4);

        getByText("App and System").click();
        expect(mockSwitchTab).toHaveBeenCalledWith(5);
    });
});
