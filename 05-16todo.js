let $cont = document.getElementById("list-container");
let $input = document.querySelector("#input");
let $btn = document.querySelector(".btn");
let list = [];

console.log(list, "list1");

function draw(params) {
  $cont.innerHTML = "";

  for (let i = 0; i < list.length; i++) {
    // console.log(typeof $input.value);
    let x;
    x = document.createElement("li");
    x.innerText = list[i];
    $cont.append(x);
  }
}
draw();

function save(params) {
  if ($input.value == "") {
    console.log("list oruul");

    let $p = document.createElement("p");
    $p.innerText = "Утга оруулна уу";
    $cont.append($p);
  } else {
    let x;
    x = $input.value;
    console.log(x, "x value");
    list.push(x);
    draw();

    $input.value = "";
  }
}

$btn.addEventListener("click", save);