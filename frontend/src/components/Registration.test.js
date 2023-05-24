import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, fireEvent } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import "jest-location-mock";
import Registracija from "./Registration";

test("Neuspješna registracija zbog krive forme e-maila", () => {
  window.alert = jest.fn();
  const komponenta = render(
    <Router>
      {" "}
      <Registracija />
    </Router>
  );
  const username = komponenta.getByLabelText("Username");
  const ime = komponenta.getByLabelText("Name");
  const mail = komponenta.getByLabelText("E-mail");
  const pass = komponenta.getByLabelText("Password");
  const forma = komponenta.container.querySelector("form");
  fireEvent.change(username, { target: { value: "testKorisnik" } });
  fireEvent.change(ime, { target: { value: "test Korisnik" } });
  fireEvent.change(mail, { target: { value: "test" } });
  fireEvent.change(pass, { target: { value: "okviri" } });
  fireEvent.submit(forma);
  expect(window.alert).toBeCalledWith(
    "You have entered an invalid email address!"
  );
});
