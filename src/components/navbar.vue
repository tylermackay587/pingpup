<template>
<div class="container-fluid">
    <div class="row">
    <router-link to="/">
      <div class="col col-xs-2 col-sm-2 col-md-2 col-lg-2">
        <img src="https://res.cloudinary.com/dqd3ugvju/image/upload/v1493996372/pingPupLogo_sebhxx.png">
      </div>
    </router-link>
      <div class="col col-xs-6 col-sm-8 col-md-8 col-lg-8">
      </div>
      <div class="col col-xs-4 col-sm-2 col-md-2 col-lg-2">
        <div class="button-container">
        <a href="https://the-mathacademy.herokuapp.com/#/signup">
          <button id="signup" type="button" class="btn btn-sm btn-success signup">Sign up</button>
        </a>
        </div>
      </div>
    </div>
</div>
</template>


<style scoped>
.button-container {
  margin-top: 1.7em;
  float: right;
}
.row {
  height: 6em;
  width: 100%;
  margin: auto;
  max-width: 1200px;
}
.col > img {
  height: 5.5em;
  margin-top: .3em;
}
.container-fluid {
  padding: 0;
  width: 100%;
  border-bottom: 1px solid #AAAAAA;
}
.signup {
  padding: .6em .7em .7em .7em;
  font-size: 1.1em;
  text-align: center;
  height: 2.6em;
  font-weight: bold;
  background-color: #8DC63F;
  border-color: #80b636;
}
img {
  float: left;
}

</style>
