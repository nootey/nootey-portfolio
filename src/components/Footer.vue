<template>
  <footer class="footer">
      <div style="font-size: 1rem;" class="align-items-center;">
        Copyright © {{ currentYear }} | Bure web designs | All Rights Reserved
      </div>
  </footer>
</template>


<script setup>
import moment from "moment";

const currentYear = moment().year();
</script>
    
    <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.footer {
  border-top: 20px solid var(--accent-color);
  margin-top: -140px;
  background: #262323;
  align-content: center;
  align-items: center;
  justify-content: center;
  //padding: 2rem;
  text-align: center;
  position: relative;
  width: 100%;
  height: 150px;
}
</style>