export abstract class Collection<T> {
  collection: Array<T> = [];

  abstract add(object: T): Collection<T>;

  addObject(object: T): Collection<T> {
    this.collection.push(object);
    return this;
  }
}
