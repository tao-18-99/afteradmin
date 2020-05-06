
<template>
  <div class="s-canvas">
    <!-- 生成随机验证码 -->
    <canvas id="s-canvas" :width="contentWidth" :height="contentHeight"></canvas>
  </div>
</template>
<script>
  export default{
    name: 'SIdentify',
    props: {
      identifyCode: {
        type: String,
        default: '1234'
      },
      fontSizeMin: {
        type: Number,
        default: 16
      },
      fontSizeMax: {
        type: Number,
        default: 40
      },
      backgroundColorMin: {
        type: Number,
        default: 180
      },
      backgroundColorMax: {
        type: Number,
        default: 240
      },
      colorMin: {
        type: Number,
        default: 50
      },
      colorMax: {
        type: Number,
        default: 160
      },
      contentWidth: {
        type: Number,
        default: 90
      },
      contentHeight: {
        type: Number,
        default: 42
      }
    },
    methods: {
      // 生成一个随机数
      randomNum (min, max) {
        return Math.floor(Math.random() * (max - min) + min)
      },
      // 生成一个随机的颜色
      randomColor (min, max) {
        let r = this.randomNum(min, max)
        let g = this.randomNum(min, max)
        let b = this.randomNum(min, max)
        return 'rgb(' + r + ',' + g + ',' + b + ')'
      },
      drawPic () {
        let canvas = document.getElementById('s-canvas')
        let ctx = canvas.getContext('2d')
        ctx.textBaseline = 'bottom'      
        // 绘制文字
        for (let i = 0; i < this.identifyCode.length; i++) {
          this.drawText(ctx, this.identifyCode[i], i)
        }
      },
      drawText (ctx, txt, i) {
        ctx.fillStyle = this.randomColor(this.colorMin, this.colorMax)
        ctx.font = this.randomNum(this.fontSizeMin, this.fontSizeMax) + 'px SimHei'
        let x = (i + 1) * (this.contentWidth / (this.identifyCode.length + 1))
        let y = this.randomNum(this.fontSizeMax, this.contentHeight - 5)
        var deg = this.randomNum(-45, 45)
        // 修改坐标原点和旋转角度
        ctx.translate(x, y)
        ctx.rotate(deg * Math.PI / 180)
        ctx.fillText(txt, 0, 0)
        // 恢复坐标原点和旋转角度
        ctx.rotate(-deg * Math.PI / 180)
        ctx.translate(-x, -y)
      },
    },
    watch: {
      identifyCode () {
        this.drawPic()
      }
    },
    mounted () {
      this.drawPic()
    }
  }

</script>