<?php
//? https://www.youtube.com/watch?v=zyIx_VfGmQc
   
    // echo '<div class="container"><img class="img-fluid" src="../../../../../moi.jpg"></div>';


?>
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <!-- <link rel="stylesheet" href="../css/reset.css"> Pas utile, bootstrap dispose de son propre reset -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
    <link rel="stylesheet" href="../css/styles.css">
    <title>TODOLIST - Constantin</title>
</head>
<body>
    <header>       
        <nav class="navbar navbar-expand-lg navbar-light container shadow rounded">
            <a href="" class="navbar-brand"><img src="../assets/images/check_icon.jpg" width="30" height="30" class="d-inline-block align-top" alt="Check icon">Todolist</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navigation_menu" aria-controls="navbar menue" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div id="navigation_menu" class="collapse navbar-collapse">
                <ul class="navbar-nav mr-auto justify-content-between">
                    <li class="nav-item ml-5"><a class="nav-link"href="">Toutes</a></li>
                    <li class="nav-item"><a class="nav-link"href="">Complètes</a></li>
                    <li class="nav-item mr-5"><a class="nav-link"href="">Incomplètes</a></li>
                    <li class="nav-item ml-5 dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbar_dropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Toutes les catégories
                        </a>
                        <div id="navbar_dropdown" class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a class="dropdown-item" href="#">Titre Pro</a>
                            <a class="dropdown-item" href="#">O'Clock</a>
                            <div class="dropdown-divider"></div>
                            <a class="dropdown-item" href="#">Preparation</a>
                        </div>
                    </li>
                    <li class="nav-item"><a href="" class="nav-link border-bottom border-primary text-primary">Voir les archives</a></li>

                </ul>
            </div>
        </nav>
    </header>
    <main>
        <div class="parent__tasks container mt-3" id='test' style="max-height: 450px; overflow-y:scroll">
            <div class="parent__task container mt-3 p-3 shadow-complete">
                <div class="parent__row row d-flex justify-content-around">
                    <div class="task__header w-75 d-flex justify-content-between">
                        <p class="task__paragraph task__title">Acheter du pain</p>
                        <input type="text" class="task__input--title form-control w-25 d-none" aria-label="Small">    
                        <p class="task__paragraph task__category">Nom de la catégorie</p>
                        <input type="text" class="task__input--category form-control w-25 d-none " aria-label="Small">    
                    </div>
                    <div lass="parent__buttons--action d-flex justify-content-evenly">
                        <button><span class="check fas fa-check-square" style="color: Dodgerblue" id="button1"></span></button>
                        <button><span class="modify fas fa-pen" style="color: purple"></span></button>
                        <button><span class="delete fas fa-trash" style="color: red"></span></button>
                    </div>
                    <div class="parent__progress mb-n2 mt-2 p-0 container">
                        <div class="progress-bar" name="progress bar" value="" role="progressbar" style="width: 100%;background-color: #7a7a7ac7; color:black" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">100%</div>
                    </div>
                </div>
            </div>
            <div class="parent__task container mt-3 p-3 shadow-started">
                <div class="parent__row row d-flex justify-content-around">
                    <div class="task__header w-75 d-flex justify-content-between">
                        <p class="task__paragraph task__title">Acheter du pain</p>
                        <input type="text" class="task__input--title form-control w-25 d-none" aria-label="Small">    
                        <p class="task__paragraph task__category">Nom de la catégorie</p>
                        <input type="text" class="task__input--category form-control w-25 d-none " aria-label="Small">    
                    </div>
                    <div lass="parent__buttons--action d-flex justify-content-evenly">
                        <button><span class="check fas fa-check-square" style="color: Dodgerblue" id="button1"></span></button>
                        <button><span class="modify fas fa-pen" style="color: purple"></span></button>
                        <button><span class="delete fas fa-trash" style="color: red"></span></button>
                    </div>
                    <div class="parent__progress mb-n2 mt-2 p-0 container">
                        <div class="progress-bar" name="progress bar" value="" role="progressbar" style="width: 55%;background-color: #7a7a7ac7; color:black" aria-valuenow="55" aria-valuemin="0" aria-valuemax="100">55%</div>
                    </div>
                </div>
            </div>
            <div class="parent__task container mt-3 p-3 shadow-incomplete">
                <div class="parent__row row d-flex justify-content-around">
                    <div class="task__header w-75 d-flex justify-content-between">
                        <p class="task__paragraph task__title">Acheter du pain</p>
                        <input type="text" class="task__input--title form-control w-25 d-none" aria-label="Small">    
                        <p class="task__paragraph task__category">Nom de la catégorie</p>
                        <input type="text" class="task__input--category form-control w-25 d-none " aria-label="Small">    
                    </div>
                    <div lass="parent__buttons--action d-flex justify-content-evenly">
                        <button><span class="check fas fa-check-square" style="color: Dodgerblue" id="button1"></span></button>
                        <button><span class="modify fas fa-pen" style="color: purple"></span></button>
                        <button><span class="delete fas fa-trash" style="color: red"></span></button>
                    </div>
                    <div class="parent__progress mb-n2 mt-2 p-0 container">
                        <div class="progress-bar" name="progress bar" value="" role="progressbar" style="width: 0%;background-color: #7a7a7ac7; color:black" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">0%</div>
                    </div>
                </div>
            </div>
            <div class="parent__task container mt-3 p-3 shadow-complete">
                <div class="parent__row row d-flex justify-content-around">
                    <div class="task__header w-75 d-flex justify-content-between">
                        <p class="task__paragraph task__title">Acheter du pain</p>
                        <input type="text" class="task__input--title form-control w-25 d-none" aria-label="Small">    
                        <p class="task__paragraph task__category">Nom de la catégorie</p>
                        <input type="text" class="task__input--category form-control w-25 d-none " aria-label="Small">    
                    </div>
                    <div lass="parent__buttons--action d-flex justify-content-evenly">
                        <button><span class="check fas fa-check-square" style="color: Dodgerblue" id="button1"></span></button>
                        <button><span class="modify fas fa-pen" style="color: purple"></span></button>
                        <button><span class="delete fas fa-trash" style="color: red"></span></button>
                    </div>
                    <div class="parent__progress mb-n2 mt-2 p-0 container">
                        <div class="progress-bar" name="progress bar" value="" role="progressbar" style="width: 100%;background-color: #7a7a7ac7; color:black" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">100%</div>
                    </div>
                </div>
            </div>
            <div class="parent__task container mt-3 p-3 shadow-started">
                <div class="parent__row row d-flex justify-content-around">
                    <div class="task__header w-75 d-flex justify-content-between">
                        <p class="task__paragraph task__title">Acheter du pain</p>
                        <input type="text" class="task__input--title form-control w-25 d-none" aria-label="Small">    
                        <p class="task__paragraph task__category">Nom de la catégorie</p>
                        <input type="text" class="task__input--category form-control w-25 d-none " aria-label="Small">    
                    </div>
                    <div lass="parent__buttons--action d-flex justify-content-evenly">
                        <button><span class="check fas fa-check-square" style="color: Dodgerblue" id="button1"></span></button>
                        <button><span class="modify fas fa-pen" style="color: purple"></span></button>
                        <button><span class="delete fas fa-trash" style="color: red"></span></button>
                    </div>
                    <div class="parent__progress mb-n2 mt-2 p-0 container">
                        <div class="progress-bar" name="progress bar" value="" role="progressbar" style="width: 55%;background-color: #7a7a7ac7; color:black" aria-valuenow="55" aria-valuemin="0" aria-valuemax="100">55%</div>
                    </div>
                </div>
            </div>
            <div class="parent__task container mt-3 p-3 shadow-incomplete">
                <div class="parent__row row d-flex justify-content-around">
                    <div class="task__header w-75 d-flex justify-content-between">
                        <p class="task__paragraph task__title">Acheter du pain</p>
                        <input type="text" class="task__input--title form-control w-25 d-none" aria-label="Small">    
                        <p class="task__paragraph task__category">Nom de la catégorie</p>
                        <input type="text" class="task__input--category form-control w-25 d-none " aria-label="Small">    
                    </div>
                    <div lass="parent__buttons--action d-flex justify-content-evenly">
                        <button><span class="check fas fa-check-square" style="color: Dodgerblue" id="button1"></span></button>
                        <button><span class="modify fas fa-pen" style="color: purple"></span></button>
                        <button><span class="delete fas fa-trash" style="color: red"></span></button>
                    </div>
                    <div class="parent__progress mb-n2 mt-2 p-0 container">
                        <div class="progress-bar" name="progress bar" value="" role="progressbar" style="width: 0%;background-color: #7a7a7ac7; color:black" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">0%</div>
                    </div>
                </div>
            </div>
        </div>
        <form action="" method="post" class="form p-1 mt-5 container ">
            <div class=" justify-content-center row row-cols-md-2">   
                <div class="form-group col-8">
                    <label >Tâche </label>
                    <input type="text" class="form-control formTitle_task" name="Task Title" placeholder="Titre de la tâche">
                </div>
                <div class="form-group col-8">
                    <label >Categorie </label>
                    <input type="text" class="form-control formCategory_task" name="Task Category" placeholder="Catégorie de la tâche">
                </div>
                <!-- <div class="w-100"></div> -->
                <div class="form__parent--progressBar form-group col-8">
                    <label>Pourcentage % </label>
                    <input  type="number" class="form-control formProgress_task" name="Task Progress" value="" placeholder="Progession de la tâche">
                    <div class='error'></div>
                </div>
            </div>
            <div class="row justify-content-center">
                <button type="submit" class="btn btn-default btn-primary rounded-pill"> 
                    <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-plus-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                        <path fill-rule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                    </svg>
                    Ajouter 
                </button>
            </div>
        </form>
        <template id="template">
            <div class="parent__task container mt-3 p-3" data-category="novelle-tache">
                <div class="parent__row row d-flex justify-content-around">
                    <div class="task__header w-75 d-flex justify-content-between">
                        <p class="task__paragraph  task__title templateTitle_task"></p>
                        <input type="text" class="task__input--title form-control w-25 d-none" aria-label="Small">    
                        <p class="task__paragraph task__ category templateCategory_task"></p>
                        <input type="text" class="task__input--category form-control w-25 d-none " aria-label="Small">    
                    </div>
                    <div lass="parent__buttons--action d-flex justify-content-evenly">
                        <button><span class="check  fas fa-check-square" style="color: Dodgerblue" id="button1"></span></button>
                        <button><span class="modify fas fa-pen" style="color: purple"></span></button>
                        <button><span class="delete fas fa-trash" style="color: red"></span></button>
                    </div>
                    <div class="parent__progress mb-n2 mt-2 p-0 container">
                        <div class="progress-bar templateProgress_task" name="progress bar" value="" role="progressbar" style="background-color: #7a7a7ac7; color:black" aria-valuenow="" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                </div>
            </div>
        </template>
    </main>
    <script src="https://kit.fontawesome.com/54b9013cb1.js" crossorigin="anonymous"></script>
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ho+j7jyWK8fNQe+A12Hb8AhRq26LrZ/JpcUGGOn+Y7RsweNrtN/tE3MoK7ZeZDyx" crossorigin="anonymous"></script>
    <script src="../js/app.js"></script>
</body>
</html>