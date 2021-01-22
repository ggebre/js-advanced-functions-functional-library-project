const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      for (const elem of collection){
        callback(elem)
      }
    },

    map: function(collection, callback) {
      let newC = []
      let newCollection = Array.isArray(collection) ? [...collection] : Object.keys(collection)
      // if (Array.isArray(collection)) {
      //   for (const elem of collection){
      //     newC.push(callback(elem, collection.indexOf(elem), collection))
      //   }
      // } else {
      //   for (const elem of Object.keys(collection)){
      //     newC.push(callback(collection[elem], Object.keys(collection).indexOf(elem), Object.keys(collection)))
      //   }
      // }
      for (const elem of newCollection){
        const elemE = Array.isArray(collection) ? elem : collection[elem]
        newC.push(callback(elemE, newCollection.indexOf(elemE), collection))
      }
      return newC
    },

    reduce: function(collection, callback, acc) {
        let start = acc ? 0 : 1 
        let total = acc ? acc : collection[0] 
        
        for (let i=start; i < collection.length; i++){
          total = callback(total, collection[i])
        } 
        return total 
    },
    find: function(collection, callback){
        for(const elem of collection){
          if (callback(elem)) {
            return elem 
          }
        }
        return undefined
    }, 
    filter: function(collection, callback){
      let output = []
      for(const elem of collection){
        if (callback(elem)){
          output.push(elem)
        }
      } 
      return output
    }, 
    size: function(collection){
      return Object.keys(collection).length
    }, 
    first: function(collection, acc){
      
      if (acc){
        return collection.slice(0, acc)
      }
      return collection[0]
    }, 
    last: function(collection, acc){
      const length = collection.length
      if (acc){
        return collection.slice( length - acc)
      }
      return collection[length - 1]
    }, 
    compact: function(collection){
      let output = []
      for (const elem of collection) {
        if (elem){
          output.push(elem)
        }
      }
      return output
    }, 

    sortBy: function(collection, callback){
        let output = []
        let memo = {}
        for (const elem of collection){
          // output.push(callback(elem))
          memo[elem] = callback(elem) 
          output.push(callback(elem))
        }
        return output.sort()
    }, 
    uniq: function(collection,isSorted, callback){
      let output = {}
          for (const elem of collection){
            if(!output[elem]){
              output[elem] = elem
            }
          }
        return Object.values(output)
    }, 
    values: function(object){
      let values = []
      for(const key in object){
        values.push((object[key]))
      }
      return values 
      // return Object.values(object)
    },
    keys: function(object){
      let keys = []
      for(const key in object){
        keys.push(key)
      }
      return keys 

    }, 
    functions: function(object) {
      return Object.keys(object).filter(key => typeof (object[key]) == 'function')
      
    },


  }
})()

fi.libraryMethod()
let obj = {
  name : 'Getu',

  sayHello: function() {
    return `${this.name}`
  }
}
// console.log(fi.reduce(obj, (x, y) => x + y*3))
// // console.log(fi.reduce(obj, (x, y) => x + y, 0))
// console.log(fi.find([1,2,3,4], x => x%2 == 0))
console.log( fi.values(obj)) 