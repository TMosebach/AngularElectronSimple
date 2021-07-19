const electron = require('electron');
const path = require('path');
const url = require('url');

// Module to control application life.
const app = electron.app

// Module to create native browser window.
const BrowserWindow = electron.BrowserWindow

const args = process.argv.slice(1),
      serve = args.some(val => val === '--serve');

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow;

function createWindow () {
  // Create the browser window.
  mainWindow = new BrowserWindow({
      width: 800, 
      height: 600,
      webPreferences: {
        nodeIntegration: true,
      }
    });

  if (serve) {
    mainWindow.webContents.openDevTools();

      mainWindow.loadURL('http://localhost:4200');

      mainWindow.webContents.openDevTools()
    } else {
      // Path when running electron executable
      const pathIndex = './dist/AngularElectronSimple/index.html';

      mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, pathIndex),
        protocol: 'file:',
        slashes: true
      }));
    }

  // Emitted when the window is closed.
  mainWindow.on('closed', function () {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null
  })
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', function () {
  // Es macht nur ein Fenster sinn, also schließen.
  app.quit();

  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  //if (process.platform !== 'darwin') {
  //  app.quit()
  //}
})

app.on('activate', function () {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow()
  }
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.

const ipcMain = electron.ipcMain;
const Datastore = require('nedb-promises');
const kontoDb = Datastore.create({
  filename: 'db/konten.json', 
  timestampData: true, 
  autoload: true 
});

/**
 * Synchrones Lesen aller Konten
 */
ipcMain.on('findAllKonten', (event, arg) => {
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
ipcMain.on('createKonto', (event, konto) => {
  kontoDb.insert(konto)
  .then( konto => console.log('insert erfolgreich ', konto))
  .catch( err => console.error(err));
});
