const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
    { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
    { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
    { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
    { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
    { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
    { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
  ];




  //////////////////////////////////////////////////////////// 5.
  //Here I reused the code from exercise 3. and changed it just a little bit




  const sortInventors = function (arr) {
    let years = []
    let result = []
    //First we create an array of all years
    for (obj of arr) {
        //Little change here
        years.push(obj.passed - obj.year)
    }
    //Then we sort the array with the years
    years = years.sort()
    //We loop thru the years array we created
    for (let i = 0; i < years.length; i++) {
        //For each iteration of the years array loop, we loop thru the original arr
        for (let j = 0; j < arr.length; j++) {
            //If we get a match between the years array we created and the year of the object inside of the original array we push that object into the newly created result array. Since we started the first loop at the lowest number in the original array it will push the objects in the correct order. It should also work if 2 objects have the same years, between those two the sequence doesn't matter.
            //Little change here
            if (arr[j].passed - arr[j].year === years[i]) {
                result.push(arr[j])
            }
        }
    }
    //We return the newly created result array
    return result
  }

  console.log(sortInventors(inventors))




  
  ////////////////////////////////////////////////////////////