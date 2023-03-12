/** @jest-environment jsdom */
import React from "react";
import { render, screen } from "@testing-library/react";
import EditJobPosting from "../components/EditJobPosting";
import UserSession from "../UserSession";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";

beforeAll(() => {
  sessionStorage.setItem("userID", "123456");
  sessionStorage.setItem("firstname", "John");
  sessionStorage.setItem("lastname", "Doe");
  sessionStorage.setItem("role", "Recruiter");
})

test("page renders properly", () => {
  render(
    <UserSession>
      <MemoryRouter initialEntries={[{ pathname: '/jobs/563955' }]}>
        <EditJobPosting />
      </MemoryRouter>
    </UserSession>
  );
  const heading = screen.getByRole("heading", { level: 3 });
  const title = screen.getByText(/Title/i);
  const description = screen.getByText(/Description/i);
  const annualPay = screen.getByText(/Annual Pay/i);
  const location = screen.getByText(/Location/i);
  expect(heading).toBeInTheDocument();
  expect(title).toBeInTheDocument();
  expect(description).toBeInTheDocument();
  expect(annualPay).toBeInTheDocument();
  expect(location).toBeInTheDocument();
});

afterAll(() => {
  sessionStorage.removeItem("userID");
  sessionStorage.removeItem("firstname");
  sessionStorage.removeItem("lastname");
  sessionStorage.removeItem("role");
});