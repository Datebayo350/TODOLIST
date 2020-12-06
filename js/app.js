var todolist = {
    errors: [],
    countAndDisplayErrors: function(){
        var errorContainer = document.querySelector('.error');
        
        console.log(errorContainer);
        
        todolist.errors.forEach(function(error){ 
            console.log(error);
            
            if (todolist.errors !== null){
                errorContainer.appendChild(error)

                // console.log;
            }
        
        })
    },
    cleanErrors: function(){
        var errorContainer = document.querySelector('.error');
        
        var formProgress = document.querySelector('.formProgress_task');
        formProgress.classList.remove('is-invalid');
        todolist.errors.length = 0;
        errorContainer.innerHTML = '';
    },

    init: function(){
        // var submitNewTaskButton = document.querySelector('button[type=submit');
        // submitNewTaskButton.addEventListener('click', todolist.handleAddNewTask);

        var form = document.querySelector('form');
        form.addEventListener('submit', todolist.handleAddNewTask);
        todolist.getTheTask();
    },
    
    getTheTask: function () {
        
        // Recover the task container
        var tasks = document.querySelectorAll('.parent__task');
        
        for ( var i = 0; i < tasks.length; i++){
            // Eache task
            currentTask = tasks[i];

            // We'll gona apply all the events on her
            todolist.bindEventsToTheTask(currentTask);

        }

    },
    
    bindEventsToTheTask: function (task) {
        
         // Her check button
         checkButton = task.querySelector('.check');
         // Her modify button
         modifyButton = task.querySelector('.modify');
         // Title, category on  click
         paragraphs = task.querySelector('.task__paragraph');
         // Her delete button
         deleteButton = task.querySelector('.delete');

         // We'll gonna apply an click event on each on of them
         checkButton.addEventListener('click',todolist.handleCheckButton)
         modifyButton.addEventListener('click', todolist.handleModifyButton);
         paragraphs.addEventListener('dblclick', todolist.handleModifyButton);
         deleteButton.addEventListener('click', todolist. handleDeleteButton);
         
         var inputs = task.querySelectorAll('input');
        //  console.log(inputs);
        
        //We'll gonna handle the blur, and the press of the enter-key, for the inputs fields when they appear to edit the title / category
        todolist.addEventListener(inputs, 'blur');
        todolist.addEventListener(inputs, 'keydown');

    },

    handleCheckButton: function(event){
       // Recover the progress div
        var divProgress = event.target.parentNode.parentNode.nextElementSibling.childNodes[1];
       // Set its progress, we'll gonna handle it dinamically for the news one's
        divProgress.style.width = '100%';
        divProgress.textContent = '100%';

    },

    handleDeleteButton: function(event){
       
        // var parentTasks = event.path[5];
        // var parentTasks = this.closest('.parent__tasks');
        
        // Recover the delet button
        var parentTasks = event.target.closest('.parent__tasks');
        
        // var divParent = event.path[4];
        // Recover his parend div
        var divParent = event.target.closest('.parent__task');
        
        console.log(divParent);

        // Remove the task
        parentTasks.removeChild(divParent);

    },

    handleModifyButton: function(event){
        //? -This- refer to the currentTarget (event.target), button modify
        //#1 
        //var divTitle = event.target.parentNode.parentNode.previousElementSibling;
        
        //#2
        // Recover the parent__task div
        var divTitle = event.path[3];

        // Select all her inputs
        var inputs = divTitle.querySelectorAll('input');
        // console.log('MES INPUTS', inputs[1]);
        //! Clean the value of the inputs each time the event happend, it provides us to don't cumulates the values of the lasts editings
        inputs.forEach(input=> input.value='')
        var paragraphs = divTitle.querySelectorAll('p');
        // console.log('MES PARAGRAPHS', paragraphs);

        
        //?Set the value of the futur displayed inputs
       // #1
        for(var i = 0; i < inputs.length; i++){
            inputs[i].value += paragraphs[i].innerHTML;
        }
        
        // #2
        // var input1Value = inputs[0].value = paragraphs[0].innerHTML;
        // var input2Value = inputs[1].value = paragraphs[1].innerHTML;

        //? On Every Click to the modify button, hide the paragraphs and display the inputs to let me edit the field
       
        inputs.forEach(input => 
                
            input.classList.remove('d-none')

        );

        paragraphs.forEach(p => 
        
            p.classList.add('d-none')
        

        );
        console.log(event);
        
    },

    handleAddNewTask: function(event){
        event.preventDefault();
        todolist.cleanErrors();

        var parentTasks = document.querySelector('.parent__tasks');
        var template = document.querySelector('template');
        
        var formTitle = document.querySelector('.formTitle_task');
        var formCategory = document.querySelector('.formCategory_task');
        var formProgress = document.querySelector('.formProgress_task');
        
        // console.log(parentProgress);
        

        // @see https://stackoverflow.com/questions/39372886/document-importnode-vs-node-clonenode-real-example
        // @see https://developer.mozilla.org/fr/docs/Web/API/Node/cloneNode
        //? Select the template, get the content, clone it and 'true' to say that we want to clone his childrens too
        var cloneTemplateFragment = document.importNode(template.content,true)
        //! This one is a document fragment
        // var cloneTemplateFragment = document.getElementById('template').content.cloneNode(true);
        //! This one is a an element, so add this one on the flow, not the above one
        var templateParent = cloneTemplateFragment.querySelector('.parent__task');
       

        var templateTitle = cloneTemplateFragment.querySelector('.templateTitle_task');
        var templateCategory = cloneTemplateFragment.querySelector('.templateCategory_task');
        var templateProgress = cloneTemplateFragment.querySelector('.templateProgress_task');

        var inputVal = formProgress.value; 
        // console.log(typeof inputVal);
        
        //! Attention : l'expression n'est pass entouré de quotes
        //? If contains something none digital 0 or + don't match, match only digits
        https://stackoverflow.com/questions/21096240/regex-dont-match-if-containing-a-specific-string
        var regex =/^(?!.*\D)\d+/g;
        // console.log(typeof regex);

        var matchRegex = inputVal.match(regex);
        // console.log(typeof matchRegex);
        
        if(matchRegex !== null){
            
            // Handle Progress bar
            templateProgress.innerHTML = formProgress.value + '%';
            templateProgress.style.width = formProgress.value + '%';
            templateProgress.style.value = formProgress.value + '%';
            templateProgress.setAttribute('value',formProgress.value + '%');
            templateProgress.setAttribute('aria-valuenow',formProgress.value + '%');
            
            //Handle Header task
            templateTitle.innerHTML = formTitle.value;
            templateParent.classList.add('shadow-test'); 
            templateCategory.innerHTML = formCategory.value;

            
            // @see https://stackoverflow.com/questions/11475232/find-the-element-before-and-after-a-specific-element-with-pure-javascript
            // @see https://stackoverflow.com/questions/618089/can-i-insert-elements-to-the-beginning-of-an-element-using-appendchild
            parentTasks.insertBefore(templateParent, parentTasks.firstChild);
            // progress.style.backgroundColor = "red";
            
            //Call again the methode to give us the possibility to ediy the news tasks
            todolist.bindEventsToTheTask(templateParent);


        }else{
            var p = document.createElement('p');
            p.classList.add("text-danger");
            p.innerHTML = 'Veuillez renseigner des chiffres';
            
            todolist.errors.push(p); 
            formProgress.classList.add('is-invalid');
            console.log('ELSE', todolist.errors);
            
        }
        todolist.countAndDisplayErrors();

    },
    
    /**
     * Add event on every kind of array, object
     * @param {*} list 
     * @param {*} event 
     */
    addEventListener: function(list, event){
        var paragraphs = list[0].parentNode.querySelectorAll('p');
        // Necesary even if its the same value like list, because in the loop we can't acces it anymore
        var inputs = list[0].parentNode.querySelectorAll('input');
        // console.log(list);
        
            
        for(var i = 0; i <list.length; i++) {
            // console.log('item',list[i]);
            // console.log('evt',paragraphs[i]);
            
            //For every input in the list, add the listener
            list[i].addEventListener(event, (evt) => {
                
                if(evt.key === 'Enter' || evt.type === 'blur'){
                    
                    for(let i = 0; i < paragraphs.length; i++) {
                        //? For tge paragraph situeted at the position i (number of the loop) in his nodeListe, the value will be the actual one of the input situed at the place i (number of the actual itération of the loop) in his nodeList
                        paragraphs[i].innerHTML = inputs[i].value;
                        paragraphs[i].classList.remove('d-none');
                        inputs[i].classList.add('d-none');
                        
                        
                    }
                }
            })
        }
    },
    

    
    
        
}


todolist.init();