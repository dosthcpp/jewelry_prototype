const { app, ipcMain, BrowserWindow } = require("electron");
const path = require("path");
const isDev = require("electron-is-dev");
const url = require("url");

let win;

// ipcMain.handle("show_popup", (e, arg) => {});

function createWindow() {
  /*
   * 넓이 1920에 높이 1080의 FHD 풀스크린 앱을 실행시킵니다.
   * */
  win = new BrowserWindow({
    width: 1920,
    height: 1080,
    webPreferences: {
      nodeIntegration: true,
      enableRemoteModule: true,
    },
  });

  /*
   * startUrl에 배정되는 url을 맨 위에서 생성한 BrowserWindow에서 실행시킵니다.
   * */
  win.loadURL(
    isDev
      ? "http://localhost:3000"
      : process.env.ELECTRON_START_URL ||
          url.format({
            pathname: path.join(__dirname, "/../build/index.html"),
            protocol: "file",
            slashes: true,
          })
  );
  if (isDev) {
    // Open the DevTools.
    //BrowserWindow.addDevToolsExtension('<location to your react chrome extension>');
    win.webContents.openDevTools();
  }
}

app.on("ready", createWindow);
