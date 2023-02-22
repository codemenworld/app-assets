var VersionInfo = {
  version: '1.0.1',
  androidUrl: 'https://myfunnyvideo.com/funnyVideo.apk',
  releaseTime: 1677060168807,
}

var app = new Vue({
  el: '#app',
  data: {
    version: VersionInfo.version,
    androidUrl: VersionInfo.androidUrl,
    releaseTime: VersionInfo.releaseTime,
    client: judgeClient(),
  },
  computed: {
    timeAge() {
      return timeago(this.releaseTime)
    }
  },
  beforeCreate () {
    document.title = "Funny Video  " + VersionInfo.version
  }
})


function judgeClient() {
  let client = '';
  if (/MicroMessenger/i.test(navigator.userAgent)) { 
    client = 'WX';
  } else if (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)) {  
    client = 'iOS';
  } else if (/(Android)/i.test(navigator.userAgent)) { 
    client = 'Android';
  } else {
    client = 'PC';
  }

  return client;
}


function timeago(dateTimeStamp){  
    var minute = 1000 * 60;     
    var hour = minute * 60;
    var day = hour * 24;
    var week = day * 7;
    var halfamonth = day * 15;
    var month = day * 30;
    var now = new Date().getTime(); 
    console.log(now)
    var diffValue = now - dateTimeStamp;

    if(diffValue < 0){
        return;
    }
    var minC = diffValue/minute; 
    var hourC = diffValue/hour;
    var dayC = diffValue/day;
    var weekC = diffValue/week;
    var monthC = diffValue/month;
    if(monthC >= 1 && monthC <= 3){
        result = " " + parseInt(monthC) + "month"
    }else if(weekC >= 1 && weekC <= 3){
        result = " " + parseInt(weekC) + "weeks"
    }else if(dayC >= 1 && dayC <= 6){
        result = " " + parseInt(dayC) + "days"
    }else if(hourC >= 1 && hourC <= 23){
        result = " " + parseInt(hourC) + "hours"
    }else if(minC >= 1 && minC <= 59){
        result =" " + parseInt(minC) + "minutes"
    }else if(diffValue >= 0 && diffValue <= minute){
        result = "current"
    }else {
        var datetime = new Date();
        datetime.setTime(dateTimeStamp);
        var Nyear = datetime.getFullYear();
        var Nmonth = datetime.getMonth() + 1 < 10 ? "0" + (datetime.getMonth() + 1) : datetime.getMonth() + 1;
        var Ndate = datetime.getDate() < 10 ? "0" + datetime.getDate() : datetime.getDate();
        var Nhour = datetime.getHours() < 10 ? "0" + datetime.getHours() : datetime.getHours();
        var Nminute = datetime.getMinutes() < 10 ? "0" + datetime.getMinutes() : datetime.getMinutes();
        var Nsecond = datetime.getSeconds() < 10 ? "0" + datetime.getSeconds() : datetime.getSeconds();
        result = Nyear + "-" + Nmonth + "-" + Ndate
    }
    return result;
}
