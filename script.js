const array = [
  "ほのお",
  "みず",
  "でんき",
  "くさ",
  "じめん",
  "ひこう",
  "こおり",
  "かくとう",
  "どく",
  "エスバー",
  "むし",
  "いわ",
  "ゴースト",
  "ドラゴン",
  "あく",
  "はがね",
  "フェアリー",
];
let array2 = [];
//console.log(array);
//console.log(array2);

function setvalue() {
  array2 = [];
  for (let index = 0; index < 17; index++) {
    let judge = Math.floor(Math.random() * 17);
    //console.log(index + "回目スタート");
    //console.log(array2);
    //console.log(array[judge]);
    //console.log(!array2.includes(array[judge]));

    if (!array2.includes(array[judge]) == false) {
      while (array2.includes(array[judge])) {
        //console.log("while分に入りました");
        judge = Math.floor(Math.random() * 17);
        //console.log(judge + "ジャッチが" + array[judge] + "に変更");
      }
    } else {
      //console.log("elseがわにようこそ");
    }
    array2[index] = array[judge];
  }
}

setvalue();

//console.log(array2);

function change() {
  for (let i = 0; i < 16; i++) {
    document.getElementById("table" + String(i)).innerText = array2[i];
  }
}
change();

setvalue();
function changeAgain(a) {
  for (let i = 0; i < 16; i++) {
    document.getElementById("table" + String(i) + "_" + String(a)).innerText =
      array2[i];
  }
}

//console.log("konnitiwa");
for (let i = 1; i < 8; i++) {
  setvalue();
  changeAgain(i);
}
console.log("@Hiropokeclub");
