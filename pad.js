var add = document.querySelector(".add");
var close = document.getElementById("close");
var modalButton = document.getElementById("modalBtn");
var modalInput = document.getElementById("modalText");
var pad = document.getElementById("pad");
var btn = document.querySelectorAll(".btn");

add.onclick = function () {
  document.querySelector(".modal").style.display = "block";
  document.querySelector(".note").style.filter = "blur(20px)";
};

close.onclick = function () {
  document.querySelector(".modal").style.display = "none";
  document.querySelector(".note").style.filter = "none";
};

modalButton.onclick = function () {
  if (modalInput.value == "") {
    alert("You can't submit empty input");
  } else {
    var text = modalInput.value;
    var setItem = localStorage.setItem("k1", text);
    document.getElementById("pad").innerHTML += `
            <div class="task" id="task">
                <span>${localStorage.getItem("k1")}</span>
                <span class="del"><i class="fa fa-trash"></i></span>
                <input type="checkbox" class="checkbox">
            </div>
        `;

    modalInput.value = "";

    pad.style.overflowY = "scroll";
  }
  //dispaly checkbox when dbclick
  /*var task = document.querySelectorAll(".task");

  for (let k = 0; k < task.length; k++) {
    task[k].ondblclick = function () {
      document.querySelector(".del").style.display = "block";
      document.querySelector(".checkbox").style.display = "block";
    };
  }*/

  var del = document.querySelectorAll(".del");

  for (let k = 0; k < del.length; k++) {
    del[k].onclick = function () {
      var d = this.parentElement;
      d.style.display = "none";
    };
  }

  //edit task
  /*var edit=document.querySelectorAll(".task");

            for(let k=0; k < edit.length; k++){
                edit[k].onclick=function(){
                    document.querySelector(".modal").style.display="block";
                    document.querySelector(".note").style.filter="blur(20px)";
                    modalInput.value= document.
                }
            }*/
};
