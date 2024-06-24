/*/////////////// 押されたキ－コード取得用関数   UseFree
========================================================
 Win  n4 n6 moz e4 e5 e6,
 Mac  n4 n6 moz e4.5 e5,
 Linux n4 n6 moz         
========================================================
 押されたキ－コードを取得します。
 キ－の文を取得したい場合は、getKEYSTR(e)を
 参照してください

 使用例  //押されたキ－コードをダイアログに表示する
  alert( getKEYCODE(e) )

 Support http://game.gr.jp/js/
=======================================================*/

//--ブラウザを調べてNNとIEの分岐を微調整します
MSIE = navigator.userAgent.indexOf("MSIE")!=-1 

//--押されたキ－コードを返す
function getKEYCODE(e){  
    if(document.all)           return  event.keyCode
    else if(document.getElementById) 
          return (e.keyCode!=0)?e.keyCode:e.charCode
    else if(document.layers)   return  e.which
}

  //--キーeventをセットする
  document.onkeydown=KdwnCheck;
  document.onkeyup=KupCheck;

  if(document.layers)
                document.captureEvents(Event.KEYPRESS)
  self.focus()

function KdwnCheck(e){
 key_code=getKEYCODE(e);
 gamed.key_press=1;
}

function KupCheck(e){
 if(key_code==getKEYCODE(e)){
  key_code=-1;
 }
}
