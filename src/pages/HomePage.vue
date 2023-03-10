<template>
    <!-- Hero -->
    <section id="homepage__hero">
        <img class="w-100 h-100" src="https://raw.githubusercontent.com/Pietro-fe01/portfolio/master/src/assets/loghi/jumbotron-1.jpg" alt="">

        <div class="hero__content d-flex flex-column justify-content-center align-items-center text-white h-100">
            <a class="open-cv-button text-decoration-none text-white" href="https://raw.githubusercontent.com/Pietro-fe01/portfolio/8ad2e7e543f541433e601bfd69c8a61a07e10931/src/assets/pietrofecarotta-cv.pdf" download target="_blank">
                <i class="fa-solid fa-cloud-arrow-down"></i>
                Download CV
            </a>
        </div>
    </section>
    
    <!-- Projects -->
    <section id="homepage__projects" class="text-white">
        <div class="ms-container">
            <h2 class="text-center text-dark m-text-cursive">My projects</h2>
        
            <div class="projects__container d-flex flex-wrap">
                <!-- Project card -->
                <div class="project__card" v-for="project in this.projects[this.currentPageNumber]">
                    <!-- project image -->
                    <a class="img-container" :href="project.link" target="_blank">
                        <div class="img-hover-zoom">
                            <img class="w-100" :src="project.img" :alt="`${project.name}-image`">
                        </div>
                    </a>
        
                    <!-- project info -->
                    <div class="project__info text-dark d-flex justify-content-between align-items-center">
                        <div>
                            <h4>{{ project.name }}</h4>
                            <small class="d-block text-white-alpha">
                                <span v-for="(technology, i) in project.technologies">
                                    {{ project.technologies.length - 1 === i ? technology + '.' : technology + ', ' }} 
                                </span>
                            </small>
                        </div>

                        <div class="project__responsive">
                            <span v-for="responsive in project.responsive">
                                <span class="device-icon" :class="responsive.status ? 'device-icon-green' : 'device-icon-red' " v-html="responsive.device"></span>
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Pagination section -->
            <div class="pagination-section text-dark d-flex justify-content-center">
                <div class="pagination__square" 
                v-for="num in Object.keys(this.projects).length" 
                @click="changeProjectsPagination(num)"
                :class="this.currentPageNumber === num ? 'pagination-active' : '' ">{{ num }}</div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: "HomePage",
        data() {
            return {
                currentPageNumber: 1,
                projects: {
                    1: [
                        {
                            name: 'Boolzapp | Whatsapp Web',
                            link: 'https://pietro-fe01.github.io/vue-boolzapp/',
                            img: 'https://raw.githubusercontent.com/Pietro-fe01/portfolio/master/src/assets/project-img/whatsapp-web2.png',
                            responsive: [
                                {
                                    device: '<i class="fa-solid fa-mobile-screen-button"></i>', 
                                    status: false
                                },
                                {
                                    device: '<i class="fa-solid fa-tablet-screen-button"></i>',
                                    status: true
                                },
                                {
                                    device:  '<i class="fa-solid fa-display"></i>', 
                                    status: true
                                }
                            ],
                            technologies: ['Html', 'Css', 'Javascript', 'Vue.js']
                        },
                        {
                            name: 'Boolify | Spotify web',
                            link: 'https://pietro-fe01.github.io/html-css-spotifyweb/',
                            img: 'https://raw.githubusercontent.com/Pietro-fe01/portfolio/master/src/assets/project-img/spotify-web.png',
                            responsive: [
                                {
                                    device: '<i class="fa-solid fa-mobile-screen-button"></i>', 
                                    status: false
                                },
                                {
                                    device: '<i class="fa-solid fa-tablet-screen-button"></i>',
                                    status: true
                                },
                                {
                                    device:  '<i class="fa-solid fa-display"></i>', 
                                    status: true
                                }
                            ],
                            technologies: ['Html', 'Css']
                        },
                        {
                            name: 'Discord',
                            link: 'https://pietro-fe01.github.io/htmlcss-discord/',
                            img: 'https://raw.githubusercontent.com/Pietro-fe01/portfolio/master/src/assets/project-img/discord.png',
                            responsive: [
                                {
                                    device: '<i class="fa-solid fa-mobile-screen-button"></i>', 
                                    status: false
                                },
                                {
                                    device: '<i class="fa-solid fa-tablet-screen-button"></i>',
                                    status: false
                                },
                                {
                                    device:  '<i class="fa-solid fa-display"></i>', 
                                    status: true
                                }
                            ],
                            technologies: ['Html', 'Css']
                        },
                        {
                            name: 'Dropbox',
                            link: 'https://pietro-fe01.github.io/htmlcss-dropbox/',
                            img: 'https://raw.githubusercontent.com/Pietro-fe01/portfolio/master/src/assets/project-img/dropbox.png',
                            responsive: [
                                {
                                    device: '<i class="fa-solid fa-mobile-screen-button"></i>', 
                                    status: false
                                },
                                {
                                    device: '<i class="fa-solid fa-tablet-screen-button"></i>',
                                    status: false
                                },
                                {
                                    device:  '<i class="fa-solid fa-display"></i>', 
                                    status: true
                                }
                            ],
                            technologies: ['Html', 'Css']
                        },
                        {
                            name: 'Minesweeper',
                            link: 'https://pietro-fe01.github.io/js-campominato/',
                            img: 'https://raw.githubusercontent.com/Pietro-fe01/portfolio/master/src/assets/project-img/campo-minato.png',
                            responsive: [
                                {
                                    device: '<i class="fa-solid fa-mobile-screen-button"></i>', 
                                    status: true
                                },
                                {
                                    device: '<i class="fa-solid fa-tablet-screen-button"></i>',
                                    status: true
                                },
                                {
                                    device:  '<i class="fa-solid fa-display"></i>', 
                                    status: true
                                }
                            ],
                            technologies: ['Html', 'Css', 'Javascript']
                        },
                        {
                            name: 'ToDo list',
                            link: 'https://pietro-fe01.github.io/vue-todolist/',
                            img: 'https://raw.githubusercontent.com/Pietro-fe01/portfolio/master/src/assets/project-img/todo-list-interactive.png',
                            responsive: [
                                {
                                    device: '<i class="fa-solid fa-mobile-screen-button"></i>', 
                                    status: false
                                },
                                {
                                    device: '<i class="fa-solid fa-tablet-screen-button"></i>',
                                    status: true
                                },
                                {
                                    device:  '<i class="fa-solid fa-display"></i>', 
                                    status: true
                                }
                            ],
                            technologies: ['Html', 'Css', 'Javascript']
                        },
                    ],
                    2: [
                        {
                            name: 'Boolando | Zalando',
                            link: 'https://pietro-fe01.github.io/html-css-boolando/',
                            img: 'https://raw.githubusercontent.com/Pietro-fe01/portfolio/master/src/assets/project-img/boolando.png',
                            responsive: [
                                {
                                    device: '<i class="fa-solid fa-mobile-screen-button"></i>', 
                                    status: false
                                },
                                {
                                    device: '<i class="fa-solid fa-tablet-screen-button"></i>',
                                    status: true
                                },
                                {
                                    device:  '<i class="fa-solid fa-display"></i>', 
                                    status: true
                                }
                            ],
                            technologies: ['Html', 'Css']
                        },
                        {
                            name: 'Boolean academy',
                            link: 'https://pietro-fe01.github.io/html-css-resp-wannabe/',
                            img: 'https://raw.githubusercontent.com/Pietro-fe01/portfolio/master/src/assets/project-img/boolean-academy.png',
                            responsive: [
                                {
                                    device: '<i class="fa-solid fa-mobile-screen-button"></i>', 
                                    status: true
                                },
                                {
                                    device: '<i class="fa-solid fa-tablet-screen-button"></i>',
                                    status: true
                                },
                                {
                                    device:  '<i class="fa-solid fa-display"></i>', 
                                    status: true
                                }
                            ],
                            technologies: ['Html', 'Css']
                        },
                        {
                            name: 'Social posts',
                            link: 'https://pietro-fe01.github.io/js-social-posts/',
                            img: 'https://raw.githubusercontent.com/Pietro-fe01/portfolio/master/src/assets/project-img/social-posts.png',
                            responsive: [
                                {
                                    device: '<i class="fa-solid fa-mobile-screen-button"></i>', 
                                    status: true
                                },
                                {
                                    device: '<i class="fa-solid fa-tablet-screen-button"></i>',
                                    status: true
                                },
                                {
                                    device:  '<i class="fa-solid fa-display"></i>', 
                                    status: true
                                }
                            ],
                            technologies: ['Html', 'Css', 'Javascript']
                        },
                        {
                            name: 'Vue slider',
                            link: 'https://pietro-fe01.github.io/vue-slider/',
                            img: 'https://raw.githubusercontent.com/Pietro-fe01/portfolio/master/src/assets/project-img/vue-slider.png',
                            responsive: [
                                {
                                    device: '<i class="fa-solid fa-mobile-screen-button"></i>', 
                                    status: false
                                },
                                {
                                    device: '<i class="fa-solid fa-tablet-screen-button"></i>',
                                    status: false
                                },
                                {
                                    device:  '<i class="fa-solid fa-display"></i>', 
                                    status: true
                                }
                            ],
                            technologies: ['Html', 'Css', 'Javascript', 'Vue.js']
                        },
                    ],
                }
            }
        },
        methods: {
            changeProjectsPagination(pageNumber){
                this.currentPageNumber = pageNumber;
                window.scroll({
                    top: 650,
                    behavior: 'smooth'
                })
            }
        }
    };
</script>

<style scoped>
/*-------------------------------------
    HERO 
--------------------------------------*/
    #homepage__hero {
        position: relative;
        width: 100%;
        background-repeat: no-repeat;
        background-position: center;
        object-fit: cover;
        height: calc(100vh - 70px);
        background-size: 100%;
    }
    #homepage__hero img {
        object-fit: cover;
    }
    .hero__content {
        position: absolute;
        top: 26%;
        left: 50%;
        transform: translate(-50%, 0);
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

/*-------------------------------------
    PROJECTS 
--------------------------------------*/
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
        padding: 0 15px;
        width: calc(100% / 2);
    }
    .project__card img {
        height: 250px;
        object-fit: cover;
        object-position: top;
        display: block;
    }
    .img-hover-zoom {
        height: 250px; 
        width: 100%;
        overflow: hidden; 
    }
    .img-hover-zoom img {
        transform: scale(1.4);
        filter: blur(1px);
        transition: all .5s ease;
    }
    .img-hover-zoom:hover img {
        transform: scale(1);
        filter: blur(0px);
    }
    .project__info {
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(35, 31, 32, 0.7);
        color: white;
        padding: 10px;
        margin: 0 15px;
    }
    .project__responsive .device-icon {
        margin-left: 15px;
    }
    .project__responsive .device-icon-red {
        color: #ff5a36;
        border: 1px solid #ff5a36;
        border-radius: 50%;
        padding: 5px 9px;
    }
    .project__responsive .device-icon-green {
        color: lime;
        border: 1px solid lime;
        border-radius: 50%;
        padding: 5px 9px;
    }
    .pagination-section .pagination__square {
        width: 30px;
        height: 30px;
        text-align: center;
        line-height: 30px;
        cursor: pointer;
        border: 1px solid black;
        transition: all 0.4s;
    }
    .pagination-section .pagination__square:hover {
        transform: scale(1.1);
    }
    .pagination-active {
        background-color: #231f20;
        color: white;
    }

/*-------------------------------------
    RESPONSIVE 
--------------------------------------*/
    @media screen and (max-width: 900px) {
        .project__card {
            width: 100%;
        }
    }
</style>