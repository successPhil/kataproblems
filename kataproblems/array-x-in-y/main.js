Object.defineProperty( Array.prototype, "containsAll", { value: function containsAll(a) {
  return a.every((value) => this.includes(value))
} } );