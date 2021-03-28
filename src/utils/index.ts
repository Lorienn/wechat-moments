export const getTimeGap = (prevTime) => {
  const ms = new Date().getTime() - prevTime.getTime()
  const ss = 1000
  const mi = ss * 60
  const hh = mi * 60
  const dd = hh * 24

  const day = ms / dd | 0
  const hour = (ms - day * dd) / hh | 0
  const minute = (ms - day * dd - hour * hh) / mi | 0

  if (day > 0) {
    return day + '天前'
  } else if (hour > 0) {
    return hour + '小时前'
  } else if (minute > 0) {
    return minute + '分钟前'
  } else {
    return '刚刚'
  }
}