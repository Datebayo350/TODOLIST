var todolist = {

    init: function(){
        var checks = document.querySelectorAll('.check');
        var delets = document.querySelectorAll('.delete');
        var modifys = document.querySelectorAll('.modify');

        checks.forEach(index => index.addEventListener('click', todolist.handleCheckButton));
        delets.forEach(index => index.addEventListener('click', todolist.handleDeleteButton));
        modifys.forEach(index => index.addEventListener('click', todolist.handleModifyButton));
    },

    handleCheckButton: function(event){
       
        var divProgress = event.target.parentNode.parentNode.nextElementSibling.childNodes[1];
       
        divProgress.style.width = '100%';
        divProgress.textContent = '100%';

    },

    handleDeleteButton: function(event){
       
        var divParent = event.target.closest('.parent');
        var divAncestor = event.target.closest('.ancestor');

        divAncestor.removeChild(divParent);

    },

    handleModifyButton: function(clickModify){
       console.log(clickModify);
        var divTitle = clickModify.target.parentNode.parentNode.previousElementSibling;
        var titleChildrens = divTitle.children;
       
        for(index = 0; index <titleChildrens.length; index++) {
            
            titleChildrens[index].classList.toggle('editable');
                
                if(clickModify.target.classList.contains('fa-pen') === true ){
                    console.log("C'est true")
                
                    titleChildrens[index].addEventListener('click', (clickOnEditableFields)=>{
                        var field = clickOnEditableFields.target;

                        field.setAttribute('contenteditable', 'true');   
                
                        field.addEventListener('focusout', (outOfField)=>{

                                console.log('SORTI =>',outOfField);
                                field.classList.remove('editable');
                                field.removeAttribute('contenteditable');
                                console.log(clickModify);
                        })  
                    })
                
                }else{
                    clickModify.stopPropagation();

                }
                
        }
    }
           

       

}




todolist.init();