import { capitalize, reverseString } from "./index";

test("capitalize first letter of passed word", () => {
  expect(capitalize("hello")).toBe("Hello");
});

test("reverse hello", () => {
  expect(reverseString("hello")).toBe("olleh");
});
