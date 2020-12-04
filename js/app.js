var todolist = {

    init: function(){
        var checks = document.querySelectorAll('.check');
        var delets = document.querySelectorAll('.delete');
        var modifys = document.querySelectorAll('.modify');

        checks.forEach(index => index.addEventListener('click', todolist.handleCheckButton));
        delets.forEach(index => index.addEventListener('click', todolist.handleDeleteButton));
        modifys.forEach(index => index.addEventListener('click', todolist.handleModifyButton,true));

        
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
        // var divTitle = clickModify.target.parentNode.parentNode.previousElementSibling;
        
        var divTitle = this.parentNode.parentNode.previousElementSibling;
        var inputs = divTitle.querySelectorAll('input');
        var paragraphs = divTitle.querySelectorAll('p');
        var titleChildrens = divTitle.children;
        
        var input1Value = inputs[0].value = paragraphs[0].innerHTML;
        var input2Value = inputs[1].value = paragraphs[1].innerHTML;

        var input1 = inputs[0];
        var input2 = inputs[1];

        console.log(inputs);
        
        
        inputs.forEach(input => 
                
            input.classList.remove('d-none')

        );

        paragraphs.forEach(p => 
        
            p.classList.add('d-none')
        

        );
        inputs.forEach(input => input.addEventListener('blur', (event) => {
            event.target.style.background = 'pink';    
          }));
         
        
    }
}

todolist.init();