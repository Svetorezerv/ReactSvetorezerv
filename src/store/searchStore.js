import {makeAutoObservable} from "mobx";

export default class SearchStore {
  constructor() {
    this._data = null;
    makeAutoObservable(this);
  }

  setData(data) {
    this._data = data;
  }

  get data() {
    return this._data;
  }
}
