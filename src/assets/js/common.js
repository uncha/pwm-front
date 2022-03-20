import axios from "axios";
import moment from "moment";
import "moment/locale/ko";

export const changeSubmitDate = ({ year, month, day }) => {
  if (!year || !month || !day) return "";

  if (month < 10) month = "0" + month;
  if (day < 10) day = "0" + day;

  return `${year}${month}${day}`;
}

export const changeDatepickerDate = (date) => {
  // YYYY-MM-DD
  let mnt = moment(date).format("YYYY-MM-DD");
  let d = mnt.split("-");
  return {
    year: Number(d[0]),
    month: Number(d[1]),
    day: Number(d[2]),
  };
}

export const changeSubmitTime = (time) => {
  return time.replace(':', '');
}

export const changeTimePickerTime = (timeNumber) => {
  return `${timeNumber.slice(0,2)}:${timeNumber.slice(2,4)}`;
}

export const displayYmdHis = (y, h) => {
  return y && h ? moment(`${y} ${h}`).format("YYYY-MM-DD HH:mm:ss") : "-";
};

export const zeroFill = (number) => {
  if (number < 10) {
    return `0${number}`;
  } else {
    return `${number}`;
  }
};

export const showOrdinal = (index) => {
  return index % 10 === 1
    ? index + "st"
    : index % 10 === 2
    ? index + "nd"
    : index % 10 === 3
    ? index + "rd"
    : index + "th";
};

export const handleDownloadFile = (afSeq, filePath) => {
  console.log("item", afSeq);
  axios
    .get("/api/st/attach-file/download/" + afSeq, {
      responseType: "blob",
    })
    .then((res) => {
      console.log(res);
      const url = window.URL.createObjectURL(new Blob([res.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", filePath);
      document.body.appendChild(link);
      link.click();
    });
};
