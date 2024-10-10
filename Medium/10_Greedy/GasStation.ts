const canCompleteCircuit = (gas: number[], cost: number[]): number => {
  let result: number = 0
  let totalGas: number = 0
  let currGas: number = 0

  for (let i = 0; i < gas.length; i++) {
    totalGas += gas[i] - cost[i]
    currGas += gas[i] - cost[i]

    if (currGas < 0) {
      currGas = 0
      result = i + 1
    }
  }

  return totalGas >= 0 ? result : -1
}

const gas = [1, 2, 3, 4, 5]
const cost = [3, 4, 5, 1, 2]

console.log(canCompleteCircuit(gas, cost))
