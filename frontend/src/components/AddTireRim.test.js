import React from "react";
import { render, fireEvent } from "@testing-library/react";
import AddTireRim from "./AddTireRim";
jest.mock("../services/tires");
import gumeAkcija from "../services/tires";

test("Uspješno dodavanje gume", () => {
  const komponenta = render(<AddTireRim />);
  const inputUrl = komponenta.getByLabelText("URL slike guma:");
  const inputMarka = komponenta.getByLabelText("Marka gume:");
  const inputTip = komponenta.getByLabelText("Tip gume:");
  const inputCijena = komponenta.getByLabelText("Cijena gume:");
  const buttonSpremiGume = komponenta.getByText("Spremi gume");

  fireEvent.change(inputUrl, {
    target: {
      value:
        "https://www.vulkal.hr/images/thumbs/-0694424_MICHELIN-245-40-R18-PILOT-SPORT-5-97Y-XL.jpeg",
    },
  });
  fireEvent.change(inputMarka, { target: { value: "Michelin" } });
  fireEvent.change(inputTip, { target: { value: "Ljetne" } });
  fireEvent.change(inputCijena, { target: { value: "167" } });
  fireEvent.click(buttonSpremiGume);

  expect(gumeAkcija.stvori).toHaveBeenCalledWith({
    slika:
      "https://www.vulkal.hr/images/thumbs/-0694424_MICHELIN-245-40-R18-PILOT-SPORT-5-97Y-XL.jpeg",
    tip: "Ljetne",
    marka: "Michelin",
    cijena: "167",
    original: false,
  });
  expect(inputUrl.value).toBe(
    "https://www.vulkal.hr/images/thumbs/-0694424_MICHELIN-245-40-R18-PILOT-SPORT-5-97Y-XL.jpeg"
  );
  expect(inputMarka.value).toBe("Michelin");
  expect(inputTip.value).toBe("Ljetne");
  expect(inputCijena.value).toBe("167");
});

test("Uspješno renderiranje komponente AddTireRim", () => {
  render(<AddTireRim />);
});
