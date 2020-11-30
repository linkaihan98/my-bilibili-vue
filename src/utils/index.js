
// 格式化视频播放量
export const formatNum = (n) => {
  if (parseInt(n) < 0 || n == null || n == undefined) {
    return '--';
  }
  if (String(n).indexOf('.') !== -1 || String(n).indexOf('-') !== -1) {
    return n;
  }
  if (parseInt(n) === 0) {
    return 0;
  }
  const _WAN = '万';
  const _YI = '亿';
  n = parseInt(n);
  if (n >= 10000 && n < 100000000) {
    return (n / 10000).toFixed(1) + _WAN;
  } else if (n >= 100000000) {
    return (n / 100000000).toFixed(1) + _YI;
  } else {
    return n;
  }
} 

// 格式化时间 XX:XX:XX
export const formatDuration = (n) => {
  if (String(n).indexOf(':') !== -1) {
    return n;
  }
  let hour = null;
  let min = null;
  let sec = null;
  let secStr = null;
  let minStr = null;
  //n = parseInt(n);
  if (n < 60) {
    secStr = n < 10 ? `0${n}` : n;
    return `00:${secStr}`;
  } else if (n < 3600) {
    sec = parseInt(n % 60);
    min = parseInt(n / 60);
    secStr = sec < 10 ? `0${sec}` : sec;
    minStr = min < 10 ? `0${min}` : min;
    return `${minStr}:${secStr}`;
  } else {
    sec = parseInt(n % 60);
    min = parseInt((n % 3600) / 60);
    hour = parseInt(n / 3600);
    secStr = sec < 10 ? `0${sec}` : sec;
    minStr = min < 10 ? `0${min}` : min;
    return `${hour}:${minStr}:${secStr}`;
  }
}

