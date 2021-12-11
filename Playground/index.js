




function fetchList() {
  var elem = document.getElementById('btn');
  // elem.style.color = 'red'

  if(elem.style.color === 'blue'){
    elem.style.color = 'red'
  }
  else{
      elem.style.color = 'blue';
  }
}





  fetchData = async ()=>{
    let url = 'https://ron-swanson-quotes.herokuapp.com/v2/quotes'
    let result = await axios.get(url)

    document.getElementById('result').innerText = result.data[0]
}



clearText=()=>{
  console.log('clearning text')
      document.getElementById('result').innerText = ''
}



addTodo=(todo)=>{
  let todos = []
    console.log(todo)

}




$("input[type='text']").keypress(function(event){

	if(event.which === 13){
		var todoText = $(this).val();	//grabs text from input
		$(this).val("");
		$("ul").append(" <li> <span>  <i class='far fa-trash-alt'> </i>  </span> " + todoText + "</li>");
	}
});
//
$('#list').on('click' , 'li' , function(){
  	$(this).toggleClass("completed");
})



$('ul').on('click' , 'span' , function(event){
    $(this).parent().fadeOut(500, function(){
  		$(this).remove();
  	});
    	event.stopPropagation();
})


// $("ul").on("click", "li", function(){
// 	 $(this).toggleClass("completed");
// });
//
//
// $("ul").on("click", "span" ,  function(event){
// 	$(this).parent().fadeOut(500, function(){
// 		$(this).remove();
// 	});
// 	event.stopPropagation();
// });
