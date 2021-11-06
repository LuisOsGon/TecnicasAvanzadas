import { render, screen, waitFor } from "@testing-library/react";
import { AuthProvider, AuthConsumer } from "../AuthContext";
import AuthService from "../../services/auth";

jest.mock("../../services/auth");

describe("AuthContext", () => {
  it("should fetch user data if jwt is present and is valid", async () => {
    AuthService.fetchUser.mockResolvedValue({ user: { id: 1, name: "John" } });
    localStorage.setItem("jwt", "test");

    render(
      <AuthProvider>
        <AuthConsumer>
          {({ user, isAuthenticated }) =>
            isAuthenticated ? <div>{user.name}</div> : null
          }
        </AuthConsumer>
      </AuthProvider>
    );

    expect(AuthService.fetchUser).toHaveBeenCalledWith("test");
    await waitFor(() => expect(screen.getByText("John")).toBeInTheDocument());
  });

  it("should not fetch user data if jwt is not present", async () => {
    render(
      <AuthProvider>
        <AuthConsumer>
          {({ user, isAuthenticated }) =>
            isAuthenticated ? <div>{user.name}</div> : null
          }
        </AuthConsumer>
      </AuthProvider>
    );

    expect(AuthService.fetchUser).not.toHaveBeenCalled();
    await waitFor(() =>
      expect(screen.queryByText("John")).not.toBeInTheDocument()
    );
  });
});
