// let newPassenger;
// let distance;

// Spaceship objektum készítése

const spaceShip = {
  // property-k
  fuel: 400,
  passengers: ['John', 'Steve', 'Sam', 'Danielle'],
  shields: true,
  speedometer: 0,

  // Metódusok:
  // 1. Utasok listája:
  listPassengers: function () {
    for (let i = 0; i < this.passengers.lenght; i++) {
      console.log('Passenger:' + this.passengers[i]);
    }
  },
  // 2. Új utas
  addPassenger: function (newPassenger) {
    this.passengers.push(newPassenger);
    console.log(newPassenger + ' was added to the ship');
  },
  // 3. Travel metódus, distance paraméterrel:
  travel: function (distance) {
    // kiírjuk, hogy mennyi a distance értéke
    console.log('trying to travel: ' + distance);
    // ha a fuel = 0
    if (this.fuel === 0) {
      // kírjuk, hogy nincs tovább
      console.log('can not go further, tank is empty');
    }
    // ha nem 0
    else {
      this.fuel = this.fuel - (distance / 2);
      // ha a fuel <0
      if (this.fuel < 0) {
        // kiszámítjuk mennyit utazhat még az űrhajó
        distance = distance - (this.fuel * - 2);
        //  can only travel
        console.log('can only travel:' + distance);
        // 0-zzuk a fuel értékét
        this.fuel = 0;
      }
      // speedometerhez hozzáadjuk a távolságot
      this.speedometer = this.speedometer + distance;
      if (this.fuel < 30 && this.shields === true) {
        this.shields = false;
        // lezárjuk a pajzsokat ....
        console.log('fuel is low, turning of shilelds...');
      }
      // km állás és üzemanyag mennyiség kiírása
      console.log('the Spaceship is at:' + this.speedometer);
      console.log('the spaceship has:' + this.fuel + 'fuel');
    }
  }
}

spaceShip.listPassengers();
spaceShip.addPassenger('Lindsay');
spaceShip.listPassengers();
spaceShip.travel(750);
spaceShip.travel(200);
spaceShip.travel(100);