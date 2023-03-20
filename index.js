let blocks
let distanceTravelled
let fare



function distanceFromHqInBlocks(street){
  if (street >= 42) {
    return blocks = street - 42
  } else return blocks = (street - 42) * -1 
}

function distanceFromHqInFeet(street) {
 distanceFromHqInBlocks(street)
 distanceTravelled = blocks * 264
 return distanceTravelled
}

function distanceTravelledInFeet(startBlock, destinationBlock) {
  destinationBlock >= startBlock ? blocks = destinationBlock - startBlock : blocks = (destinationBlock - startBlock) * -1
  distanceTravelled = blocks * 264
  return distanceTravelled
}

function calculatesFarePrice(startBlock, destinationBlock) {
  distanceTravelledInFeet(startBlock, destinationBlock)
  // distanceTravelled
  switch (true) {
    case distanceTravelled <= 400:
      fare = 0
      break
    case distanceTravelled > 400 && distanceTravelled < 2001:
      distanceTravelled -= 400
      fare = (distanceTravelled * 2) / 100
      break
    case distanceTravelled >= 2001 && distanceTravelled < 2500:
      fare = 25
      break
    case distanceTravelled > 2500:
      fare = 'cannot travel that far'
  }
  return fare

}