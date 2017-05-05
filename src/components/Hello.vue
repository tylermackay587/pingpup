<template>
  <div class="hello container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 text">
        <h1>{{ msg }}</h1>
        <p class="lead">From counting to calculus.</p>
        <p>
        <a href="http://the-mathacademy.herokuapp.com/#/robot">
        <button role="button" class="btn btn-warning btn-large black">
          Play now
        </button>
        </a>
        </p>
      </div>
      <div class="col-xs-12 col-sm-4 graphics"> 
        <img src="http://res.cloudinary.com/dqd3ugvju/image/upload/v1493994053/pingpu-flying_vkmo8w.png"></img>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Learn math by programing a robot'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

@media screen and (max-width: 481px) {
  img {
    height: 100% !important;
    width: 100% !important;
  }
  h1 {
    font-size: 35px !important;
  }
}
@media screen and (max-width: 768px) {
  img {
    float: none !important;
  }
}
.black {
  font-size: 18px;
  font-weight: bold;
  padding: 15px 32px;
  color: black;
  background-color: #ffcc00;
  border-color: #e6b800;
  line-height: 1.33;
}
p {
  color: #CDF8FF;
  font-size: 25.5px;
  font-weight: 300;
  font-family: "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
}
img {
  float: left;
  height: 100%;
  width: 100%;
  max-height: 377px;
  max-width: 360px;
  display: inline;
  margin-top: auto;
  margin-bottom: auto;
}
.text {
  padding-top: 1vh;
}
.graphics {
  margin-top: auto;
  margin-bottom: auto;
}
.container {
  padding: 4vh;
}
.row {
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
}
.hello {
  background-image: linear-gradient(90deg, #22A3D8, #2884DC);
  width: 100%;
}
h1 {
  margin-top: auto;
  font-size: 55px;
  color: #fff;
}
</style>
