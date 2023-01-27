// Write functions here
function hashRestaurantsCount(data) {
  let restaurantCountHash = {
    restaurantPlaceholder: 0,
  };
  for (const [_, restaurants] of Object.entries(data)) {
    restaurants.forEach((restaurant) => {
      if (restaurantCountHash[restaurant] === undefined) {
        restaurantCountHash[restaurant] = 0;
      }
      restaurantCountHash[restaurant] += 1;
    });
  }
  const hashValues = Object.values(restaurantCountHash);
  const sortedHashValues = [...hashValues].sort();
  const reversedHashValues = sortedHashValues.reverse();
  const largerstValue = [...hashValues].sort().reverse()[0];
  const indexOfLargestValue = hashValues.indexOf(largerstValue);
  const hashKeys = Object.keys(restaurantCountHash);
  const mostOccurring = hashKeys[indexOfLargestValue];
  // second largest
  const secondLargestValue = reversedHashValues[1];
  const secondLargestIndex = hashValues.indexOf(secondLargestValue);
  let secondMostOccurring = null;
  let topTwoMostOccurent = null;
  if (hashKeys[secondLargestIndex] !== undefined) {
    secondMostOccurring = hashKeys[secondLargestIndex];
    topTwoMostOccurent = [mostOccurring, secondMostOccurring];
  }
  // console.log(">>>", restaurantCountHash);
  // console.log(">>>", hashValues);
  // console.log(">>>sortedHashValues", sortedHashValues);
  console.log(">>>reversedHashValues", reversedHashValues);
  // console.log(">>>", largerstValue);
  // console.log(">>>", indexOfLargestValue);
  // console.log(">>>", hashKeys);
  // console.log(">>>", mostOccurring);
  return {
    restaurantCountHash,
    hashValues,
    sortedHashValues,
    reversedHashValues,
    largerstValue,
    indexOfLargestValue,
    hashKeys,
    mostOccurring,
    secondMostOccurring,
    topTwoMostOccurent,
  };
}

export function pickOne(data) {
  const restaurantsAnalytics = hashRestaurantsCount(data);
  return restaurantsAnalytics.mostOccurring;
}

export function pickTwo(data) {
  const restaurantsAnalytics = hashRestaurantsCount(data);
  return restaurantsAnalytics.topTwoMostOccurent;
}

export function weightedPickOne(data) {
  return;
}
