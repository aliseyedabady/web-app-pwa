import moment from "jalali-moment";
import packageJson from "../../package.json";
export const timeSince = date => {
  if (date) {
    let data = new Date(date);

    let seconds = Math.floor((new Date() - data) / 1000);

    let interval = seconds / 31536000;

    if (interval > 1) {
      return Math.floor(interval) + " سال پیش";
    }
    interval = seconds / 2592000;
    if (interval > 1) {
      return Math.floor(interval) + " ماه پیش";
    }
    interval = seconds / 86400;
    if (interval > 1) {
      return Math.floor(interval) + " روز پیش";
    }
    interval = seconds / 3600;
    if (interval > 1) {
      return Math.floor(interval) + " ساعت پیش";
    }
    interval = seconds / 60;
    if (interval > 1) {
      return Math.floor(interval) + " دقیقه پیش";
    }
    return "اخیرا";
  } else {
    return "none";
  }
};
export const clockRender = time => {
  if (!time) {
    return "null";
  }
  return moment(time).format("hh:mm");
};
export const fullTime = time => {
  return time ? `${timeSince(time)}، ساعت ${clockRender(time)}` : "null";
};
export const cutText = (txt, length = 20) => {
  if (txt) {
    return `${txt.slice(0, length)} ...`;
  }
};
export const humanFileSize = (bytes, si = false, dp = 1) => {
  const thresh = si ? 1000 : 1024;

  if (Math.abs(bytes) < thresh) {
    return bytes + " B";
  }

  const units = si
    ? ["kB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"]
    : ["KiB", "MiB", "GiB", "TiB", "PiB", "EiB", "ZiB", "YiB"];
  let u = -1;
  const r = 10 ** dp;

  do {
    bytes /= thresh;
    ++u;
  } while (
    Math.round(Math.abs(bytes) * r) / r >= thresh &&
    u < units.length - 1
  );

  return bytes.toFixed(dp) + " " + units[u];
};
export const ConvertDate = date => {
  if (date) {
    return moment.from(date, "fa", "YYYY/MM/DD").format("YYYY/MM/DD");
  } else {
    return null;
  }
};
export const sortSettings = (arr = []) => {
  let obj = {};
  arr.map(item => {
    obj = { ...obj, [item.title]: item.value };
  });
  return obj;
};
export const ToDateJalali = date => {
  if (date) {
    return moment(date).locale("fa").format("YYYY/MM/DD");
  } else {
    return moment().locale("fa").format("YYYY/MM/DD");
  }
};
export const ToDate = date => {
  if (date) {
    return moment(date).format("YYYY/MM/DD");
  } else {
    return moment().locale("fa").format("YYYY/MM/DD");
  }
};
export const ToTimeJalali = date => {
  if (date) {
    return moment(date).locale("fa").format(" HH:mm:ss  YYYY/MM/DD");
  } else {
    return null;
  }
};
export const convertKeys = (arr = [], order = {}) => {
  let keysOrder = Object.keys(order);
  const renderObj = obj => {
    return keysOrder.reduce((prev, currentValue) => {
      return {
        ...prev,
        [order[currentValue]]: obj[currentValue],
      };
    }, {});
  };
  return arr.map(element => renderObj(element));
};
export const ToDateDayMonthJalali = date => {
  if (date) {
    return moment(date).locale("fa").format("MM/DD");
  } else {
    return null;
  }
};
export const caching = () => {
  let version = localStorage.getItem("version");
  if (version != packageJson.version) {
    if ("caches" in window) {
      caches.keys().then(names => {
        names.forEach(name => {
          caches.delete(name);
        });
      });
      window.location.reload(true);
    }

    localStorage.clear();
    localStorage.setItem("version", packageJson.version);
  }
};
export const now = date => {
  let m = "";
  if (date) {
    m = moment(date);
  } else {
    m = moment();
  }
  m.locale("fa");
  return `${m.format("DD")} ${m.format("MMM")} ${m.format("YYYY")}`;
};
export const nowEn = () => {
  const m = moment();
  if (window.innerWidth < 720) {
    return `${m.format("DD")}
  / ${m.format("MMM")} /
  ${m.format("YYYY")}`;
  } else {
    return `${m.format("dddd")}، 
  ${m.format("DD")}
  / ${m.format("MMM")} /
  ${m.format("YYYY")}`;
  }
};
export const p2e = s => s.replace(/[۰-۹]/g, d => "۰۱۲۳۴۵۶۷۸۹".indexOf(d));

export const addMonth = (month = 1) => {
  return moment().locale("fa").add(month, "month").format("YYYY/MM/DD");
};
export const renderPrice = (x = "", d = "،") => {
  return `${x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, d)} ریال`;
};

export const cutWords = (text, length = 179, dot = false) => {
  var trimmedString = text.substr(0, length);
  return `${trimmedString.substr(
    0,
    Math.min(trimmedString.length, trimmedString.lastIndexOf(" "))
  )} ${dot && "..."}`;
};
export const renderStatus = type => {
  switch (type) {
    case "wait_to_pay":
      return {
        label: "منتظر پرداخت",
        status: "wait",
      };
    case "success":
      return {
        status: "success",
        label: "موفق",
      };
    case "error":
      return {
        status: "error",
        label: "ناموفق",
      };
    case "abandoned":
      return {
        status: "wait",
        label: "رها شده",
      };
    case "receiving_info":
      return {
        label: "دریافت اطلاعات",
      };
    case "review_and_issue":
      return {
        label: "بررسی و صدور",
      };
    case "ready_to_send":
      return {
        label: "آماده ارسال",
      };
    case "posted":
      return {
        label: "ارسال شده",
      };
    case "active":
      return {
        label: "فعال",
      };
    case "inactive":
      return {
        label: "غیر فعال",
      };

    default:
      break;
  }
};
export const createQuery = (obj, url) => {
  if (obj && Object.keys(obj).length > 0) {
    return `${url}?${new URLSearchParams(obj).toString()}`;
  }
  return url;
};

export const concatFullName = ({ first_name = "", last_name = "" }) => {
  return `${first_name} ${last_name}`;
};
export const checkMobile = mobile => {
  if (mobile.length == 11) {
    return true;
  }
  if (!mobile.match(/^([0|\+[0-9]{1,5})?([7-9][0-9]{9})$/i)) {
    return false;
  }
  return true;
};
export const isInWeek = time => {
  return moment().locale("fa").diff(moment(time).locale("fa"), "days") < 8;
};
export const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
