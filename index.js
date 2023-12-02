function countdown(start, callback) {
  setTimeout(function () {
    if (start > 0) {
      console.log(start);
      document.querySelector("#look").innerHTML = ""
      let no = document.createElement("div")
      no.setAttribute("class","head")
      no.innerHTML = start
      document.querySelector("#look").append(no)




    //   document.querySelector("#look").innerHTML = "";
    //   let dis = (document.querySelector("#look").value = start);
    //   document.querySelector("#look").append(dis);
      countdown(start - 1, callback);
    } else {
      callback();
    }
  }, 1000);
}


function displayIndependece() {
  console.log("HappY Independece Day!");
  document.querySelector("#look").innerHTML = ""
  let tx = document.createElement("h1")
  tx.setAttribute("class","txt")
  tx.innerHTML = "HappY Independence Day!"
  // document.querySelector("#look").innerHTML = ""
//   let dis = document.querySelector("#look").innerHTML ="HappY Independence Day!";
  document.querySelector("#look").append(tx)
}

countdown(10, displayIndependece);
