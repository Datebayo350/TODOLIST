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
        
        var input1Value = inputs[0].value = paragraphs[0].innerHTML;
        var input2Value = inputs[1].value = paragraphs[1].innerHTML;


        console.log(inputs);
        
        
        inputs.forEach(input => 
                
            input.classList.remove('d-none')

        );

        paragraphs.forEach(p => 
        
            p.classList.add('d-none')
        

        );
            
        /**
         * Ajoute un évenement sur une liste
         * 
         * @param  list 
         * @param  event 
         */

        var addBlurEventListener = function( list, event) {
            for(var i = 0; i <list.length; i++) {
                list[i].addEventListener(event, (evt) => {
                   var field = evt.target.value;
                    console.log(evt);
                    if(evt.key === 'Enter' || evt.type === 'blur'){
                      
                      var paragraph1Value = paragraphs[0].innerHTML = inputs[0].value;
                      var paragraph2Value = paragraphs[1].innerHTML = inputs[1].value;

                      console.log(evt.key);
                      console.log('Paragraphe 1 =>', paragraph1Value);
                     
                       
                        inputs.forEach(input => 
                                
                            input.classList.add('d-none')

                        );

                        paragraphs.forEach(p => 
                        
                            p.classList.remove('d-none')
                        

                        );
                      
                    }

                    
                })

            }
        }

        addBlurEventListener(inputs, 'blur')
        addBlurEventListener(inputs, 'keydown')



    },

    

         
        
}


todolist.init();