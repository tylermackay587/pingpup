<template>
	<footer>
		<div class="container">
      <div class="row"> 
        <div class="col-xs-12 col-sm-4">
        <router-link to="/">
        <img src="https://res.cloudinary.com/dqd3ugvju/image/upload/v1494416429/pingPupLogo_bqlekg.png">
        </router-link>
        </div>
        <div class="col-xs-12 col-sm-12">
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