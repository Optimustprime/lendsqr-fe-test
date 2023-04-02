import { render } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { UserContext } from "../../globalAuth";
import UserDetails from "./index";

const mockUser = {
  id: 1,
  name: "John Doe",
  email: "johndoe@example.com",
  status: "active",
};

const mockContextValue = {
  loading: false,
  users: [mockUser],
  userDetails: mockUser,
  updateUser: jest.fn(),
  getUser: jest.fn(),
};

describe("UserDetails", () => {
  it("renders without errors", () => {
    render(
        <MemoryRouter initialEntries={["/user/1"]}>
          <Routes>
            <Route path="/user/:id" element={<UserContext.Provider
                // @ts-ignore

                value={mockContextValue}><UserDetails /></UserContext.Provider>} />
          </Routes>
        </MemoryRouter>
    );
  });
});
