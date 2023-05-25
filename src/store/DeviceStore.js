import {makeAutoObservable} from "mobx";

export default class DeviceStore {
  constructor() {
    this._categories = [];
    this._subcategories = [];
    this._devices = [];
    makeAutoObservable(this);
  }

  setCategories(categories) {
    this._categories = categories;
  }

  setSubCategories(subcategories) {
    this._subcategories = subcategories;
  }

  setDevices(devices) {
    this._devices = devices;
  }

  get categories() {
    return this._categories;
  }

  get subcategories() {
    return this._subcategories;
  }

  get devices() {
    return this._devices;
  }
}
