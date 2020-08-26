export function debounce(fn, wait = 100) { //防抖函数
  let timer = null;
  return function () {
    if (timer !== null) {
      clearTimeout(timer);
    }
    timer = setTimeout(fn, wait);
  }
}
