<template>
    <Smoothie id="about" :weight="0.01" class="smoothie-container">
      <div class="col p-5 g-3">

        <div class="title">About me</div>

        <div class="paragraph-text flex flex-row p-3 text-left mt-3">
          Hi! My name is Jure. I'm an Information and communication technology graduate from University in Ljubljana, Slovenia.
          I work full-time as a full-stack developer and part time as a freelancer, offering various services.
          I'm passionate about software development, but my hobbies extend to artificial intelligence, crypto, fitness and design.
        </div>

        <div class="paragraph-text row p-4 mx-auto text-center justify-content-center">
          <div class="row justify-content-center p-1">
            My main tech stack:
          </div>
          <div class="icon-display row mx-auto text-center justify-content-center p-3">
            <div class="col col-auto min-width-col">
              <img src="@/assets/langugage-icons/laravel-2.svg" alt="Laravel"
                   height="50" title="Laravel"/>
            </div>
            <div class="col col-auto min-width-col">
              <img src="@/assets/langugage-icons/vue-9.svg" alt="Vue"
                   height="50" title="Vue"/>
            </div>
            <div class="col col-auto min-width-col">
              <img src="@/assets/langugage-icons/mysql-6.svg" alt="MySQL"
                   height="50" title="MySQL"/>
            </div>
            <div class="col col-auto min-width-col">
              <img src="@/assets/langugage-icons/Python.svg" alt="Python"
                   height="50" title="Python"/>
            </div>
          </div>
        </div>

        <div class="paragraph-text row p-4 mx-auto text-center justify-content-center">
          <div class="row justify-content-center p-1">
            I'm currently using:
          </div>
          <div class="icon-display row mx-auto text-center justify-content-center p-3">
            <div class="col col-auto min-width-col">
              <img src="@/assets/langugage-icons/Go.svg" alt="Go"
                   height="50" width="90" title="Go"/>
            </div>
            <div class="col col-auto min-width-col">
              <img src="@/assets/langugage-icons/vue-9.svg" alt="Vue"
                   height="50"
                    title="Vue"/>
            </div>
            <div class="col col-auto min-width-col">
              <img src="@/assets/langugage-icons/mongodb-icon-1-1.svg" alt="MongoDB"
                   height="50"  title="MongoDB"/>
            </div>
          </div>
        </div>

        <div class="paragraph-text row p-4 mx-auto text-center justify-content-center">
          <div class="row justify-content-center p-1">
            I'm currently learning:
          </div>
          <div class="icon-display row mx-auto text-center justify-content-center p-3">
            <div class="col col-auto min-width-col">
              <img src="@/assets/langugage-icons/Rust.svg" alt="Rust"
                   width="50"
                   height="50" title="Rust"/>
            </div>
          </div>
        </div>

        <div class="paragraph-text row p-4 mx-auto text-center justify-content-center">
          <div class="row justify-content-center p-1">
           Socials:
          </div>
          <div class="icon-display row mx-auto text-center justify-content-center p-3">

            <div class="col col-auto min-width-col">
              <a href="https://github.com/nootey" target="_blank" rel="noopener noreferrer">
                <img src="@/assets/socials/github-icon-2.svg" alt="Github"
                     height="50" title="Github"/>
              </a>
            </div>
            <div class="col col-auto min-width-col" >
              <a href="https://www.linkedin.com/in/jurebovha/" target="_blank" rel="noopener noreferrer">
                <img src="@/assets/socials/linkedin-icon.svg" alt="LinkedIn"
                     height="50" title="LinkedIn"/>
              </a>
            </div>
            <div class="col col-auto min-width-col">
              <a href="mailto:poiskusni@proton.me">
                <img src="@/assets/socials/mail-ios.svg" alt="Email"
                     height="50" title="Email"/>
              </a>
            </div>
            <div class="col col-auto min-width-col">
              <a href="https://linktr.ee/jurebovha" target="_blank" rel="noopener noreferrer">
                <img src="@/assets/socials/linktree-2.svg" alt="Linktree"
                     height="50" title="Linktree"/>
              </a>
            </div>

          </div>
        </div>
      
      </div>
    </Smoothie>
   
  </template>
    
    <script>
    import { Smoothie } from "vue-smoothie";
  
    export default {
      name: 'About',
      components: {Smoothie},
      setup() {
        return {
  
        }
      }
    }
    </script>
    
    <!-- Add "scoped" attribute to limit CSS to this component only -->
    <style scoped>
  
    </style>