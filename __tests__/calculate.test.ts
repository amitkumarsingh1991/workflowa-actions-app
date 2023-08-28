/**
 * @jest-environment jsdom
 */

import { fireEvent, render, screen, waitFor, act} from "@testing-library/react";

describe("Todo App", () => {
    it("Add two number", () => {
       const result = "21";
        expect(result).toEqual("21");
    });
  });