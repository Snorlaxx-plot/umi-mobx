import { observable, action } from "mobx";

class CounterStore {
  @observable count = 0;

  @action increment() {
    this.count++;
  }

  @action decrement() {
    this.count--;
  }
}

export const counterStore = new CounterStore();
