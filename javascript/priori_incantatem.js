// https://www.codewars.com/kata/574d0b01b4b769b207000ca3

/* it's not my solution,
and I don't know how it works */

MAX_PRIOR_SPELLS = 13;

class Wand {
  constructor(spells = {}) {
    this.casted = [];
    Object.assign(this, spells);
    console.log("~ this", this);
    console.log("~ spells", spells);
    //  Object.keys(spells).forEach((spell) => (this[spell] = spells[spell]));

    return new Proxy(this, {
      get: (target, property) => {
        console.log("~ target", target);
        console.log("~ get property", property);
        const value = target[property];
        if (typeof value === "function") {
          console.log("~ add property", property);

          target.casted.unshift(property);
        }
        return value;
      },
    });
  }

  prioriIncantatem() {
    /* const casted = [...this.casted];
    this.casted.unshift("prioriIncantatem");
    return casted; */
    return this.casted.slice(1, MAX_PRIOR_SPELLS + 1);
  }

  deletrius() {
    this.casted = ["deletrius"];
  }
}

const w = new Wand({
  expelliarmus: function () {},
  alohomora: function () {},
  avadaKedavra: function () {},
});

w.alohomora();
w.expelliarmus();
w.avadaKedavra();

console.log(w.prioriIncantatem(), [
  "avadaKedavra",
  "expelliarmus",
  "alohomora",
]);
