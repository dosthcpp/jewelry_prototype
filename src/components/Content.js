import React from "react";
import { useState } from "react";
import { connect } from "react-redux";
import { setGuaranteeInfo } from "../actions/index";
import axios from "axios";
import { baseURL, serverURL } from "../api/api";
import { useEffect } from "react";

const Content = ({ userInfo, setGuaranteeInfo }) => {
  const [feedback, setFeedback] = useState("");
  const [name] = useState("Name");
  const [email] = useState("no-reply@atlas.com");
  const kakaojs = window.Kakao;
  useEffect(() => {
    console.log(__dirname);
  });
  const handleChange = (event) => {
    setFeedback(event.target.value);
  };
  const handleSubmit = (event) => {
    const templateId = "template_fj2dn48";
    sendFeedback(templateId, {
      message_html: feedback,
      from_name: name,
      reply_to: email,
    });
    return false;
  };
  const sendFeedback = (templateId, variables) => {
    window.emailjs
      .send("service_ipa5v5f", templateId, variables)
      .then((res) => {
        console.log("Email successfully sent!");
        console.log(res);
      })
      // Handle errors here however you like, or use a React error boundary
      .catch((err) =>
        console.error(
          "Oh well, you failed. Here some thoughts on the error that occured:",
          err
        )
      );
  };
  const sendLink = (link) => {
    kakaojs.Link.createDefaultButton({
      container: ".kakao-link",
      objectType: "feed",
      content: {
        title: "보증서",
        imageUrl: link,
        link: {
          mobileWebUrl: link,
          androidExecParams: "test",
        },
      },
      buttons: [
        {
          title: "웹으로 이동",
          link: {
            mobileWebUrl: link,
          },
        },
      ],
    });
  };

  return (
    <>
      <div
        onClick={() => {
          if (Object.keys(userInfo).length !== 0) {
            const { BrowserWindow } = window.require("electron").remote;
            const register = new BrowserWindow({
              width: 800,
              height: 600,
            });
            register.webContents.on("did-start-navigation", () => {
              let code = `document.getElementsByTagName("pre")[0].innerHTML;`;
              register.webContents.executeJavaScript(code).then((result) => {
                register.close();
                const parsedData = JSON.parse(result);
                setGuaranteeInfo(userInfo.email, parsedData);
                localStorage.setItem(
                  "gInfo",
                  JSON.stringify({ email, ...parsedData })
                );
              });
            });
            register.loadURL(`${serverURL}/writeGuarantee`);
          } else {
            alert("먼저 로그인해주세요");
          }
        }}
      >
        보증서 작성하기
      </div>
      <div
        onClick={() => {
          if (Object.keys(userInfo).length !== 0) {
            if (!localStorage.getItem("gInfo")) {
              alert("먼저 보증서를 작성해주세요.");
            } else {
              const { BrowserWindow } = window.require("electron").remote;
              const guarantee = new BrowserWindow({
                height: window.innerHeight,
                width: window.innerHeight * 0.71,
                webPreferences: {
                  nodeIntegration: true,
                },
              });
              guarantee.webContents.on("did-stop-loading", async () => {
                setTimeout(async () => {
                  const fileURL = await guarantee.webContents
                    .capturePage()
                    .then((image) => image.toDataURL());
                  const os = window.require("os");
                  const fs = window.require("fs");
                  const childProcess = window.require("child_process");
                  const base64Data = fileURL.replace(
                    /^data:image\/png;base64,/,
                    ""
                  );
                  const outFile = `${os.tmpdir()}/out.png`;
                  console.log(outFile);
                  fs.writeFileSync(outFile, base64Data, "base64", (err) => {
                    console.log(err);
                  });
                  const Dialogs = window.require("dialogs");
                  const dialogs = Dialogs();
                  dialogs.confirm("인쇄하시겠습니까?", (ok) => {
                    switch (window.process.platform) {
                      case "darwin":
                      case "linux":
                        childProcess.execSync(`lp ${outFile}`, (e) => {
                          if (e) throw e;
                        });
                        break;
                      case "win32":
                        childProcess.execSync(
                          `ptp ${outFile}`,
                          {
                            windowsHide: true,
                          },
                          (e) => {
                            if (e) throw e;
                          }
                        );
                        break;
                      default:
                        throw new Error("Platform not supported.");
                    }
                  });

                  // fs.unlinkSync(outFile);

                  fetch(fileURL)
                    .then((res) => res.blob())
                    .then((blob) => {
                      const fileData = new FormData();
                      fileData.append("fname", "보증서.png");
                      fileData.append("data", blob);
                      axios({
                        method: "post",
                        url: `${serverURL}/fileupload`,
                        data: fileData,
                        headers: { "Content-Type": "multipart/form-data" },
                      })
                        .then(function (response) {
                          //handle success
                          console.log(response);
                        })
                        .catch(function (response) {
                          //handle error
                          console.log(response);
                        });
                      const blobToFile = (_blob, fileName) => {
                        _blob.lastModifiedDate = new Date();
                        _blob.name = fileName;
                        return _blob;
                      };
                      const file = blobToFile(blob, "kakaoTalk.png");
                      const fileList = [file];
                      kakaojs.Link.uploadImage({
                        file: fileList,
                      }).then((res) => {
                        sendLink(res.infos.original.url);
                      });
                    });
                }, 3000);
              });

              guarantee.loadURL(`${baseURL}/#guarantee`);
            }
          } else {
            alert("먼저 로그인해주세요");
          }
        }}
      >
        보증서 화면 띄우기
      </div>
      <form className="mailing">
        <textarea
          id="mailing"
          name="mailing"
          onChange={handleChange}
          placeholder="메일 보내기"
          required
          value={feedback}
          style={{ width: "100%", height: "150px" }}
        />
        <input
          type="button"
          value="보내기"
          className="btn btn--submit"
          onClick={() => {
            handleSubmit();
            setFeedback("");
          }}
        />
      </form>
      <div className="kakao-link"></div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    guarantee: state.fetch.guaranteeInfo,
    userInfo: state.fetch.userInfo,
  };
};

export default connect(mapStateToProps, {
  setGuaranteeInfo,
})(Content);
