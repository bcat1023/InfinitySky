function getPostData(url, toSend, async, method) {

  // Create new request
  var xhr = new XMLHttpRequest()

  // Set parameters
  xhr.open('POST', url, async)

  // Add event listener
  xhr.onreadystatechange = function () {

      // Check if finished
      if (xhr.readyState == 4 && xhr.status == 200) {

          // Do something with data
          method(xhr.responseText);
          console.log(xmr.responseText);

      }
  }
}