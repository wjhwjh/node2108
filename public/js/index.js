console.log('index.js')
$(function(){
    //console.log('jquery的使用',$.ajax)

    $.ajax({
        url:'http://localhost:3000/user',
        type:'GET',
        data:"",
        success:function(res){
            console.log(res)
        }

    })
})
