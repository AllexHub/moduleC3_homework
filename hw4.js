function ElectricalAppliance(name, power) {
    this.name = name;
    this.power = power;
    this.isPlugged = false;
}

ElectricalAppliance.prototype.plugIn = function() {
    console.log(this.name + " is plugged!");
    this.isPlugged = true;
};

ElectricalAppliance.prototype.unplug = function() {
    console.log(this.name + " is unplugged!");
    this.isPlugged = false;
};

function Lantern(name, brand, power, type) {
    this.name = name;
    this.brand = brand;
    this.power = power;
    this.type = type;
    this.isPlugged = false;
}

Lantern.prototype = new ElectricalAppliance();

function Notebook(name, brand, power, type, functionality) {
    this.name = name;
    this.brand = brand;
    this.power = power;
    this.type = type;
    this.functionality = functionality;
    this.isPlugged = true;
}

Notebook.prototype = new ElectricalAppliance();

const tableLantern = new Lantern("Table lantern", "Xiaomi", 5, "LED");

const homePC = new Notebook("Table PC", "Intel", 120, "stationary", "for work");

tableLantern.plugIn();

homePC.unplug();

console.log(homePC)
console.log(tableLamp)