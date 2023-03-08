<template>
    <!-- Hero -->
    <section id="homepage__hero">
        <div class="d-flex flex-column justify-content-center align-items-center text-white h-100">
            <h1>Pietro Fecarotta</h1>
    
            <a class="text-decoration-none text-white" href="https://onedrive.live.com/?cid=CDC3D5BF6FB4B00E&id=CDC3D5BF6FB4B00E%2196075&parId=CDC3D5BF6FB4B00E%2175839&o=OneUp" target="_blank">
            <i class="fa-solid fa-cloud-arrow-down"></i>
            Download CV
            </a>
        </div>
    </section>
    
    <!-- Projects -->
    <section id="homepage__projects" class="text-white">
        <div class="ms-container">
            <h3 class="text-center">MY PROJECTS</h3>
        
            <div class="projects__container d-flex flex-wrap">
                <!-- Project card -->
                <div class="project__card col-6" v-for="project in this.projects">
                    <!-- project image -->
                    <a :href="project.link" target="_blank">
                    <img class="w-100" :src="project.img" alt="ciao">
                    </a>
        
                    <!-- project info -->
                    <div class="project__info">
                        {{ project.name }}
                        <small class="d-block text-muted">
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
                    img: 'https://raw.githubusercontent.com/Pietro-fe01/portfolio/master/src/assets/whatsapp-web2.png',
                    technologies: ['Html', 'Css', 'Javascript', 'Vue.js']
                },
                {
                    name: 'Boolify | Spotify web',
                    link: 'https://pietro-fe01.github.io/html-css-spotifyweb/',
                    img: 'https://raw.githubusercontent.com/Pietro-fe01/portfolio/master/src/assets/spotify-web.png',
                    technologies: ['Html', 'Css']
                },
                {
                    name: 'Discord',
                    link: 'https://pietro-fe01.github.io/htmlcss-discord/',
                    img: 'https://raw.githubusercontent.com/Pietro-fe01/portfolio/master/src/assets/discord.png',
                    technologies: ['Html', 'Css']
                },
                {
                    name: 'Dropbox',
                    link: 'https://pietro-fe01.github.io/htmlcss-dropbox/',
                    img: 'https://raw.githubusercontent.com/Pietro-fe01/portfolio/master/src/assets/dropbox.png',
                    technologies: ['Html', 'Css']
                },
                {
                    name: 'Minesweeper',
                    link: 'https://pietro-fe01.github.io/js-campominato/',
                    img: 'https://raw.githubusercontent.com/Pietro-fe01/portfolio/master/src/assets/campo-minato.png',
                    technologies: ['Html', 'Css', 'Javascript']
                },
                {
                    name: 'ToDo list',
                    link: 'https://pietro-fe01.github.io/vue-todolist/',
                    img: 'https://raw.githubusercontent.com/Pietro-fe01/portfolio/master/src/assets/todo-list-interactive.png',
                    technologies: ['Html', 'Css', 'Javascript']
                },
                ]
            }
        }
    };
</script>

<style scoped>
    #homepage__hero {
        background-image: url("https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fHNwYXppb3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60");
        width: 100%;
        background-repeat: no-repeat;
        object-fit: cover;
        height: calc(100vh - 70px);
        background-size: 100%;
    }
    #homepage__projects {
        padding: 70px 0;
        background-color: black;
    }
    h3 {
        margin-bottom: 30px;
    }
    img {
        height: 190px;
        object-fit: cover;
        object-position: top;
    }
</style>