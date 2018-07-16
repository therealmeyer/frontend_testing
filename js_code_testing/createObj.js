
const createObj = (keys, values) => {
  let returnObj = {}
  keys.forEach( (key, idx) => {
    returnObj[key] = values[idx]
  });
  return returnObj;
}

export default createObj;