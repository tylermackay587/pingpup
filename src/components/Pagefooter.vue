<template>
	<footer>
		<div class="container">
      <div class="row"> 
        <div class="col-xs-12 col-sm-4">
        <router-link to="/">
        <img src="https://res.cloudinary.com/dqd3ugvju/image/upload/v1493996372/pingPupLogo_sebhxx.png">
        </router-link>
        </div>
        <div class="col-xs-12 col-sm-12">
          <ul>
            <li>
            <router-link to="/about">
            <i class="fa fa-angle-right"></i>
            About
            </router-link>
            </li>
            <li>
            <router-link to="/pricing">
            <i class="fa fa-angle-right"></i>
            Pricing
            </router-link>
            </li>
          </ul>
        </div>
      </div>
		</div>
	</footer>
</template>

<script>
	
</script>

<style scoped>
@media screen and (max-width: 771px) {
  img {
    height: 35% !important;
    width: 35% !important;
  }
}
.row {
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
}
a {
  color: #3aa9ed;
  font-size: 18px;
  font-weight: 500;
  font-family: "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
}
ul {
  float: left;
}
li {
}
img {
  margin-top: 20px;
  width: 65% ;
  height: 65% ;
  float: left;
}
footer {
  padding-bottom: 10px;
  bottom: 0;
  width: 100%;
	background: #2e3137;
}
</style>