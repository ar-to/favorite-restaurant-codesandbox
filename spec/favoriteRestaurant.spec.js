import { pickOne, pickTwo, weightedPickOne } from "../src/favoriteRestaurant";

const testData = {
  bob: ["Subway", "McDonalds", "Whataburger"],
  jon: ["Subway", "Chipotle", "Whataburger"],
  joe: ["Whataburger", "Wendys", "FiveGuys"]
};

it("picks one", () => {
  expect(pickOne(testData)).toBe("Whataburger");
});

it("picks two", () => {
  expect(pickTwo(testData)).toStrictEqual(["Whataburger", "Subway"]);
});

it("picks one weighted", () => {
  expect(weightedPickOne(testData)).toBe("Subway");
});
