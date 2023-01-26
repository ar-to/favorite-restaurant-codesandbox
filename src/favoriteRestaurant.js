// Write functions here
function hashRestaurantsCount(data) {
  let restaurantCountHash = {
    restaurantPlaceholder: 0
  };
  for (const [_, restaurants] of Object.entries(data)) {
    restaurants.forEach((restaurant) => {
      if (restaurantCountHash[restaurant] === undefined) {
        restaurantCountHash[restaurant] = 0;
      }
      restaurantCountHash[restaurant] += 1;
    });
  }
  // return restaurantCountHash
  // const restaurantCountHash = hashRestaurantsCount(data)
  const hashValues = Object.values(restaurantCountHash);
  const sortedHashValues = [...hashValues].sort();
  const reversedHashValues = sortedHashValues.reverse();
  const largerstValue = [...hashValues].sort().reverse()[0];
  const indexOfLargestValue = hashValues.indexOf(largerstValue);
  const hashKeys = Object.keys(restaurantCountHash);
  const mostOccurring = hashKeys[indexOfLargestValue];
  return {
    restaurantCountHash,
    hashValues,
    sortedHashValues,
    reversedHashValues,
    largerstValue,
    indexOfLargestValue,
    hashKeys,
    mostOccurring
  };
}

export function pickOne(data) {
  // let mostOccurring = "";
  // let restaurantCountHash = {
  //   restaurantPlaceholder: 0
  // };
  // for (const [_, restaurants] of Object.entries(data)) {
  //   restaurants.forEach((restaurant) => {
  //     if (restaurantCountHash[restaurant] === undefined) {
  //       restaurantCountHash[restaurant] = 0;
  //     }
  //     restaurantCountHash[restaurant] += 1;
  //   });
  // }
  const restaurantsAnalytics = hashRestaurantsCount(data);
  // const hashValues = Object.values(restaurantCountHash);
  // const sortedHashValues = [...hashValues].sort();
  // const largerstValue = [...hashValues].sort().reverse()[0];
  // const indexOfLargestValue = hashValues.indexOf(largerstValue);
  // const hashKeys = Object.keys(restaurantCountHash);
  // mostOccurring = hashKeys[indexOfLargestValue];
  // console.log(">>>", restaurantCountHash);
  // console.log(">>>", hashValues);
  // console.log(">>>sortedHashValues", sortedHashValues);
  // console.log(">>>", largerstValue);
  // console.log(">>>", indexOfLargestValue);
  // console.log(">>>", hashKeys);
  // console.log(">>>", mostOccurring);
  return restaurantsAnalytics.mostOccurring;
}

export function pickTwo(data) {
  // reverseValuesList = [...hashValues].sort().reverse()
  // reverseValuesList.map((value, index) => {

  // })
  return;
}

export function weightedPickOne(data) {
  return;
}
