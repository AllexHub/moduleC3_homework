class ElectricalAppliance {
  constructor(name, power){
    this.name = name;
    this.power = power;
    this.isPlugged = false;
  }
  plugIn() {
    console.log(this.name + " is plugged!");
    this.isPlugged = true;
  }

  unplug() {
    console.log(this.name + " is unplugged!");
    this.isPlugged = false;
  }
}

class Lantern extends ElectricalAppliance {
  constructor (name, brand, power, bulbType) {
    super(name, power);
    this.brand = brand;
    this.type = type;
    this.isPlugged = false;
  }
}

class Notebook extends ElectricalAppliance {
  constructor(name, brand, power, type, functionality) {
    super(name, power); 
    this.brand = brand;
    this.type = type;
    this.functionality = functionality;
    this.isPlugged = false;
  }
}

const tableLantern = new Lantern("Table lamp", "Xiaomi", 5, "LED");

const homePC = new Notebook("Table PC", "Intel", 120, "stationary", "for work");

tableLantern.plugIn();

homePC.unplug();

// результат
console.log(homePC)
console.log(tableLamp)