<script>
    export default {
        name: 'AppFooter'
    }
</script>

<template>
    <footer>
        <div class="ms-container d-flex justify-content-between">
            <nav id="about-me" class="w-25">
                <ul>
                    <h2 class="m-text-cursive">About me</h2>
                    <li>
                        Un ragazzo preciso, ambizioso, proattivo e con unobiettivo ben preciso: diventare un abile programmatore! <br/>
                        Non smetto mai di avere voglia di imparare qualcosa di nuovo, so adattare le mie
                        esperienze a nuove situazioni e soprattutto sono molto determinato, riuscendo in tutto ciò che mi prefisso.
                    </li>
                </ul>
            </nav>

            <nav id="contacts">
                <ul>
                    <h2 class="m-text-cursive">Contacts</h2>
                    <li>
                        <i class="fa-solid fa-phone-volume"></i> 
                        <span>+39 329 333 7059</span>
                    </li>
                    <li>
                        <i class="fa-solid fa-envelope"></i> 
                        <span>pietrofecarotta2001@gmail.com</span>
                    </li>
                    <li>
                        <i class="fa-solid fa-location-dot"></i> 
                        <span>Palermo, Sicilia, Italy</span>
                    </li>
                </ul>
            </nav>

            <nav id="social">
                <ul>
                    <h2 class="m-text-cursive">Social</h2>
                    <li>
                        <a href="https://www.linkedin.com/in/pietro-fecarotta-77851822b">
                            <i class="fa-brands fa-linkedin"></i> 
                            <span>Linkedin</span>
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/Pietro-fe01">
                            <i class="fa-brands fa-github"></i> 
                            <span>GitHub</span>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.sololearn.com/profile/13426539/?ref=app">
                            <i class="fa-solid fa-graduation-cap"></i> 
                            <span>Sololearn</span>
                        </a>
                    </li>
                </ul>
            </nav>

            <nav id="skills">
                <ul>
                    <h2 class="m-text-cursive">Skills</h2>
                    <li class="d-flex align-items-center flex-wrap">
                        <div class="d-flex flex-column align-items-center">
                            <i class="fa-brands fa-html5"></i>
                            <span>Html</span>
                        </div>
                        <div class="d-flex flex-column align-items-center">
                            <i class="fa-brands fa-css3"></i>
                            <span>Css</span>
                        </div>
                        <div class="d-flex flex-column align-items-center">
                            <i class="fa-brands fa-bootstrap"></i>
                            <span>Bootstrap</span>
                        </div>
                        <div class="d-flex flex-column align-items-center">
                            <i class="fa-brands fa-square-js"></i>
                            <span>Javascript</span>
                        </div>
                        <div class="d-flex flex-column align-items-center">
                            <i class="fa-brands fa-vuejs"></i>
                            <span>Vue.js</span>
                        </div>
                        <div class="d-flex flex-column align-items-center">
                            <img src="https://vitejs.dev/logo.svg" alt="" width="37px">
                            <span>Vite.js</span>
                        </div>
                        <div class="d-flex flex-column align-items-center">
                            <i class="fa-brands fa-php"></i>
                            <span>Php</span>
                        </div>
                        <div class="d-flex flex-column align-items-center">
                            <i class="fa-brands fa-sass"></i>
                            <span>Sass</span>
                        </div>                    
                        <div class="d-flex flex-column align-items-center">
                            <i class="fa-brands fa-laravel"></i>
                            <span>Laravel</span>
                        </div>
                        <div class="d-flex flex-column align-items-center">
                            <i class="fa-brands fa-git-alt"></i>
                            <span>Git</span>
                        </div>
                    </li>
                </ul>
            </nav>
        </div>
    </footer>
</template>

<style scoped>
    footer {
        background-color: #231f20;
        color: white;
        padding: 40px 0 ;
    }
    nav h2 {
        margin-bottom: 15px;
    }
    nav ul {
        list-style: none;
    }
    nav ul li {
        padding: 5px 0;
    }
    nav ul li a {
        text-decoration: none;
    }

    /*--- CONTACTS ---*/
    #contacts ul li i {
        margin-right: 7px;
    }

    /*--- SOCIAL ---*/
    #social ul li a {
        text-decoration: none;
        color: white;
    }
    #social ul li a:hover span {
        text-decoration: underline;  
    }
    #social ul li a i {
        margin-right: 7px;
    }

    /*--- SKILLS ---*/
    #skills i {
        font-size: 30px;
    }
    #skills ul li > div {
        width: calc(100% / 5);
        margin-bottom: 5px;
    }
    #skills ul li > div span {
        opacity: 0;
        transition: all 0.3s;
        position: relative;
        top: -10px;
    }
    #skills ul li > div:hover span {
        opacity: 1;
        top: 0;
    }
    #skills .fa-html5 {
        color: #F16529;
    }
    #skills .fa-css3{
        color: #2965f1;
    }
    #skills .fa-bootstrap{
        color: #563d7c;
    }
    #skills .fa-square-js{
        color: yellow;
    }
    #skills .fa-vuejs{
        color: #42b883;
    }
    #skills .fa-php{
        color: #8993be;
    }
    #skills .fa-sass{
        color: #c69 ;
    }
    #skills .fa-laravel{
        color: #fb503b;
    }
    #skills .fa-git-alt{
        color: #f34f29;
    }
</style>