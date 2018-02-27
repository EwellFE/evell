<template>
    <div class="loading_up loading_up_fixed">
        <div class="bird">
            <div class="body"></div>
            <div class="light"></div>
        </div>
        <span class="txt">加载中..<em>.</em></span>
    </div>
</template>

<script>
export default {
  name: 'ewell-loading',
  data() {
    return {
      visible: true
    }
  },
  watch: {
    visible(newVal) {
      if (!newVal) {
        this.destroyElement()
      }
    }
  },
  methods: {
    destroyElement() {
      this.$destroy(true);
      this.$el.parentNode.removeChild(this.$el);
    }
  }
};
</script>

<style scoped>
.loading_up {
  margin: 0 auto;
  text-align: center;
}
.loading_up_fixed {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 9999;
}
.loading_up .bird {
  display: inline-block;
  position: relative;
  width: 54px;
  height: 66px;
}
.loading_up .bird > div {
  position: absolute;
}
.loading_up .bird .body {
  width: 36px;
  height: 42.6px;
  margin: 0 auto;
  background: url(../image/up_body.png) no-repeat;
  background-size: 100%;
  top: 10.2px;
  left: 0;
  right: 0;
  animation: updown 0.54s infinite linear;
  -webkit-animation: updown 0.54s infinite linear;
}
.loading_up .bird .light {
  width: 6.6px;
  height: 13.2px;
  margin: 0 auto;
  background: url(../image/up_light.png) no-repeat;
  background-size: 100%;
  top: 54px;
  left: 0;
  right: 0;
  animation: updown2 0.54s infinite linear;
  -webkit-animation: updown2 0.54s infinite linear;
}
.loading_up .txt {
  margin-left: 6px;
  color: #a5a5a5;
  vertical-align: 26.4px;
}
.loading_up .txt em {
  animation: jy 0.54s infinite linear;
  -webkit-animation: jy 0.54s infinite linear;
}
/*----------------*/
.loading_jump {
  margin: 0 auto;
  text-align: center;
}
.loading_jump .bird {
  display: inline-block;
  position: relative;
  width: 60px;
  height: 60px;
}
.loading_jump .bird > div {
  position: absolute;
}
.loading_jump .bird .body {
  width: 40.2px;
  height: 47.4px;
  margin: 0 auto;
  background: url(../image/jump_body.png) no-repeat;
  background-size: 100%;
  top: 8px;
  left: 0;
  right: 0;
  animation: updown3 0.5s infinite linear;
  -webkit-animation: updown3 0.5s infinite linear;
  z-index: 776;
}
.loading_jump .bird .arms {
  width: 48.6px;
  height: 16.8px;
  margin: 0 auto;
  background: url(../image/jump_arms.png) no-repeat;
  background-size: 100%;
  top: 26.6px;
  left: 4.8px;
  animation: arm 0.5s infinite linear;
  -webkit-animation: arm 0.5s infinite linear;
  z-index: 878;
}
.loading_jump .bird .eyes {
  width: 21px;
  height: 4.2px;
  margin: 0 auto;
  background: url(../image/jump_eyes1.png) no-repeat;
  background-size: 100%;
  top: 21.8px;
  left: 18px;
  animation: eyes 0.5s infinite linear;
  -webkit-animation: eyes 0.5s infinite linear;
  z-index: 898;
}
.loading_jump .bird .shadow {
  width: 31.2px;
  height: 4.8px;
  margin: 0 auto;
  border-radius: 100%;
  background: #c2c2c2;
  top: 51.8px;
  left: 14.4px;
  animation: shadow 0.5s infinite linear;
  -webkit-animation: shadow 0.5s infinite linear;
  z-index: 98;
}
.loading_jump .txt {
  margin-left: 6px;
  color: #a5a5a5;
  vertical-align: 22.6px;
}
@keyframes updown {
  50% {
    transform: translateY(-1.5px);
  }
}
@-webkit-keyframes updown {
  50% {
    -webkit-transform: translateY(-1.5px);
  }
}
@keyframes updown2 {
  0% {
    opacity: 1;
  }
  50% {
    transform: translateY(-1px);
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
}
@-webkit-keyframes updown2 {
  0% {
    opacity: 1;
  }
  50% {
    -webkit-transform: translateY(-1px);
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
}
@keyframes jy {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
}
@-webkit-keyframes jy {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
}
@keyframes updown3 {
  50% {
    transform: translateY(-2px);
  }
}
@-webkit-keyframes updown3 {
  50% {
    -webkit-transform: translateY(-2px);
  }
}
@keyframes arm {
  50% {
    transform: translateY(-4px);
  }
}
@-webkit-keyframes arm {
  50% {
    -webkit-transform: translateY(-4px);
  }
}
@keyframes shadow {
  50% {
    transform: scale(0.8, 0.75);
  }
  100% {
    transform: scale(1, 1);
  }
}
@-webkit-keyframes shadow {
  50% {
    -webkit-transform: scale(0.8, 0.75);
  }
  100% {
    -webkit-transform: scale(1, 1);
  }
}
@keyframes eyes {
  50% {
    transform: translateY(-2px);
    background: url(../image/jump_eyes2.png) no-repeat;
    background-size: 100%;
  }
}
@-webkit-keyframes eyes {
  50% {
    -webkit-transform: translateY(-2px);
    background: url(../image/jump_eyes2.png) no-repeat;
    background-size: 100%;
  }
}
</style>