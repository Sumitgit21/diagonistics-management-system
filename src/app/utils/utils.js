import appConfig from "../../config";
import React from "react";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import {
  isMobile,
  mobileVendor,
  osName,
  osVersion,
  fullBrowserVersion,
  browserName,
  mobileModel,
} from "react-device-detect";
import dayjs from "dayjs";
import packageJson from "../../../package.json";
// import ls from 'localstorage-slim';
const appVersion = packageJson.version;
const prodMode = appConfig.is_production_build;
import Compressor from "compressorjs";

// export const setLocalStorage = (key, value) => {
//   localStorage.setItem(
//     `${prodMode ? "@ClirnetStore_prod" : "@ClirnetStore_dev"}_${key}`,
//     typeof value == "object" ? JSON.stringify(value) : value
//   );
// };
// // export const isApp = () => (getLocalStorage('from_app', false) ? true : false);
// export const removeLocalStorage = (key) => {
//   localStorage.removeItem(
//     `${prodMode ? "@ClirnetStore_prod" : "@ClirnetStore_dev"}_${key}`
//   );
// };
// export const getLocalStorage = (key, defaultValue) => {
//   let local_data = localStorage.getItem(
//     `${prodMode ? "@ClirnetStore_prod" : "@ClirnetStore_dev"}_${key}`
//   );
//   if (local_data) {
//     try {
//       let parsed_data = JSON.parse(local_data);
//       if (parsed_data) {
//         return parsed_data;
//       }
//     } catch (error) {
//       // console.log('===>>>error', error);
//       return local_data;
//     }
//   } else {
//     return defaultValue;
//   }
// };

// export const setSessionStorage = (key, value) => {
//   sessionStorage.setItem(
//     `${prodMode ? "@ClirnetStore_prod" : "@ClirnetStore_dev"}_${key}`,
//     value
//   );
// };
// export const removeSessionStorage = (key) => {
//   sessionStorage.removeItem(
//     `${prodMode ? "@ClirnetStore_prod" : "@ClirnetStore_dev"}_${key}`
//   );
// };
// export const getSessionStorage = (key, defaultValue) => {
//   let local_data = sessionStorage.getItem(
//     `${prodMode ? "@ClirnetStore_prod" : "@ClirnetStore_dev"}_${key}`
//   );
//   if (local_data) {
//     return local_data;
//   } else {
//     return defaultValue;
//   }
// };

// export const log = (msg = "clirnet:log:", value = "noop") => {
//   console.log(`====>>>${msg}`, value);
// };
// export const specialityPopOver = (
//   val,
//   customClass = "colorBlue wh_20 cursorPointer ms-2"
// ) => {
//   // let speciality_array = val ? val?.split?.(',') : [];
//   // if (speciality_array?.length > 0) {
//   //   speciality_array.shift();
//   // }

//   return (
//     <>
//       {val && val?.split(",").length > 1 ? (
//         <OverlayTrigger
//           placement="right"
//           rootClose={true}
//           trigger={isMobile ? "click" : "hover"}
//           // show={false}
//           overlay={
//             <Tooltip id={`tooltip-right`} className="font_12">
//               {val
//                 ?.split(",")
//                 ?.filter((_, _i) => _i != 0)
//                 ?.join(", ")}
//             </Tooltip>
//           }
//         >
//           <span>
//             <svg className={customClass} stroke-width="0" viewBox="0 0 16 16">
//               <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"></path>
//             </svg>
//           </span>
//         </OverlayTrigger>
//       ) : null}
//     </>
//   );
// };
// export class Countdown {
//   constructor(options) {
//     var timer,
//       instance = this,
//       seconds = options.seconds || 10,
//       updateStatus = options.onUpdateStatus || function () {},
//       counterEnd = options.onCounterEnd || function () {};

//     function decrementCounter() {
//       updateStatus(seconds);
//       if (seconds === 0) {
//         counterEnd();
//         instance.stop();
//       }
//       seconds--;
//     }

//     this.start = function () {
//       clearInterval(timer);
//       timer = 0;
//       seconds = options.seconds;
//       timer = setInterval(decrementCounter, 1000);
//     };

//     this.stop = function () {
//       clearInterval(timer);
//     };
//   }
// }
// export const getUtmSource = () => {
//   let local_data = localStorage.getItem(
//     `${prodMode ? "@ClirnetStore_prod" : "@ClirnetStore_dev"}_utm_source`
//   );
//   if (local_data) {
//     return local_data;
//   } else {
//     return "";
//   }
// };
// export const generateUtmExt = () => {
//   return getLocalStorage("utm_source", "")
//     ? `&utm_source=${getLocalStorage("utm_source", "")}`
//     : "";
// };
// export const getAgent = () => {
//   var OSName = "Unknown OS";
//   if (navigator.appVersion.indexOf("Win") != -1) OSName = "Windows";
//   if (navigator.appVersion.indexOf("Mac") != -1) OSName = "MacOS";
//   if (navigator.appVersion.indexOf("IOS") != -1) OSName = "IOS";
//   if (navigator.appVersion.indexOf("X11") != -1) OSName = "UNIX";
//   if (navigator.appVersion.indexOf("Linux") != -1) OSName = "Linux";
//   if (navigator.appVersion.indexOf("Android") != -1) OSName = "Android";
//   if (
//     /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
//       navigator.userAgent
//     )
//   ) {
//     var device_type = "Mobile";
//   } else {
//     var device_type = "PC";
//   }
//   return OSName;
// };

// // export const redirectTo = (type,id) => {
// //     return navigate(`/${type}/${id}`)
// // }
// const getFormatedData = (val = 0) => {
//   if (val > 0) {
//     return val.toString().padStart(2, 0);
//   } else {
//     return val.toString().padStart(2, 0);
//   }
// };
// export const secondsToHms = (d) => {
//   d = Number(d);
//   var h = Math.floor(d / 3600);
//   var m = Math.floor((d % 3600) / 60);
//   var s = Math.floor((d % 3600) % 60);

//   var hDisplay = h > 0 ? getFormatedData(h) + ":" : "";
//   var mDisplay = m > 0 ? getFormatedData(m) + ":" : "";
//   var sDisplay = s > 0 ? getFormatedData(s) : "";
//   return hDisplay + mDisplay + sDisplay;
// };
// export const generateTitle = (title) => {
//   return (window.document.title = `CLIRNET - ${title}`);
// };

// export const timeDifference = (from) => {
//   let now = dayjs(new Date()); //todays date
//   let end = dayjs(from); // another date
//   let seconds = now.diff(end, "s");

//   return seconds;
// };

// export const openNewTab = (url, cb) => {
//   let win = window.open(url, "_blank");
//   if (win) {
//     win.location;
//   } else {
//     cb ? cb() : alert("Please allow popups for this website");
//   }
// };

// export const getCurrentTime = (_format = "YYYY-MM-DD HH:mm:ss") => {
//   return dayjs(new Date()).format(_format);
// };

// export const downloadFromUrl = (
//   remote_url = "",
//   file_name = "clirnet_file"
// ) => {
//   fetch(remote_url, {
//     headers: {
//       "Access-Control-Allow-Origin": "*",
//     },
//   })
//     .then((response) => {
//       response
//         .blob()
//         .then((blob) => {
//           let url = window.URL.createObjectURL(blob);
//           let a = document.createElement("a");
//           a.href = url;
//           a.download = file_name;
//           a.click();
//         })
//         .catch((error) => {
//           console.log("===>>ERROR WHILE FETCHING", error);
//         });
//     })
//     .catch((error) => {
//       console.log("===>>ERROR WHILE FETCHING", error);
//     });
// };

// export const isFileAllowed = (file = null, sizeInMb = 2) => {
//   if (file) {
//     console.warn("File size", file?.size / 1024 + "kb");
//     if (file?.size / 1024 > sizeInMb * 1024) {
//       return false;
//     } else return true;
//   }
// };

// export const handleCompressedUpload = (image = null, callback) => {
//   if (image) {
//     new Compressor(image, {
//       quality: 0.6, // 0.6 can also be used, but its not recommended to go below.
//       success: (compressedResult) => {
//         console.log("COMPRESSED", compressedResult);
//         // compressedResult has the compressed file.
//         // Use the compressed file to upload the images to your server.
//         callback(compressedResult);
//       },
//       error(err) {
//         console.log(err.message);
//       },
//     });
//   }
// };
// export const getPollQuestionCount = (data) => {
//   if (data?.json_data) {
//     var parsedData = JSON.parse(unescape(data.json_data));
//     let qArray = Object.keys(parsedData?.surveys).map((k) => {
//       return parsedData.surveys[k];
//     });
//     return qArray.length;
//   } else {
//     return false;
//   }
// };
// export const getLimitedText = (text, limit) => {
//   if (text?.length > limit) {
//     return text.replace(/&\w+;\s*/g, "").substring(0, limit) + "...";
//   } else {
//     return text.replace(/&\w+;\s*/g, "");
//   }
// };
// export const getClientDeviceDetails = (mobile_number = "NOT_FOUND") => {
//   return {
//     platform: osName ?? "NOT_FOUND" + " " + osVersion ?? "NOT_FOUND",
//     version: appVersion || "NOT_FOUND",
//     browser: browserName || "NOT_FOUND",
//     browser_version: fullBrowserVersion || "NOT_FOUND",
//     mobilenumber: mobile_number,
//     mobilemodel: isMobile ? mobileVendor + " " + mobileModel : "NOT_MOBILE",
//     user_master_id: getLocalStorage("user", false)
//       ? getLocalStorage("user", {})?.user_master_id
//       : 0,
//   };
// };
// export const deleteFromArray = (elem, array) => {
//   const index = array.indexOf(elem);
//   if (index > -1) {
//     array.splice(index, 1); // 2nd parameter means remove one item only
//   }

//   return array;
// };
// export const isApp = () => (getLocalStorage("from_app", false) ? true : false);
// export const calculateMultiArrayLength = (array) => {
//   let arrayLength = 0;
//   if (array && array?.length > 0) {
//     array.forEach((_it) => {
//       arrayLength += _it?.length;
//     });
//     return arrayLength;
//   } else {
//     return arrayLength;
//   }
// };
// //'https://appcdn.clirnet.com/common/assets/default_doctor_image.svg'
// export const DEMO_USER_PICTURE =
//   "https://appcdn.clirnet.com/common/assets/default_doctor_image.svg";
// export const CLINICAL_DEMO =
//   "https://firebasestorage.googleapis.com/v0/b/clirnetapp.appspot.com/o/services%2FClinical%20Video.jpg?alt=media&token=543c23a4-c767-45fe-976c-aebd09ce703f";
// export const SESSION_DEMO =
//   "https://previews.123rf.com/images/varijanta/varijanta1604/varijanta160400086/55848266-modern-thin-line-design-concept-for-healthcare-website-banner-vector-illustration-concept-for-health.jpg";
// export const MEDWIKI_DEMO =
//   "https://storage.googleapis.com/medwiki/35_server/test/thumbnail/52a6a0115b495c0f63e8b9ef1cb60267.jpg";
// export const QUIZ_DEMO =
//   "https://firebasestorage.googleapis.com/v0/b/clirnetapp.appspot.com/o/services%2FQuizzes.jpg?alt=media&token=a8846fe3-bfc5-4789-b0f9-a1e0078bb88e";

// export const placeDemoUserPicture = (e) => {
//   e.target.src =
//     "https://appcdn.clirnet.com/common/assets/default_doctor_image.svg";
// };
// export const parseJson = (str) => {
//   try {
//     let parsed_data = JSON.parse(str);
//     return parsed_data;
//   } catch (error) {
//     return false;
//   }
// };
// export const MEDWIKI_NAME = (
//   <>
//     MedWiki<sup>&reg;</sup>
//   </>
// );
