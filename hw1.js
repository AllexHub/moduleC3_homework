function abc (obj) {
  for (let abc in obj) {
    if (obj.hasOwnProperty(abc)) {
      console.log(abc, obj[abc]);
    }
  }
}