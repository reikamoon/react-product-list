import data from './data.json';

const categories = data.map( item => item.category )

// Make an object where each key is a category name
const categoryObjects = categories.reduce((obj, cat) => {
  obj[cat] = 0
  return obj
}, {}) // !!! Be sure to define the initial value as an Object!

// Make an arr array of the keys
const categoriesUnique = Object.keys(categoryObjects)

const categoriesWithCounts = categories.reduce((obj, cat) => {
  // check if cat exists as a key on obj
  if (obj [cat] === undefined) {
    // if so add 
    // 1 to the value of this key
    obj[cat] = 1
  // else 
  } else {
    // set this key with a value of 1
    obj[cat] += 1

  }
  return obj
}, {}) // !!! Be sure to define the initial value as an Object!

const productCount = categoriesUnique.reduce((acc, item) => {
    acc.push({ name: item, count: categoriesWithCounts[item] })

    return acc
}, [])
console.log(productCount)

export {
    categories,
    categoriesUnique,
    productCount,

}


export default data