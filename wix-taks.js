function messageReducer(S, K) {
  let sArr = S.split(' ').map(word => word.length);
  let counter = 1;
  let message = sArr[0];

  if ( message > K ) {
    return -1;
  }

  for ( let i = 1; i < sArr.length; i++) {
    if ( sArr[i] > K) {
      return -1;
    }

    if ( i === sArr.length - 1 ) {
      message += sArr[i]
    }

    message += sArr[i] + 1;

    if (message > K) {
      message = sArr[i];
      counter++;
    }
  }

  return counter;
}

console.log(messageReducer('asda dasda sdasdasdad asd asd', 10));
