window.onload = function () {     //window(画面)を読み込んだ時functionを呼び出す。
  console.log("onload");
  // window.onmousemove = function(){     //windowでマウスの動きを感知した時functionを呼び出す。
  //   console.log("onmousemove");
  // }
  var element = document.getElementById("box");       //htmlファイルで"box"idで作ったdivエレメントに変数を渡す。
  var el_value = document.getElementsByClassName("value");      //htmlファイルで"value"classで作ったエレメントに変数を渡す。
  element.onmousemove = function(event){       //elementでmousemoveを感知した時function(event)を呼び出す。
    //座標を取得する
    var mX = event.offsetX;  //X座標(左から)を取得する。
    var mY = event.offsetY;  //Y座標(上から)を取得する。
    console.log(mX,mY);
    el_value[0].innerHTML = mX;
    el_value[1].innerHTML = mY;
  }
}
