<script>
    export default {
        name: 'AppHeader',
        data() {
            return {
                
            }
        },
        methods: {
            openDroopdown() {
                const dropContent = document.querySelector('.menu .dropdown-content');
                if ( dropContent.classList.contains('d-block') ) {
                    dropContent.classList.remove('d-block');
                } else {
                    dropContent.classList.add('d-block');
                }
            },
            scrollPage(action) {
                switch (action) {
                    case 'toTop':
                        window.scroll({
                            top: 0,
                            behavior: 'smooth'
                        })
                        break;
                    case 'toProjects':
                        const projects = document.querySelector('#homepage__projects');
                        console.log(projects.offsetHeight)

                        window.scroll({
                            top: 650,
                            behavior: 'smooth'
                        })
                        break;
                    case 'toContacts':
                        // Get max scroll height page
                        const limit = Math.max( document.body.scrollHeight, document.body.offsetHeight, document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight );
                        
                        window.scroll({
                            top: limit,
                            behavior: 'smooth'
                        })
                        break;
                }
            }
        }
    }
</script>

<template>
    <header>
        <div class="h-100 ms-container d-flex justify-content-between">
            <router-link :to="{ name: 'homepage' }" class="text-decoration-none text-white" @click="scrollPage('toTop')">
                <img src="https://raw.githubusercontent.com/Pietro-fe01/portfolio/master/src/assets/loghi/logo.jpg" alt="" style="width: 70px;">
            </router-link>

            <nav class="menu">
                <div class="dropdown">
                    <button @click="openDroopdown()">
                        <i class="fa-solid fa-bars"></i>
                    </button>
                    <div class="dropdown-content">
                        <div @click="scrollPage('toProjects')">Projects</div>
                        <div @click="scrollPage('toContacts')">Contacts</div>
                    </div>
                </div>
            </nav>
        </div>
    </header>
</template>

<style scoped>
/*-------------------------------------
    HEADER 
--------------------------------------*/
    header {
        position: sticky;
        top: 0;
        left: 0;
        right: 0;
        z-index: 20;
        filter: drop-shadow(0px -8px 8px white);
        height: 70px;
        line-height: 70px;
        background-color: #231f20;
        color: white;
    }
    header .title-portfolio {
        font-size: 30px;
    }

/*-------------------------------------
    DROPDOWN MENU 
--------------------------------------*/
    .dropdown {
        display: inline-block;
        position: relative;
    }
    .dropdown button {
        border: none;
        border: 0.5px solid white;
        padding: 10px 20px;
        background-color: transparent;
        color: white;
        cursor: pointer;
    }
    .dropdown-content {
        width: 200px;
        text-align: center;
        display: none;
        position: absolute;
        right: 0;
        overflow: auto;
        background-color: white;
        color: black;
        box-shadow: 0px 10px 10px 0px rgba(0,0,0,0.4);
        z-index: 10;
    }
</style>