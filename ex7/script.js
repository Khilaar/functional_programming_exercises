const object = {
    'keyCode': 'JS',
    2: 'Program Paradigm',
    Target: 'Browser',
  }



    //////////////////////////////////////////////////////////// Object.keys

    
    
      function objectKeys(obj){
        //We will push all the keys into this new variable
        let keys = []

        //Loop thru the object and push the key into the keys variable
        for (x in obj) {
            keys.push(x)
        }
        return keys
      }
    
      console.log(objectKeys(object))
    
    ////////////////////////////////////////////////////////////