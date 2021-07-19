const Datastore = require('nedb-promises');
const kontoDb = Datastore.create({
  filename: 'db/konten.json', 
  timestampData: true, 
  autoload: true 
});

module.exports = function(ipcMain) {
    this.ipcMain = ipcMain;

   /**
    * Synchrones Lesen aller Konten
    */
   this.ipcMain.on('findAllKonten', (event, arg) => {
     kontoDb.find({})
     .then( konten => {
       console.log('Konten gefunden', konten);
       event.returnValue = konten;
     })
     .catch( (err) => console.error(err));
   });
   
   /**
    * Asynchrones Schreiben eines Kontos
    */
   this.ipcMain.on('createKonto', (event, konto) => {
     kontoDb.insert(konto)
     .then( konto => console.log('insert erfolgreich ', konto))
     .catch( err => console.error(err));
   });
    return this;
};