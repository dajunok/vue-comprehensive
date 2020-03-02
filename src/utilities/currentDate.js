/* 日期转换函数：获取当前时间，并转化为yyyy-MM-dd hh-mm-ss
    1、函数调用方法：
        let time1 = new currentDate().Format("yyyy-MM-dd");  //=> 2020-02-18
        let time2 = new currentDate().Format("yyyy-MM-dd HH:mm:ss");  //=> 2020-02-18 16:57:28
        console.log(`当前时间：${time1}   ${time2}`);
*/
Date.prototype.Format = function(fmt) {
  var o = {
    'M+': this.getMonth() + 1, // 月份 2020-02-18 16:57:28
    "d+": this.getDate(), // 日
    "H+": this.getHours(), // 小时
    "m+": this.getMinutes(), // 分
    "s+": this.getSeconds(), // 秒
    "q+": Math.floor((this.getMonth() + 3) / 3), // 季度
    S: this.getMilliseconds() // 毫秒
  }
  if (/(y+)/.test(fmt)) {
  { fmt = fmt.replace(
    RegExp.$1,
    (this.getFullYear() + '').substr(4 - RegExp.$1.length)
  );
  }
  for (var k in o) {
    if (new RegExp("(" + k + ")").test(fmt)) {
    { fmt = fmt.replace(
      RegExp.$1,
      RegExp.$1.length == 1 ? o[k] : ('00' + o[k]).substr(('' + o[k]).length)
    );
    }
  }
  return fmt
};
// const currentDate=Date;
export default function () {
  return new Date().Format('yyyy-MM-dd HH:mm:ss');
}