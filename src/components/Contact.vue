<template>

  <div class="rectangle">
    <h2>Contact</h2>
  </div>

  <Smoothie id="contact" :weight="0.01" class="smoothie-container" style="border-bottom-left-radius: 20px; border-bottom-right-radius: 20px; border-left: 1px solid var(--text-color-primary); border-right: 1px solid var(--text-color-primary);">
    <div class="col p-5 gap-5 mt-5" style="width: 90%; margin-right: auto;">

      <div class="row w-100 align-items-center justify-content-center gap-2">

        <div class="col w-50 p-2">

          <form style="width: 60%; border-top-left-radius: 20px; border-top: 8px solid var(--accent-color); border-left: 8px solid var(--accent-color)">
            <!-- Name -->
            <div class="form-group" style="width: 90%;">
              <label for="formName" class="d-block">
                <i class="icon" data-feather="user"></i>
              </label>
              <input type="text" id="formName" class="form-control form-control-lg thick" placeholder="Name">
            </div>

            <!-- E-mail -->
            <div class="form-group position-relative" style="width: 90%;">
              <label for="formEmail" class="d-block">
                <i class="icon" data-feather="mail"></i>
              </label>
              <input type="email" id="formEmail" class="form-control form-control-lg thick" placeholder="E-mail">
            </div>

            <!-- Message -->
            <div class="form-group message" style="width: 90%;">
              <textarea id="formMessage" class="form-control form-control-lg" rows="7" placeholder="Message"></textarea>
            </div>

            <div class="row mt-3 w-75" style="margin-left: 25%; !important">
              <div class="col" >
                <button type="button" class="main-button" tabIndex="-1"   @click="sendMessage">Send message</button>
              </div>
            </div>

          </form>


        </div>

        <div class="col w-50">
          <animated-component>
            <div class="title">Get in touch</div>
          </animated-component>

          <div class="paragraph-text flex flex-row p-3 text-left">
            Have any questions? Feel free to contact me, and I'll be happy to assist you as soon as possible.
          </div>

          <div class="paragraph-text flex flex-row p-3 text-left">
            You can also directly write to the email bellow.
          </div>

          <div class="paragraph-text flex flex-row p-3">
            <div class="row" style="border-left: 5px solid var(--accent-color);">
              <div class="row"><b>Email</b></div>
              <div class="row"><span>poiskusni@gmail.com</span></div>
            </div>
          </div>
        </div>

      </div>

    </div>

  </Smoothie>

  </template>
    
  <script>
  import { Smoothie } from "vue-smoothie";
  import AnimatedComponent from "@/components/reusable/AnimatedComponent.vue";
  import Footer from "@/components/Footer.vue"

  export default {
    name: 'Contact',
    props: ['darkMode'],
    components: {AnimatedComponent, Smoothie, Footer},
    setup() {
      function sendMessage(){
        let formName = document.getElementById('formName');
        let name = formName.value;
        let formEmail = document.getElementById('formEmail');
        let email = formEmail.value;
        let formMessage = document.getElementById('formMessage');
        let message = formMessage.value;

        console.log(name)
        console.log(email)
        console.log(message)
      }
      return {
        sendMessage
      }
    }
  }
  </script>

  <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
form {
    max-width: 50rem;
    margin: 0 auto;
    .form-control {
      margin: 20px;
      background-color: var(--background-color-secondary);
      border-radius: 2rem;
      border: none;
      box-shadow: 0px 4px 2px rgba(0, 0, 0, 0.11);

      &.thick {
        height: 3.3rem;
        padding: .5rem 3.5rem;
      }

      &:focus {
        border: 1px solid var(--accent-color);
        box-shadow: 0px 7px 5px rgba(0, 0, 0, 0.11);
      }
    }

    .message .form-control {
      padding: .5rem 1.8rem;
    }

    ::placeholder {
      font-family: 'Quicksand', sans-serif;
      font-weight: 600;
      font-size: 1.1rem;
      color: #838788;
      position: relative;
      left: 0;
    }

    input,
    textarea {
      font-family: 'Quicksand', sans-serif;
      color: #212529;
      font-size: 1.1rem;
      max-height: 500px;
    }

    .icon {
      color: #57565c;
      height: 1.3rem;
      position: absolute;
      left: 1.5rem;
      top: 1.1rem;
    }
  }

.rectangle {
  position: absolute;
  z-index: 2;
  background-color: var(--accent-color);
  transform: translateY(50%);
  top: 305%;
  height: 50%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: calc(((100vw - 1504px) / 2) + 90px);
  right: 0;
  border-top-left-radius: 25px;
  border-bottom-left-radius: 25px;
  padding-right: 3.5rem;
}

.rectangle h2 {
  background: none !important;
  text-transform: uppercase;
  font-size: 1.75rem;
  font-weight: 700;
  color: var(--background-color-primary);
  display: flex;
  align-items: center;
  margin-bottom: 0;
  transform: rotate(-90deg);
}

</style>