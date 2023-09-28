//An array of all inventors (objects), with key value pairs
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

















//////////////////////////////////////////////////////////// 1.
  /*
  //This looks like the simpler solution to me, but probably only because im more familiar with it

  const filterList = function (arr) {
    let inventors1500 = []
    for (const element of arr) {
        if (element.year >= 1500 && element.year < 1600) {
            inventors1500.push(element)
        }
    }
    return inventors1500
  }

  console.log(filterList(inventors))
  */

  //I wanted to also implement the filter method

  const filterList = function (arr) {
    //We loop thru the given array using the filter methof and check if the year is between 1500 and 1599 only if this is a match it will stay in the new array called inventors1500
    const inventors1500 = arr.filter((inventor) => (inventor.year >= 1500 && inventor.year < 1600))
    return inventors1500
  }

  console.log(filterList(inventors))
  ////////////////////////////////////////////////////////////




















  //////////////////////////////////////////////////////////// 2.

  const onlyNames = function (arr) {
    //Save the new array in a variable. With map we loop thru the given array and create a new array containing only the values of the keys first and last 
    const namesObjects = arr.map((inventor) => `${inventor.first} ${inventor.last}`)
    return namesObjects
  }

  console.log(onlyNames(inventors))

  ////////////////////////////////////////////////////////////

















  //////////////////////////////////////////////////////////// 3.
  //Its a little experimental but it seems to work
/*
  const sortInventors = function (arr) {
    let years = []
    let result = []
    //First we create an array of all years
    for (obj of arr) {
        years.push(obj.year)
    }
    //Then we sort the array with the years
    years = years.sort()
    //We loop thru the years array we created
    for (let i = 0; i < years.length; i++) {
        //For each iteration of the years array loop, we loop thru the original arr
        for (let j = 0; j < arr.length; j++) {
            //If we get a match between the years array we created and the year of the object inside of the original array we push that object into the newly created result array. Since we started the first loop at the lowest number in the original array it will push the objects in the correct order. It should also work if 2 objects have the same years, between those two the sequence doesn't matter.
            if (arr[j].year === years[i]) {
                result.push(arr[j])
            }
        }
    }
    //We return the newly created result array
    return result
  }

  console.log(sortInventors(inventors))
  */
  ////////////////////////////////////////////////////////////




















  //////////////////////////////////////////////////////////// 4.
  //This seemed simpler and more functional than the reduce method

  const addAllYears = function (arr) {
    //Create new variable to which we will add all the years 
    let total = 0;
    //Loop thru the given array and add the value of the key of the element in the array to the total amount
    for (obj of arr) {
        total += obj.year
    }
    //Return total amount
    return total
    
  }

  console.log(addAllYears(inventors))

  ////////////////////////////////////////////////////////////


















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



















  //////////////////////////////////////////////////////////// 6.
  //I could reuse the code from exercise 3. again but I wont since I want to learn
  const sortByName = function (arr) {
    
    //We directly create a new array which we will return at the end
    //This variable should contain a sorted arr by creating a custom sorting logic
    let newArr = arr.sort(function(a, b) {
        //Make it not case sensitive
        const nameA = a.last.toUpperCase()
        const nameB = b.last.toUpperCase()
        // if the nameA comes after nameB in the alphabet the function returns 1 which is implementing, that nameA should be sorted after nameB
        if (nameA > nameB) {
          return 1;
        }
        // if the nameB comes after nameA in the alphabet the function returns -1 which is implementing, that nameB should be sorted before nameB
        if (nameA < nameB) {
          return -1;
        }
        // if the two compared values are in the same alphabetical position it should not change the order
        return 0;
      });

      //We return the newly created array 
      return newArr
  }

  console.log(sortByName(inventors))

  ////////////////////////////////////////////////////////////

















  //////////////////////////////////////////////////////////// Object.keys

  const object = {
    'keyCode': 'JS',
    2: 'Program Paradigm',
    Target: 'Browser',
  }

  function objectKeys(obj){
    let keys = []
    for (x in obj) {
        keys.push(x)
    }
    return keys
  }

  console.log(objectKeys(object))

  ////////////////////////////////////////////////////////////




  //////////////////////////////////////////////////////////// Object.values

  const object2 = {
    'keyCode': 'JS',
    2: 'Program Paradigm',
    Target: 'Browser',
  }

  function objectValues(obj){
    let values = []
    for (x in obj) {
        values.push(obj[x])
    }
    return values
  }

  console.log(objectValues(object2))