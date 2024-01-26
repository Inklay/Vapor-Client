const { app, BrowserWindow, screen: electronScreen } = require('electron')
const ipc = require('electron').ipcMain
const path = require('path')

let mainWindow

const createMainWindow = () => {
  mainWindow = new BrowserWindow({
    width: electronScreen.getPrimaryDisplay().workArea.width,
    height: electronScreen.getPrimaryDisplay().workArea.height,
    show: false,
    frame: false,
    backgroundColor: 'white',
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: false,
      preload: path.join(__dirname, 'preload.js')
    }
  })
  
  const startURL = 'http://localhost:3000/'

  mainWindow.loadURL(startURL)
  mainWindow.once('ready-to-show', () => mainWindow.show());

  mainWindow.on('closed', () => {
    mainWindow = null
  })

  mainWindow.webContents.on('new-window', (event, url) => {
    event.preventDefault()
    mainWindow.loadURL(url)
  })
}

app.whenReady().then(() => {
  createMainWindow()

  ipc.on('minimizeApp', () => {
    mainWindow?.minimize();
  });

  ipc.on('maximizeApp', () => {
    if (mainWindow?.isMaximized()) {
      mainWindow?.unmaximize();
    } else {
      mainWindow?.maximize();
    }
  });

  ipc.on('closeApp', () => {
    mainWindow?.close();
  });

  app.on('activate', () => {
    if (!BrowserWindow.getAllWindows().length) {
      createMainWindow()
    }
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
