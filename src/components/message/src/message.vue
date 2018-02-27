<template>
  <div
    class="popup-tips"
    style="display: none"
    v-show="visible"
    @mouseenter="clearTimer"
    @mousemove="startTimer"
  >
    {{message}}
  </div>
</template>

<script>
export default {
  name: 'ewell-message',
  data() {
    return {
      visible: false, //可见性
      duration: 1500, // 持续时间 ms
      delayTime: 300, // 演示时间 ms
      timer: null,
      message: ''
    }
  },
  methods: {
    destroyElement() {
      this.$destroy(true)
      this.$el.parentNode.removeChild(this.$el)
    },
    startTimer() {
      this.timer = setTimeout(() => {
        this.visible = false
        this.destroyElement()
      }, this.duration)
    },
    clearTimer() {
      clearTimeout(this.timer)
    }
  },
  mounted() {
    setTimeout(() => {
      this.visible = true
      this.startTimer()
    }, this.delayTime)
  }
}
</script>

<style scoped>
.popup-tips {
  position: absolute;
  max-width: 7.65rem;
  height: 1.5rem;
  line-height: 1.5rem;
  padding: 0 .6rem;
  background: rgba(0, 0, 0, 0.7);
  border-radius: .12rem;
  color: #fff;
  font-size: .54rem;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
  margin: auto;
  text-align: center;
  z-index: 10001;
}
</style>
