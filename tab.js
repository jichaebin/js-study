// for(let i = 0; i < $('.tab-content').length; i++) {
//     $('.tab-button').eq(i).on('click' , function(){
    
//         탭열기(i);
//     })    
// }

function 탭열기(구멍){
    $('.tab-button').removeClass('orange');
    $('.tab-button').eq(구멍).addClass('orange');
    $('.tab-content').removeClass('show');
    $('.tab-content').eq(구멍).addClass('show');
}

$('.list').click(function(e){

    if(e.target == document.querySelectorAll('.tab-button')[0]){
        탭열기(0);
    }
    if(e.target == document.querySelectorAll('.tab-button')[1]){
        탭열기(1);
    }
    if(e.target == document.querySelectorAll('.tab-button')[2]){
        탭열기(2);
    }
})




