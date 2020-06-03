function whichJarsOpened(nVisits) {
  jars = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]

  let visits = nVisits

  for (let nthVisit = 1; nthVisit <= visits; nthVisit++) {
    for (let jn = 0; jn < jars.length; jn += nthVisit) {
      jars[jn] === 0 ? jars[jn] = 1 : jars[jn] = 0;
    }
  }
  
  let positions = []
  jars.forEach((jar, idx) => jar === 1 ? positions.push(idx) : null);
  
  return `The open jars are number ${positions}`
}
