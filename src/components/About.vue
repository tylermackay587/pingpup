<template>
<div>
<div class="row info">
  <div class="col-xs-0 col-sm-1 col-md-1 col-lg-1">
  </div>
  <div class="col col-xs-offset-3 col-xs-6 col-sm-offset-0 col-md-offset-0 col-lg-offset-0 col-sm-3 col-md-3 col-lg-3 pull-left parts">
  <img class="img-responsive" src="https://res.cloudinary.com/dqd3ugvju/image/upload/v1493994053/pingpuCape_yjfpz0.png">
  </div>
  <div class="col col-xs-12 col-sm-6 col-md-6 col-lg-6 text">
    <h3>For kids and adults</h3>
    <h4>To get started you don't need to know how to read or add, but before you're finished you'll know how to calculate derivatives.</h4>
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
.row {
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
}
h4 {
  padding-left: 15px;
  padding-right: 15px;
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
</style>