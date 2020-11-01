const { app, ipcMain, BrowserWindow } = require("electron");
const path = require("path");
<<<<<<< HEAD
const isDev = require("electron-is-dev");
=======
>>>>>>> b89d77596b476d8d061179488debb9a325304c57
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
<<<<<<< HEAD
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
=======
   * ELECTRON_START_URL을 직접 제공할경우 해당 URL을 로드합니다.
   * 만일 URL을 따로 지정하지 않을경우 (프로덕션빌드) React 앱이
   * 빌드되는 build 폴더의 index.html 파일을 로드합니다.
   * */
  const startUrl =
    process.env.ELECTRON_START_URL ||
    url.format({
      pathname: path.join(__dirname, "../build/index.html"),
      protocol: "file:",
      slashes: true,
    });

  /*
   * startUrl에 배정되는 url을 맨 위에서 생성한 BrowserWindow에서 실행시킵니다.
   * */
  win.loadURL(startUrl);
>>>>>>> b89d77596b476d8d061179488debb9a325304c57
}

app.on("ready", createWindow);
