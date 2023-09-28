const object2 = {
    'keyCode': 'JS',
    2: 'Program Paradigm',
    Target: 'Browser',
  }



  //////////////////////////////////////////////////////////// Object.values


  function objectValues(obj){
    let values = []
    for (x in obj) {
        values.push(obj[x])
    }
    return values
  }

  console.log(objectValues(object2))


  
  ////////////////////////////////////////////////////////////