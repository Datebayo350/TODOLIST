// Description
// ? Importance level+ good tips
// ! Importance level++ top tips

var todolist = {
    errors: [],
    
    categories: new Array(),
  
    apiUrl: "https://benoclock.github.io/S07-todolist",

    /**
     * Initialization the applicaiton, and made the necessary calls to the needed methods
     */
    init: function(){
        // var submitNewTaskButton = document.querySelector('button[type=submit');
        // submitNewTaskButton.addEventListener('click', todolist.handleAddNewTask);

        var form = document.querySelector('form');
        form.addEventListener('submit', todolist.handleAddNewTask);
        
        todolist.getTheTasks();
        todolist.getTasksFromApi();
        todolist.getCategoriesFromApi();

    },
    
    /**
     * Calls out tasks from the api 
     */
    getTasksFromApi: function () {
        
        todolist.requestAPI('/tasks.json');
    },

    /**
     * Calls out categories from the api 
     */
    getCategoriesFromApi: function(){

        todolist.requestAPI('/categories.json');
    },

    /**
     * Request to the api and fetch the asked data
     * @param {*} endpoint 
     */
    requestAPI: async function(endpoint){
        
        // Verify wich endpoint is received
        let regexTasks = /(?=tasks\.json).*/g;
        let regexCategories = /(?=categories\.json).*/g;
        
        // Options for the request
        let fetchOptions = {
            method: 'GET',
            mode: 'cors',
            cache: 'no-cache',
        }
        // We wait for the response ( promise ) of the request  fetch()
        let promesse = await fetch(todolist.apiUrl + endpoint, fetchOptions)
        
        let url = promesse.url;
        
        // Verify if the url respect the regex
        let matchRegexCategories = url.match(regexCategories);
        let matchRegexTasks = url.match(regexTasks);
        
        if(matchRegexCategories !== null || matchRegexTasks !== null){
            
            // We wait for the promise parsed to json
            jsonData = await promesse.json();
            
            // Once we get it, we loop on it and we send the data to create a new task, or send to the dropdown element inside the DOM
            jsonData.forEach(function(item){

                if( item.title !== undefined) {
                    // We handle the behavior of the task
                    todolist.handleAddNewTask(null,item);

                }else{
                    
                    // We handling the behavior of the category
                    let  dropDownMenu = document.querySelector('.dropdown-menu');
                    let  a = document.createElement('a');
                    a.className="dropdown-item";
                    a.innerHTML = item.name;
                    dropDownMenu.appendChild(a);

                }
            })
        }
    
    }, 

    /**
     * Recover every tasks in the parent__tasks
     */
    getTheTasks: function () {
        
        // Recover the task container
        var tasks = document.querySelectorAll('.parent__task');
        
        for ( var i = 0; i < tasks.length; i++){
            // Eache task of the parent__tasks container
            currentTask = tasks[i];

            // We'll gona send it as option on this function to apply all the necessary events 
            todolist.bindEventsToTheTask(currentTask);

        }

    },

    /**
     * Bind the necesary events to edit the task received in the parameter
     * @param {*} task 
     */
    bindEventsToTheTask: function (task) {
        
        // Task check button
        checkButton = task.querySelector('.check');
        // Task modify button
        modifyButton = task.querySelector('.modify');
        // Task delete button
        deleteButton = task.querySelector('.delete');
        // Task title,category 
        paragraphs = task.querySelector('.task__paragraph');

        // We'll gonna apply an click-event on each one of them, exept on the paragraphs it will be double click
        checkButton.addEventListener('click',todolist.handleCheckButton)
        modifyButton.addEventListener('click', todolist.handleModifyButton);
        deleteButton.addEventListener('click', todolist. handleDeleteButton);
        paragraphs.addEventListener('dblclick', todolist.handleModifyButton);
        
        // NodeList : 3 inputs. For every task present on the parent__tasks container
        var inputs = task.querySelectorAll('input');
        
        //We'll gonna handle the blur, and the press of the enter-key, for the inputs fields when they appear to edit the title / category
        todolist.addEventListener(inputs, 'blur');
        todolist.addEventListener(inputs, 'keydown');

    },

     /**
     * Add event on every kind of array, object
     * Aray, objetc of nodes, elements
     * @param {*} list 
     * Event that we want to apply
     * @param {*} event 
     */
    addEventListener: function(list, event){
        
        // Header task elements
        // Necesary even if its the same value like list, because in the loop we can't acces it anymore
        // Every header inputs present on the parent__tasks container
        var inputs = list[0].parentNode.querySelectorAll('input');
        // Every header paragraphs present on the parent__tasks container
        var paragraphs = list[0].parentNode.querySelectorAll('p');
        
        // Progressbar elements
        var progressBar = list[2].parentNode.querySelector('div');
        var intputProgressBar = list[2].parentNode.querySelector('input');
        // console.log(progressBar);
        

        // At each iteration we'll find 3 inputs : 1 for each header paragraph, 1 for the progress-bar
        for(var i = 0; i <list.length; i++) {
    
            // For every input in the list parameter, add the listener from the event parameter
            list[i].addEventListener(event, (evt) => {
                
                var parentTask = evt.target.closest('.parent__task');
                
                if(evt.key === 'Enter' || evt.type === 'blur'){
                    // We loop on each paragraph of the current task who emited the event
                    for(let i = 0; i < paragraphs.length; i++) {
                        
                        //! So there we found 2 nodesListes because at each loop we call the paragraphs
                        // console.log(paragraphs);
                        
                        // Iteration of the paragraph (total 2) - type of input 1  ...
                        if (inputs[i].attributes.type.value === "text"){
                            
                            // First iteration (first paragraph), the value will be the actual one of the input situed at the same positioni ( i number of the actual iteration )
                            paragraphs[i].innerHTML = inputs[i].value;
                            paragraphs[i].classList.remove('d-none');
                            inputs[i].classList.add('d-none');
                        } 
                        
                        // Same as above
                        if(intputProgressBar.attributes.type.value ==="number"){
                            
                            // Handling the static tasks
                            if(parentTask.classList.contains('static')){
                                
                                if(intputProgressBar.value < 100 && intputProgressBar.value > 0){
                                    
                                    parentTask.classList.remove('shadow-incomplete','shadow-complete');
                                    parentTask.classList.add('shadow-started');
                                }else if(intputProgressBar.value <= 0 ){
                                    parentTask.classList.remove('shadow-complete','shadow-started');
                                    parentTask.classList.add('shadow-incomplete');
                                }else{
                                    parentTask.classList.remove('shadow-incomplete','shadow-started');
                                    parentTask.classList.add('shadow-complete');
                                }
                            }
                            // Handling the api tasks
                            else if(parentTask.classList.contains('task__from--API')){
                                if(intputProgressBar.value < 100 && intputProgressBar.value > 0){
                                    
                                    parentTask.classList.remove('shadow-api_incomplete','shadow-api_complete');
                                    parentTask.classList.add('shadow-api_started');
                                }else if(intputProgressBar.value <= 0 ){

                                    parentTask.classList.remove('shadow-api_complete','shadow-api_started');
                                    parentTask.classList.add('shadow-api_incomplete');
                                }else{

                                    parentTask.classList.remove('shadow-api_incomplete','shadow-api_started');
                                    parentTask.classList.add('shadow-api_complete');
                                }
                            }
                            // Handling the form tasks
                            else{
                                if(intputProgressBar.value < 100 && intputProgressBar.value > 0){
                                    
                                    parentTask.classList.remove('shadow-form_incomplete','shadow-form_complete');
                                    parentTask.classList.add('shadow-form_started');
                                }else if(intputProgressBar.value <= 0 ){

                                    parentTask.classList.remove('shadow-form_complete','shadow-form_started');
                                    parentTask.classList.add('shadow-form_incomplete');
                                }else{

                                    parentTask.classList.remove('shadow-form_incomplete','shadow-form_started');
                                    parentTask.classList.add('shadow-form_complete');
                                }
                            }
                            
                            // Handling of the progress bar of the task who emited the event
                            progressBar.innerHTML = intputProgressBar.value + '%';
                            progressBar.style.width = intputProgressBar.value + '%';
                            progressBar.value = intputProgressBar.value + '%';
                            progressBar.setAttribute('value',intputProgressBar.value + '%');
                            progressBar.setAttribute('aria-valuenow',intputProgressBar.value + '%');
                            
                            progressBar.classList.remove('d-none');
                            intputProgressBar.classList.add('d-none');
                        }
    
                        
                    }
                }
            })
        }
    },

    /**
     * Handling the behavior when click on the 'check' button
     * @param {*} event 
     */
    handleCheckButton: function(event){
       
        // Recover the progress-bar of the task who emited the event 
        var divProgress = event.target.parentNode.parentNode.nextElementSibling.childNodes[1];
        
        // Recover the parent__task of task
        var parentTask = event.path[4];

        // Check the parameters of the curent parent__task, and apply the necessary modifications in circumstance, for box color changing
        // Handling cases where api task 
        if(parentTask.classList.contains('task__from--API') === true){
            
            parentTask.classList.remove('shadow-api_incomplete','shadow-api_started');
            parentTask.classList.add('shadow-api_complete');
        }
        // Handling cases where static task 
        else if(parentTask.classList.contains('static') === true) {
            
            parentTask.classList.remove('shadow-incomplete','shadow-started');
            parentTask.classList.add('shadow-complete');
        }
        // Handling cases where form task 
        else{

            parentTask.classList.remove('shadow-for_incomplete','shadow-form_started');
            parentTask.classList.add('shadow-form_complete');
        }
        
        // Set its progress, we'll gonna handle it dinamically for the news one's
        divProgress.style.width = '100%';
        divProgress.textContent = '100%';
    },

    /**
     * Handling the behavior when click on the 'delete' button
     * @param {*} event 
     */
    handleDeleteButton: function(event){
        
        // Recover the parent__tasks container
        var parentTasks = event.target.closest('.parent__tasks');
        
        // Recover the parent__task of the task who emited the event
        var divParent = event.target.closest('.parent__task');
        
        // Remove the task from the parent__tasks container
        parentTasks.removeChild(divParent);

    },

    /**
     * Handling the behavior when click on the 'modify' button
     * @param {*} event 
     */
    handleModifyButton: function(event){
        
        // ? -This- refer to the currentTarget (event.target), button modify
        
        //#1 Posibility
        //var divTitle = event.target.parentNode.parentNode.previousElementSibling;
        
        //#2 Posibility
        // Recover the parent__task div
        var divTitle = event.path[3];
        
        // Select all her inputs
        var inputs = divTitle.querySelectorAll('input');

        inputs[0].focus();
        
        // ! Clean the value of the inputs each time the event happend, it provides us to don't cumulates the values of the lasts editings
        inputs.forEach(input=> input.value='')

        var paragraphs = divTitle.querySelectorAll('p');
        var progressBar = divTitle.querySelectorAll('.progress-bar');
        
        // #1 Posibility 
        // var input1Value = inputs[0].value = paragraphs[0].innerHTML;
        // var input2Value = inputs[1].value = paragraphs[1].innerHTML;
        
        // ? Set the value of the futur displayed inputs
        // #2 Posibility 
        for(var i = 0; i < inputs.length; i++){
            
            // Handling the behavior of the inputs text
            if(inputs[i].attributes.type.value === "text"){
                
                inputs[i].value += paragraphs[i].innerHTML;

            }
            // Handling the behavior of the inputs number
            else{

                //Handling the behavior of the progress-bar her asociated input-field and his visibility
                progressBar[0].classList.add('d-none')
                // ? Need to convert the value into number, becaause we recieve an string caractère ( % ) from the innerHTML, and the input field handle only numbers
                let test = parseInt(progressBar[0].innerHTML, 10);
                inputs[i].value += test
            }
        }
        
       

        //? On Every Click to the modify button, hide the paragraphs and display the inputs to let me edit the field
       
        inputs.forEach(input => 
                
            input.classList.remove('d-none')

        );

        paragraphs.forEach(p => 
        
            p.classList.add('d-none')
        

        );
        
    },

    /**
     * Handling the new added tasks during the broadcast of an event, from the form or the api
     * task its an optional parameter, he's necessary when we send data recovered from api's
     * @param {*} task 
     */
    handleAddNewTask: function(event, task = null){
        // ! Each time this function is called e.g : submit event, clean the message errors ( in the form ) 
        todolist.cleanErrors();
        
        var parentTasks = document.querySelector('.parent__tasks');
        var template = document.querySelector('template');
        
        var formTitle = document.querySelector('.formTitle_task');
        var formCategory = document.querySelector('.formCategory_task');
        var formProgress = document.querySelector('.formProgress_task');
        

        // Select the template, get the content, clone it and 'true' to say that we want to clone his childrens too
        // @see https://stackoverflow.com/questions/39372886/document-importnode-vs-node-clonenode-real-example
        // @see https://developer.mozilla.org/fr/docs/Web/API/Node/cloneNode
        var cloneTemplateFragment = document.importNode(template.content, true)
        
        //! This one is a document fragment, NEVER use the first element 'template', use the first child container in this case parent__task
        // var cloneTemplateFragment = document.getElementById('template').content.cloneNode(true);
        
        //! This one is an element, so add this one on the flow, the first child container
        var templateParent = cloneTemplateFragment.querySelector('.parent__task');

        var templateTitle = cloneTemplateFragment.querySelector('.templateTitle_task');
        var templateCategory = cloneTemplateFragment.querySelector('.templateCategory_task');
        var templateProgress = cloneTemplateFragment.querySelector('.templateProgress_task');

        var inputVal = formProgress.value; 
        // ? console.log(typeof inputVal);
        
        // Handle the case when we received an event (submit)
        if(event !== null){
            event.preventDefault();
            
            // If contains something none digital one time or more don't match, match only digits between 0 and 100
            https://stackoverflow.com/questions/21096240/regex-dont-match-if-containing-a-specific-string
            //? Becareful : Expression aren't cercled by quotes
            var regex =/^(?!.*\D)[0-100]+/g;
            // ? console.log(typeof regex);

            var matchRegex = inputVal.match(regex);
            // ? console.log(typeof matchRegex);
            
            if(matchRegex !== null){
                
                // Handle Progress bar
                templateProgress.innerHTML = formProgress.value + '%';
                templateProgress.style.width = formProgress.value + '%';
                templateProgress.style.value = formProgress.value + '%';
                templateProgress.setAttribute('value',formProgress.value + '%');
                templateProgress.setAttribute('aria-valuenow',formProgress.value + '%');
                
                //Handle Header task
                templateTitle.innerHTML = formTitle.value;
                templateCategory.innerHTML = formCategory.value
                
                // Handling the box color in function of the progress bar parameters 
                if(formProgress.value <= 0){
                
                    templateParent.classList.add('shadow-form_incomplete','form__task'); 

                }else if (formProgress.value < 100){
                
                    templateParent.classList.add('shadow-form_started','form__task'); 
                }else {
                  
                    templateParent.classList.add('shadow-form_complete','form__task'); 

                }
                
                // @see https://stackoverflow.com/questions/11475232/find-the-element-before-and-after-a-specific-element-with-pure-javascript
                // @see https://stackoverflow.com/questions/618089/can-i-insert-elements-to-the-beginning-of-an-element-using-appendchild
                parentTasks.insertBefore(templateParent, parentTasks.firstChild);
                // progress.style.backgroundColor = "red";
                
                //Call again the methode to give us the possibility to ediy the news tasks
                todolist.bindEventsToTheTask(templateParent);

            }
            // ? If the regex dont match display the error message
            else{
                var p = document.createElement('p');
                p.classList.add("text-danger");
                p.innerHTML = 'Veuillez renseigner des chiffres';
                
                todolist.errors.push(p); 
                formProgress.classList.add('is-invalid');
            }
       
        } 
        // Handle the case when we don't received an event (data from api)
        else{
            
            if (task !== null) {
            
                templateTitle.innerHTML = task.title;
                templateCategory.innerHTML = task.category.name;
                
                if(task.completion !== null  && task.completion === 100){
                    
                    templateParent.classList.add('shadow-api_complete','task__from--API'); 

                    // Handle Progress bar
                    templateProgress.innerHTML = task.completion + '%';
                    templateProgress.style.width = task.completion + '%';
                    templateProgress.style.value = task.completion + '%';
                    templateProgress.setAttribute('value',task.completion + '%');
                    templateProgress.setAttribute('aria-valuenow',task.completion + '%');
                    
                }else if(task.completion !== null && task.completetion !== 100){
                    templateParent.classList.add('shadow-api_incomplete','task__from--API'); 
                    
                    templateProgress.innerHTML = '0%';
                    templateProgress.style.width = '0%';
                    templateProgress.style.value = '0%';
                    templateProgress.setAttribute('value','0%');
                    templateProgress.setAttribute('aria-valuenow','0%');
                    

                }
        
            }
        
            // @see https://stackoverflow.com/questions/11475232/find-the-element-before-and-after-a-specific-element-with-pure-javascript
            // @see https://stackoverflow.com/questions/618089/can-i-insert-elements-to-the-beginning-of-an-element-using-appendchild
            parentTasks.insertBefore(templateParent, parentTasks.firstChild);
            
            //Call again the methode to give us the possibility to edit the news tasks
            todolist.bindEventsToTheTask(templateParent);

        }

        //? At the end of the fonction who handle and event, if is needed display the errors
        todolist.countAndDisplayErrors();

    },

    /**
     *  Handling of the existing errors
     */
    countAndDisplayErrors: function(){
        var errorContainer = document.querySelector('.error');
        
        todolist.errors.forEach(function(error){ 
            
            if (todolist.errors !== null){
                errorContainer.appendChild(error)
            }
        
        })
    },

    /**
     *  Clean the existing errors
     */
    cleanErrors: function(){
        
        var errorContainer = document.querySelector('.error');
        
        var formProgress = document.querySelector('.formProgress_task');
        formProgress.classList.remove('is-invalid');
        todolist.errors.length = 0;
        errorContainer.innerHTML = '';
    },
        
}

todolist.init();


