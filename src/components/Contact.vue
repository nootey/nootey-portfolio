<template>
    <Smoothie id="contact" :weight="0.01" class="smoothie-container">
        <div class="h-screen col">

          <div class="title">Contact</div>

          <div clasS="p-2 col justify-content-center">
            <form>
              <!-- Name -->
              <div class="form-group">
                <label for="formName" class="d-block">
                  <i class="icon" data-feather="user"></i>
                </label>
                <input type="text" id="formName" class="form-control form-control-lg thick" placeholder="Name">
              </div>

              <!-- E-mail -->
              <div class="form-group position-relative">
                <label for="formEmail" class="d-block">
                  <i class="icon" data-feather="mail"></i>
                </label>
                <input type="email" id="formEmail" class="form-control form-control-lg thick" placeholder="E-mail">
              </div>

              <!-- Message -->
              <div class="form-group message">
                <textarea id="formMessage" class="form-control form-control-lg" rows="7" placeholder="Message"></textarea>
              </div>

              <!-- Submit btn -->
              <div class="text-center">
                <button type="button" class="btn btn-primary" tabIndex="-1" @click="sendMessage">Send message</button>
              </div>
            </form>
          </div>

        </div>
    </Smoothie>
   
  </template>
    
  <script>
  import { Smoothie } from "vue-smoothie";

  export default {
    name: 'Contact',
    components: {Smoothie},
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
        border: 1px solid var(--accent-grad-1);
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
    }

    .icon {
      color: #57565c;
      height: 1.3rem;
      position: absolute;
      left: 1.5rem;
      top: 1.1rem;
    }
  }

</style>