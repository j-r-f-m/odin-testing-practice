import { analyzeArray } from "./analyzeArray";

test("average of array", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toMatchObject({ average: 4 });
});

test("minimum of array", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toMatchObject({ min: 1 });
});

test("maximun of array", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toMatchObject({ max: 8 });
});

test("length of array", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toMatchObject({ length: 6 });
});
