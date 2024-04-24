



function alteraClass(){
    let elementos = document.getElementsByClassName('class')
    for (var index = 0; index < elementos.length; index++){
     elementos[index].style.color = 'Blue'
    }
 }
 
 function alteraName(){
     let elementos = document.getElementsByName('name')
     for (var index = 0; index < elementos.length; index++){
      elementos[index].style.color = 'Green'
     }
  }
 
  function alteraId(){
     document.getElementById('id').style.color = 'Red'
  }
