function timeDifference(current, previous) {

  var msPerMinute = 60 * 1000;
  var msPerHour = msPerMinute * 60;
  var msPerDay = msPerHour * 24;
  var msPerMonth = msPerDay * 30;
  var msPerYear = msPerDay * 365;

  var elapsed = current - previous;

  if (elapsed < msPerMinute) {
    if(Math.round(elapsed/1000) ===1) return '1 second ago' 
       return Math.round(elapsed/1000) + ' seconds ago';   
  }

  else if (elapsed < msPerHour) {
    if(Math.round(elapsed/msPerMinute) ===1) return '1 minute ago' 
       return Math.round(elapsed/msPerMinute) + ' minutes ago';   
  }

  else if (elapsed < msPerDay ) {
    if(Math.round(elapsed/msPerHour) ===1) return '1 hour ago' 
       return Math.round(elapsed/msPerHour ) + ' hours ago';   
  }

  else if (elapsed < msPerMonth) {
    if(Math.round(elapsed/msPerDay) ===1) return '1 day ago' 
      return   Math.round(elapsed/msPerDay) + ' days ago';   
  }

  else if (elapsed < msPerYear) {
    if(Math.round(elapsed/msPerMonth) ===1) return '1 month ago'
      return   Math.round(elapsed/msPerMonth) + ' months ago';   
  }

  else {
    if(Math.round(elapsed/msPerYear) ===1) return '1 year ago'
      return  Math.round(elapsed/msPerYear ) + ' years ago';   
  }
}

  export default timeDifference;