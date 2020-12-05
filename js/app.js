var todolist = {

    init: function(){
        var checks = document.querySelectorAll('.check');
        var delets = document.querySelectorAll('.delete');
        var modifys = document.querySelectorAll('.modify');
        var submitNewTaskButton = document.querySelector('button[type=submit');
        var form = document.querySelector('form');
        
        checks.forEach(index => index.addEventListener('click', todolist.handleCheckButton));
        delets.forEach(index => index.addEventListener('click', todolist.handleDeleteButton));
        modifys.forEach(index => index.addEventListener('click', todolist.handleModifyButton));
        // submitNewTaskButton.addEventListener('click', todolist.handleAddNewTask);
        form.addEventListener('submit', todolist.handleAddNewTask);
        
        
        
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

    handleModifyButton: function(event){
        //? This refer to the currentTarget
        var divTitle = event.target.parentNode.parentNode.previousElementSibling;
        console.log(divTitle);
        
        var inputs = divTitle.querySelectorAll('input');
        var paragraphs = divTitle.querySelectorAll('p');
        
        //?Set the value of the futur displayed inputs
        var input1Value = inputs[0].value = paragraphs[0].innerHTML;
        var input2Value = inputs[1].value = paragraphs[1].innerHTML;

        //? On Every Click to the modify button, hide the paragraphs and display the inputs to let me edit the field
        inputs.forEach(input => 
                
            input.classList.remove('d-none')

        );

        paragraphs.forEach(p => 
        
            p.classList.add('d-none')
        

        );
        todolist.addBlurEventListener(inputs, 'blur')
        todolist.addBlurEventListener(inputs, 'keydown')

    },

    handleAddNewTask: function(event){
        event.preventDefault();
        console.log(event);
        var ancestor = document.querySelector('.ancestor');
        var template = document.querySelector('template');
        
        var formTitle = document.querySelector('.formTitle_task');
        var formCategory = document.querySelector('.formCategory_task');
        var formProgress = document.querySelector('.formProgress_task');
        
        // @see https://stackoverflow.com/questions/39372886/document-importnode-vs-node-clonenode-real-example
        // @see https://developer.mozilla.org/fr/docs/Web/API/Node/cloneNode
        //var clone = document.importClone(template.content, clone,true)
        //? Select the template, get the content, clone it and tru to say that we want to clone his childrens too
        //! This one its a document fragment
        var cloneTemplateFragment = document.getElementById('template').content.cloneNode(true);
        //! This one its a an element, so add this one and not the above one
        var templateParent = cloneTemplateFragment.querySelector('.parent');
        var templateTitle = cloneTemplateFragment.querySelector('.templateTitle_task');
        var templateCategory = cloneTemplateFragment.querySelector('.templateCategory_task');
        var templateProgress = cloneTemplateFragment.querySelector('.templateProgress_task');

        templateTitle.innerHTML = formTitle.value;
        // console.log(templateParent);
        templateParent.classList.add('shadow-test'); 
        templateCategory.innerHTML = formCategory.value;
        templateProgress.innerHTML = formProgress.value;
        
        // @see https://stackoverflow.com/questions/11475232/find-the-element-before-and-after-a-specific-element-with-pure-javascript
        // @see https://stackoverflow.com/questions/618089/can-i-insert-elements-to-the-beginning-of-an-element-using-appendchild
        ancestor.insertBefore(templateParent, ancestor.firstChild);
        // progress.style.backgroundColor = "red";
        
        console.log(templateParent);
        
        
    },
    
    //? Add event on every kind of array, object
    addBlurEventListener: function(list, event){
        var inputs = document.querySelectorAll('.task-input');
        var paragraphs = document.querySelectorAll('.task-paragraph');
        for(var i = 0; i <list.length; i++) {
            //?For every item in the list, add the listener
            list[i].addEventListener(event, (evt) => {
                if(evt.key === 'Enter' || evt.type === 'blur'){
                  
                   paragraphs[0].innerHTML = inputs[0].value;
                   paragraphs[1].innerHTML = inputs[1].value;
                    
                    //? Do the oposit job of the l 44
                    inputs.forEach(input => 
                            
                        input.classList.add('d-none')
                    );

                    paragraphs.forEach(p => 
                    
                        p.classList.remove('d-none')
                    );
                }
            })
        }
    },

    
    
        
}


todolist.init();