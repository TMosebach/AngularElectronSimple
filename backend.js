const Datastore = require('nedb-promises');
const db = {
  kontoDb: Datastore.create({
              filename: 'db/konten.json', 
              timestampData: true, 
              autoload: true 
          }),
  buchenDb: Datastore.create({
      filename: 'db/buchungen.json', 
      timestampData: true, 
      autoload: true 
  })
};
let kontorahmen;

module.exports = function(ipcMain) {
  this.ipcMain = ipcMain;

 /**
  * Synchrones Lesen aller Konten
  */
  this.ipcMain.on('findAllKonten', (event, arg) => {
    if (! kontorahmen) {
      db.buchenDb.find({})
      .then( buchungen => {
        calculateKontorahmen(buchungen);

        console.log('Created Kontorahmen', kontorahmen)
        event.sender.send('foundKonten', kontorahmen);
      })
      .catch( (err) => console.error(err));
    } else {
      console.log('Cached Kontorahmen', kontorahmen)
      event.sender.send('foundKonten', kontorahmen);
    }
  });

  function calculateKontorahmen(buchungen) {
    kontorahmen = [];

    buchungen.forEach( buchung => {
      buchung.umsaetze.forEach( umsatz => {

        console.log('Umsatz', umsatz);
        let konto = umsatz.konto;

        const gefunden = getKonto(konto);
        if (gefunden) {
          gefunden.saldo = gefunden.saldo?gefunden.saldo:0 + umsatz.betrag;
        } else {
          kontorahmen.push({
            name: konto,
            saldo: umsatz.betrag
          });
        }
      })
    });
  }

  function getKonto(konto) {
    return kontorahmen.find( k => k.name === konto);
  }
   
 /**
  * Asynchrones Schreiben eines Kontos
  */
this.ipcMain.on('createKonto', (event, konto) => {
  db.kontoDb.insert(konto)
  .then( konto => console.log('insert erfolgreich ', konto))
  .catch( err => console.error(err));
});

 /**
  * Asynchrones Schreiben einer Buchung
  */
  this.ipcMain.on('buche', (event, buchung) => {
    db.buchenDb.insert(buchung)
    .then( b => {
      console.log('buchen erfolgreich ', b);
    })
    .catch( err => console.error(err));
  });

  return this;
};