/*/////////////// �����ꂽ�L�|�R�[�h�擾�p�֐�   UseFree
========================================================
 Win  n4 n6 moz e4 e5 e6,
 Mac  n4 n6 moz e4.5 e5,
 Linux n4 n6 moz         
========================================================
 �����ꂽ�L�|�R�[�h���擾���܂��B
 �L�|�̕����擾�������ꍇ�́AgetKEYSTR(e)��
 �Q�Ƃ��Ă�������

 �g�p��  //�����ꂽ�L�|�R�[�h���_�C�A���O�ɕ\������
  alert( getKEYCODE(e) )

 Support http://game.gr.jp/js/
=======================================================*/

//--�u���E�U�𒲂ׂ�NN��IE�̕������������܂�
MSIE = navigator.userAgent.indexOf("MSIE")!=-1 

//--�����ꂽ�L�|�R�[�h��Ԃ�
function getKEYCODE(e){  
    if(document.all)           return  event.keyCode
    else if(document.getElementById) 
          return (e.keyCode!=0)?e.keyCode:e.charCode
    else if(document.layers)   return  e.which
}

  //--�L�[event���Z�b�g����
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
