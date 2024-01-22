export class Location {
  latest = null;

  constructor() {}

  getLatest() {
    return this.latest;
  }

  setLatest(requestedLatest) {
    this.latest = requestedLatest;
  }
}
