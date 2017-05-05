<template>
	<div class="container-fluid">
    <div class="row info">
      <div class="col-xs-0 col-sm-1 col-md-1 col-lg-1">
      </div>
      <div class="col col-xs-offset-3 col-xs-6 col-sm-offset-0 col-md-offset-0 col-lg-offset-0 col-sm-3 col-md-3 col-lg-3 pull-left">
      <img class="img-responsive" src="https://res.cloudinary.com/dqd3ugvju/image/upload/v1493994053/pingpuCape_yjfpz0.png">
      </div>
      <div class="col col-xs-12 col-sm-6 col-md-6 col-lg-6 text">
        <h3>For kids and adults.</h3>
        <h4>To get started you don't need to know how to read or add, but before you're finished you'll know how to calculate derivatives.</h4>
      </div>
      <div class="col-xs-0 col-sm-1 col-md-1 col-lg-1">
      </div>
    </div>
    <div class="row info">
      <div class="col-xs-0 col-sm-1 col-md-1 col-lg-1">
      </div>
      <div class="col col-xs-offset-3 col-xs-6 col-sm-offset-0 col-md-offset-0 col-lg-offset-0 col-sm-3 col-md-3 col-lg-3 col-sm-pull-right ifSmall big">
      <img class="img-responsive big" src="https://res.cloudinary.com/dqd3ugvju/image/upload/v1493994053/pingpupNoCape_q58ng0.jpg">
      </div>
      <div class="col col-xs-12 col-sm-6 col-md-6 col-lg-6 pull-left text">
        <h3>Super easy peasey.</h3>
        <h4>Programming is simple. In fact, mathbot only has four commands (step forward, turn right, pickup and put down) so you'll be crushing problems in under 3 minutes.</h4>
      </div>
      <div class="col col-xs-offset-3 col-xs-6 col-sm-offset-0 col-md-offset-0 col-lg-offset-0 col-sm-3 col-md-3 col-lg-3 col-sm-pull-right ifLarge big">
      <img class="img-responsive big" src="https://res.cloudinary.com/dqd3ugvju/image/upload/v1493994053/pingpupNoCape_q58ng0.jpg">
      </div>
      <div class="col-xs-0 col-sm-1 col-md-1 col-lg-1">
      </div>
    </div>
    <div class="row info">
      <div class="col-xs-0 col-sm-1 col-md-1 col-lg-1">
      </div>
      <div class="col col-xs-offset-3 col-xs-6 col-sm-offset-0 col-md-offset-0 col-lg-offset-0 col-sm-3 col-md-3 col-lg-3 pull-left parts">
      <img class="img-responsive" src="https://res.cloudinary.com/dqd3ugvju/image/upload/v1493994052/picngpup-forward_zt8yte.png">
      </div>
      <div class="col col-xs-12 col-sm-6 col-md-6 col-lg-6 text">
        <h3>Math is fun.</h3>
        <h4>By using a robot to do the work you get all the joy of problem solving without any annoying or repetitive tasks. And since you are able to focus on the big picture you'll learn faster too.</h4>
      </div>
      <div class="col-xs-0 col-sm-1 col-md-1 col-lg-1">
      </div>
    </div>
  </div>
</template>

<style scoped>
@media screen and (max-width: 767px) {
  .ifLarge {
    height: 0 !important;
    width: 0 !important;
    padding: 0 0 0 0 !important;
    border: 0!important;
    margin: 0 0 
  }
}
@media screen and (min-width: 768px) {
  .ifSmall {
    height: 0 !important;
    width: 0 !important;
    padding: 0 0 0 0 !important;
    border: 0!important;
    margin: 0 0 0 0!important;
  }
  .big {
    padding-top: 20px;
  }
  .text {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .info {
    height: 100%;
    display: flex;
    padding: 20px;
  }
}
h4 {
  font-weight: 300;
  justify-content: center;
}
h3 {
  color: #8DC63F;
  display: flex;
  justify-content: center;

}
h1 {
  font-weight: normal;
}
.container-fluid {
  max-width:  1200px;
}
</style>