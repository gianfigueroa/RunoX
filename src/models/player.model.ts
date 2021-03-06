import { Hand } from "./hand.model";

export class Player {
  readonly id: string;
  readonly name: string;
  readonly pic: string;

  readonly hand: Hand;

  constructor(id: string, name: string, pic: string) {
    this.id = id;
    this.name = name;
    this.pic = pic;

    this.hand = new Hand();
  }

  get isNull() {
    return false;
  }
}

export class NullPlayer extends Player {
  constructor() {
    super("", "", "");
  }

  get isNull() {
    return true;
  }
}
