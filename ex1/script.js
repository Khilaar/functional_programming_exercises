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