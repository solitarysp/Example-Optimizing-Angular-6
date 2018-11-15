export class Skill {
  constructor(private _id, private _name) {
  }

 public get id() {
    return this._id;
  }

  public get name() {
    console.info(this._name)
    return this._name;
  }
}
