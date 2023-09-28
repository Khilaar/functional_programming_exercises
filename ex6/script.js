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



  //////////////////////////////////////////////////////////// 6.
  //I could reuse the code from exercise 3. again but I wont since I want to learn different methods




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