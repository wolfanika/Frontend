
const closebtns = document.getElementById("close");
const form = document.getElementById("myform");
const del = document.getElementById("del");
const card = document.getElementById("center");
const editbtn = document.getElementById("edit");
const editbox = document.getElementById("editbox");
const saveedit = document.getElementById("saveedit");









closebtns.addEventListener("click", function () {
    const form = document.getElementById("myform");
    form.style.display = 'none';
    event.preventDefault();
})

function addq() {
    const form = document.getElementById("myform");
    form.style.display = 'block';
    event.preventDefault();


}














function newElement() {

    var close = document.getElementsByClassName("close");
    var i;
    for (i = 0; i < close.length; i++) {
        close[i].onclick = function () {
            var div = this.parentElement.parentElement;
            div.style.display = "none";
        }
    }



    var edit = document.getElementsByClassName("edit");
    var i;
    for (i = 0; i < edit.length; i++) {
        edit[i].onclick = function () {

            console.log(this.parentElement.parentElement.firstElementChild);
            console.log(this.parentElement.parentElement.firstElementChild.nextElementSibling.nextElementSibling);
            var Q = document.getElementById("Q");
            var A = document.getElementById("A");

            A.value = this.parentElement.parentElement.firstElementChild.nextElementSibling.nextElementSibling.textContent;


            Q.value = this.parentElement.parentElement.firstElementChild.textContent;

            var div = this.parentElement.parentElement;
            div.style.display = "none";


        }
    }




    var tog = document.getElementsByClassName("tog");
    var i;
    for (i = 0; i < tog.length; i++) {
        tog[i].onclick = function () {
            var ashow = document.getElementById("ashow");

            var link = document.getElementById("link");
            console.log(link);




            if (this.nextElementSibling.style.display == "none") {
                this.nextElementSibling.style.display = "block";
            }

            else {
                this.nextElementSibling.style.display = "none";
            }
        }
    }





    const Q = document.getElementById("Q").value;
    const A = document.getElementById("A").value;
    const fbox = document.getElementById("fbox");
    const qcard = document.getElementById("quescard");
    const a = document.getElementById("ashow");





    const btn = document.getElementById("addBtn");
    console.log(Q);




    var div = document.createElement("div");
    div.className += ' card  ';
    div.className += ' col-4 ';
    div.className += '  col-lg-3  ';
    div.className += '  col-md-4  ';
    div.className += '  offset-3 ';
    div.className += '  bg-white  ';
    div.id = "card";
    div.innerHTML =



        '<h4 class="Ques">' + Q + '</h4>\n' +
        '<a href="#" class="tog" onclick="toggle_box()" id="link"> Show/Hide Answer</a>\n' +
        '<h4 class="Ans" id="ashow" style="display: none;">' + A + '</h4>\n' +
        '<div class="">\n' +
        '<button type="" class="btn edit btn-outline-success" id="edit" onclick="edit()">Edit</button>\n' +
        '<input type="text" class="form-control btn-outline-warning edit p-2" style="display: none;" id="editbox">\n' +
        '<button type="" class="btn btn-outline-warning" id="saveedit" onclick="sedit()" style="display: none;">Save Edit</button>\n' +
        '<button type="" class="btn close btn-outline-warning" style="float:right">Delete</button>\n' +
        '</div>\n';

    const newdiv = document.getElementById("center");
    newdiv.appendChild(div);




    var close = document.getElementsByClassName("close");
    var i;
    for (i = 0; i < close.length; i++) {
        close[i].onclick = function () {
            var div = this.parentElement.parentElement;
            div.style.display = "none";
        }
    }



    var edit = document.getElementsByClassName("edit");
    var i;
    for (i = 0; i < edit.length; i++) {
        edit[i].onclick = function () {

            console.log(this.parentElement.parentElement.firstElementChild);
            console.log(this.parentElement.parentElement.firstElementChild.nextElementSibling.nextElementSibling);
            var Q = document.getElementById("Q");
            var A = document.getElementById("A");

            A.value = this.parentElement.parentElement.firstElementChild.nextElementSibling.nextElementSibling.textContent;


            Q.value = this.parentElement.parentElement.firstElementChild.textContent;

            var div = this.parentElement.parentElement;
            div.style.display = "none";


        }
    }


    var tog = document.getElementsByClassName("tog");
    var i;
    for (i = 0; i < tog.length; i++) {
        tog[i].onclick = function () {
            var ashow = document.getElementById("ashow");

            var link = document.getElementById("link");
            console.log(link);




            if (this.nextElementSibling.style.display == "none") {
                this.nextElementSibling.style.display = "block";
            }

            else {
                this.nextElementSibling.style.display = "none";
            }
        }
    }




    event.preventDefault();


}

/*tslint:disabled*/