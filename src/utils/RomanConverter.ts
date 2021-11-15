export class RomanConverter {
  static romanDecimalMapping: Record<string, number> = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };

  public static convert(number: number): string {
    let romanValue = "";
    Object.keys(this.romanDecimalMapping).forEach((element) => {
      while (number >= this.romanDecimalMapping[element]) {
        romanValue += element;
        number -= this.romanDecimalMapping[element];
      }
    });

    return romanValue;
  }
}
