<template>
    <!-- Hero -->
    <section id="homepage__hero">
        <div class="hero__content d-flex flex-column justify-content-center align-items-center text-white h-100">
            <!-- <h1>Pietro Fecarotta</h1> -->
    
            <a class="open-cv-button text-decoration-none text-white" href="https://onedrive.live.com/?cid=CDC3D5BF6FB4B00E&id=CDC3D5BF6FB4B00E%2196075&parId=CDC3D5BF6FB4B00E%2175839&o=OneUp" target="_blank">
                <i class="fa-solid fa-cloud-arrow-down"></i>
                Open CV
            </a>
        </div>
    </section>
    
    <!-- Projects -->
    <section id="homepage__projects" class="text-white">
        <div class="ms-container">
            <h2 class="text-center text-dark m-text-cursive">My projects</h2>
        
            <div class="projects__container d-flex flex-wrap">
                <!-- Project card -->
                <div class="project__card col-6" v-for="project in this.projects">
                    <!-- project image -->
                    <a :href="project.link" target="_blank">
                        <img class="w-100" :src="project.img" alt="ciao">
                    </a>
        
                    <!-- project info -->
                    <div class="project__info text-dark">
                        <h4>{{ project.name }}</h4>
                        <small class="d-block text-white-alpha">
                            <span v-for="(technology, i) in project.technologies">
                                {{ project.technologies.length - 1 === i ? technology + '.' : technology + ', ' }} 
                            </span>
                        </small>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: "HomePage",
        data() {
            return {
                projects: [
                    {
                        name: 'Boolzapp | Whatsapp Web',
                        link: 'https://pietro-fe01.github.io/vue-boolzapp/',
                        img: 'https://raw.githubusercontent.com/Pietro-fe01/portfolio/master/src/assets/project-img/whatsapp-web2.png',
                        technologies: ['Html', 'Css', 'Javascript', 'Vue.js']
                    },
                    {
                        name: 'Boolify | Spotify web',
                        link: 'https://pietro-fe01.github.io/html-css-spotifyweb/',
                        img: 'https://raw.githubusercontent.com/Pietro-fe01/portfolio/master/src/assets/project-img/spotify-web.png',
                        technologies: ['Html', 'Css']
                    },
                    {
                        name: 'Discord',
                        link: 'https://pietro-fe01.github.io/htmlcss-discord/',
                        img: 'https://raw.githubusercontent.com/Pietro-fe01/portfolio/master/src/assets/project-img/discord.png',
                        technologies: ['Html', 'Css']
                    },
                    {
                        name: 'Dropbox',
                        link: 'https://pietro-fe01.github.io/htmlcss-dropbox/',
                        img: 'https://raw.githubusercontent.com/Pietro-fe01/portfolio/master/src/assets/project-img/dropbox.png',
                        technologies: ['Html', 'Css']
                    },
                    {
                        name: 'Minesweeper',
                        link: 'https://pietro-fe01.github.io/js-campominato/',
                        img: 'https://raw.githubusercontent.com/Pietro-fe01/portfolio/master/src/assets/project-img/campo-minato.png',
                        technologies: ['Html', 'Css', 'Javascript']
                    },
                    {
                        name: 'ToDo list',
                        link: 'https://pietro-fe01.github.io/vue-todolist/',
                        img: 'https://raw.githubusercontent.com/Pietro-fe01/portfolio/master/src/assets/project-img/todo-list-interactive.png',
                        technologies: ['Html', 'Css', 'Javascript']
                    },
                    {
                        name: 'Boolando | Zalando',
                        link: 'https://pietro-fe01.github.io/html-css-boolando/',
                        img: 'https://raw.githubusercontent.com/Pietro-fe01/portfolio/master/src/assets/project-img/todo-list-interactive.png',
                        technologies: ['Html', 'Css']
                    },
                    {
                        name: 'Boolean academy',
                        link: 'https://pietro-fe01.github.io/html-css-resp-wannabe/',
                        img: 'https://raw.githubusercontent.com/Pietro-fe01/portfolio/master/src/assets/project-img/todo-list-interactive.png',
                        technologies: ['Html', 'Css']
                    },
                ]
            }
        }
    };
</script>

<style scoped>
    /*--- HERO ---*/
    #homepage__hero {
        background-image: url("https://raw.githubusercontent.com/Pietro-fe01/portfolio/master/src/assets/loghi/jumbotron-2.jpg");
        width: 100%;
        background-repeat: no-repeat;
        background-position: center;
        object-fit: cover;
        height: calc(100vh - 70px);
        background-size: 100%;
    }
    .hero__content {
        position: relative;
        top: 170px;
    }
    #homepage__hero .open-cv-button {
        background-color: black;
        padding: 8px 20px;
        border-radius: 15px;
    }
    #homepage__hero .open-cv-button:hover {
        background-color: black;
        padding: 8px 20px;
        border-radius: 15px;
    }
    #homepage__hero .open-cv-button i {
        margin-right: 5px;
    }
    
    /*--- PROJECTS ---*/
    #homepage__projects {
        padding: 40px 0 60px 0;
        background-color: white;
    }
    h2 {
        margin-bottom: 30px;
        font-size: 45px;
    }
    .project__card {
        position: relative;
        margin-bottom: 35px;
    }
    .project__info {
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(0, 0, 0, 0.7);
        color: white;
        padding: 10px;
        margin: 0 15px;
    }
    img {
        height: 250px;
        object-fit: cover;
        object-position: top;
        display: block;
    }
</style>