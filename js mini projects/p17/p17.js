



const r1 = document.getElementById("r1");
const r2 = document.getElementById("r2");
const r3 = document.getElementById("r3");
const b = document.getElementById("b").value;
const e1 = document.getElementById("e1").value;
const e2 = document.getElementById("e2").value;
const expbtn = document.getElementById("expbtn");
const budbtn = document.getElementById("budbtn");


function calc() {
    const budbtn = document.getElementById("budbtn");
    const r1 = document.getElementById("r1");
    var r3 = document.getElementById("r3");


    const b = document.getElementById("b").value;

    r1.innerHTML = b;



    var x = parseInt(r3.innerHTML);
    r3.innerHTML = x + parseInt(b);

    r3.style.color = "green";


    console.log("hjewfbjW");
    event.preventDefault();
    if (b < 1) {
        swal({
            title: 'Budget Amount Invalid.   Try Again?',

            confirmButtonColor: '#0A717D',
            confirmButtonText: 'ok',
        });
    };


};

function addexp() {
    // const e1 = document.getElementById("e1").value;
    // const e2 = document.getElementById("e2").value;
    // const l1 = document.getElementById("l1");
    // const l2 = document.getElementById("l2");

    // l1.innerHTML = e1;
    // l2.innerHTML = e2;


    var close = document.getElementsByClassName("close");
    var i;
    for (i = 0; i < close.length; i++) {
        close[i].onclick = function () {
            var div = this.parentElement;
            div.style.display = "none";
        }
    }



    var edit = document.getElementsByClassName("edit");
    var i;
    for (i = 0; i < edit.length; i++) {
        edit[i].onclick = function () {

            console.log(this.previousElementSibling.previousElementSibling);

            var e2 = document.getElementById("e2");
            e2.value = this.previousElementSibling.textContent;

            var e1 = document.getElementById("e1");
            e1.value = this.previousElementSibling.previousElementSibling.textContent;

            var div = this.parentElement;
            div.style.display = "none";
        }
    }


    var li = document.createElement("li");
    var span = document.createElement("SPAN");
    var input = document.getElementById("e1").value;

    var t1 = document.createTextNode(input);
    li.id = "list";

    span.appendChild(t1);
    if (input === '') {

        swal({
            title: ' Invalid.   Try Again?',

            confirmButtonColor: '#0A717D',
            confirmButtonText: 'ok',
        });

    } else {
        document.getElementById("l1").appendChild(li);
        li.appendChild(span);
    }
    document.getElementById("e1").value = "";








    var span1 = document.createElement("SPAN");
    var input2 = document.getElementById("e2").value
    var t2 = document.createTextNode(input2);
    span1.className = "l2";
    span1.appendChild(t2);
    if (input2 === '') {

        swal({
            title: ' Invalid.   Try Again?',

            confirmButtonColor: '#0A717D',
            confirmButtonText: 'ok',
        });
    } else {
        li.appendChild(span1);
    } document.getElementById("e2").value = "";


    var span = document.createElement("SPAN");
    var txt = document.createTextNode("🖋️");
    span.className = "edit";
    span.appendChild(txt);
    li.appendChild(span);






    var close = document.getElementsByClassName("close");
    var i;
    for (i = 0; i < close.length; i++) {
        close[i].onclick = function () {
            var div = this.parentElement;
            div.style.display = "none";
        }
    }

    var span = document.createElement("SPAN");
    var txt = document.createTextNode("🗑");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);


    var edit = document.getElementsByClassName("edit");
    var i;
    for (i = 0; i < edit.length; i++) {
        edit[i].onclick = function () {

            console.log(this.previousElementSibling);
            console.log(this.previousElementSibling.previousElementSibling);

            var e2 = document.getElementById("e2");
            e2.value = this.previousElementSibling.textContent;

            var e1 = document.getElementById("e1");
            e1.value = this.previousElementSibling.previousElementSibling.textContent;

            var div = this.parentElement;
            div.style.display = "none";


        }
    }

    var close = document.getElementsByClassName("close");
    var i;
    for (i = 0; i < close.length; i++) {
        close[i].onclick = function () {
            var div = this.parentElement;
            div.style.display = "none";
        }
    }



    // calculation

    var r2 = document.getElementById("r2");
    var x = parseInt(r2.innerHTML);
    r2.innerHTML = parseInt(input2) + x;

    console.log(typeof x, typeof r2, typeof input2);

    var r3 = document.getElementById("r3");
    var x = parseInt(r3.innerHTML);
    r3.innerHTML = x - parseInt(input2);



    var x = document.getElementById('r3').innerHTML;

    var parsed = parseInt(x);
    var x = parsed;


    if (x > 0) {
        document.getElementById('r3').style.color = "green";

        r3b.style.color = "green";
    }
    else if (x < 0) {
        document.getElementById('r3').style.color = "red";
    }
    else {
        document.getElementById('r3').style.color = "blue";

    };

    event.preventDefault()






}
/*tslint:disabled*/
