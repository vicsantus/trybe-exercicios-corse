interface Person {
  id: number;
  name: string;
  showIdentification(): void;
}

class PhysicalPerson implements Person {
  private static lastId = 0;
  private _name;
  private _id;
  private _cpf;

  constructor(name: string, cpf: string) {
    this._id = PhysicalPerson.newId();
    this._name = name;
    this._cpf = cpf;
  }

  private static newId() { return this.lastId++; }
  get id() { return this._id; }
  get name() { return this._name; }
  get cpf() { return this._cpf; }
  showIdentification() { console.log(this.id, this._cpf, 'PhysicalPerson'); }
}

class LegalPerson implements Person {
  private static lastId = 0;
  private _name;
  private _id;
  private _cnpj;

  constructor(name: string, cnpj: string) {
    this._id = LegalPerson.newId();
    this._name = name;
    this._cnpj = cnpj;
  }

  private static newId() { return this.lastId++; }
  get id() { return this._id; }
  get name() { return this._name; }
  get cnpj() { return this._cnpj; }
  showIdentification() { console.log(this.id, this._cnpj, 'LegalPerson'); }
}

const pp0 = new PhysicalPerson('John', '123456789');
const pp1 = new PhysicalPerson('Jenny', '987654321');
const lp = new LegalPerson('International Sales SA', '834729384723');

const showIdentification = (person: Person) => {
  person.showIdentification();
}
showIdentification(pp0);
showIdentification(pp1);
showIdentification(lp);

/*
Saída:
0 123456789
1 987654321
0 834729384723
*/
