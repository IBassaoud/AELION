export class Singleton {
  private static _instance: Singleton | null = null;
  private _instanceOcc: number = 0;

  private constructor() {
    this._instanceOcc = this._instanceOcc + 1;
  }

  public static getInstance(): Singleton {
    if (Singleton._instance === null) {
        Singleton._instance = new Singleton();
    }
    return Singleton._instance;
  }

  get instanceOcc() {
    return this._instanceOcc;
  }
}
