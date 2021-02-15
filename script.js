$(document).ready(function(){
    var validater = $("#signup-form").validate({
        rules:{
            Job_Title:{
                required:true,
                minlength:4,
                maxlength:6
            },
            Summary:{
                required:true,
                minlength:4
            },
            Full_Details:{
                required:true,
                minlength:6
            },
            Closing_Date:{
                required:true,
                date:true
            },
            location:{
                required:true,
                minlength:10
            },

        },
        Messages:{
            
        }
        
    });

    $(".form_reset").click(function(){
        validater.resetForm();
     $('#signup-form').find('input').val('');
});
})