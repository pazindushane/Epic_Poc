export class userDTO {
  private _username: string;
  private _userrole: string;
  private _firstname: string;
  private _lastname : string;

  constructor(username: string, userrole: string, firstname: string, lastname: string) {
    this._username = username;
    this._userrole = userrole;
    this._firstname = firstname;
    this._lastname = lastname;
  }

  get username(): string {
    return this._username;
  }

  set username(value: string) {
    this._username = value;
  }

  get userrole(): string {
    return this._userrole;
  }

  set userrole(value: string) {
    this._userrole = value;
  }

  get firstname(): string {
    return this._firstname;
  }

  set firstname(value: string) {
    this._firstname = value;
  }

  get lastname(): string {
    return this._lastname;
  }

  set lastname(value: string) {
    this._lastname = value;
  }
}
