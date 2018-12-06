/* eslint-disable import/no-mutable-exports */
let transferIndex = 0;

function transferIncrease() {
  /* eslint-disable no-plusplus */
  transferIndex++;
}

export { transferIndex, transferIncrease };
