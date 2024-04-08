<template>
  <div ref="myCanvasWrap" class="canvas-wrap">
    <img ref="myImg" :src="imgSrc" alt="" />
    <canvas
      ref="myCanvas"
      :width="canvasW"
      :height="canvasH"
      @mousedown="onMousedown"
      @mouseup="onMouseup"
      @mousemove="
        e => {
          onMousemove(e);
        }
      "
    >
    </canvas>
  </div>
</template>

<script>
import _ from "lodash";

export default {
  data() {
    return {
      imgSrc: require("@/assets/page.jpg"),
      canvas: null, // canvas实例
      ctx: "", // 渲染上下文
      scale: 0, // 背景缩放比例
      canvasW: 0,
      canvasH: 0,
      isMousedown: false,
      downX: 0, // 鼠标落下时的X
      downY: 0, // 鼠标落下时的Y
      rectWidth: 0, // 矩形的宽
      rectHeight: 0, // 矩形的高
      rectX: 0, // 矩形的x坐标（左上角）
      rectY: 0, // 矩形的y坐标（左上角）
      allRectangleArr: [], // 所有矩形数据
      zIndex: 1, // 层级
      curRectangle: null, // 当前高亮的矩形
      mouseupDownX: 0, // 鼠标松开后的X
      mouseupDownY: 0, // 鼠标松开后的X
    };
  },
  watch: {
    scale: {
      handler(nVal, oVal) {
        const _scale = nVal / oVal;
        if (this.allRectangleArr.length) {
          this.allRectangleArr = this.allRectangleArr.map(item => {
            return {
              rectWidth: item.rectWidth * _scale, // 矩形的宽
              rectHeight: item.rectHeight * _scale, // 矩形的高
              rectX: item.rectX * _scale, // 矩形的x坐标（左上角）
              rectY: item.rectY * _scale, // 矩形的y坐标（左上角）
              zIndex: item.zIndex // 层级
            };
          });
        }
      },
      immediate: false
    }
  },
  mounted() {
    this.canvas = this.$refs.myCanvas;
    this.ctx = this.canvas.getContext("2d");

    // 所有图片加载完成
    window.addEventListener("load", () => {
      this.drawPic();
    });

    window.addEventListener("resize", this.handleResize);
  },
  destroyed() {
    window.removeEventListener("resize", this.handleResize);
  },
  methods: {
    handleResize: _.debounce(function() {
      // 处理窗口大小变化的逻辑
      console.log("窗口大小变化了");
      this.drawPic().then(() => {
        this.reDrawData();
      });
    }, 200), // 防抖的时间设置为200ms
    // handleMove: _.debounce(function(e) {
    //   this.onMousemove(e);
    // }, 100), // 防抖的时间设置为200ms
    drawPic() {
      this.ctx.clearRect(0, 0, this.canvasW, this.canvasH); // 清空画布

      let ratio = this.getPixelRation(this.ctx);

      return new Promise(resolve => {
        // 将图片绘制到canvas
        let imgDom = new Image();
        imgDom.src = this.imgSrc;

        // 盒子宽度
        // const boxW =
        //   this.$parent.$refs.appWrap.clientHeight <
        //   this.$refs.myCanvasWrap.clientHeight
        //     ? this.$refs.myCanvasWrap.clientWidth -
        //       this.$parent.$data.scrollbarWidth
        //     : this.$refs.myCanvasWrap.clientWidth;
        const boxW = this.$refs.myCanvasWrap.clientWidth;

        console.log(
          "boxW",
          this.$parent,
          this.$parent.$refs.appWrap.clientHeight,
          this.$refs.myCanvasWrap.clientHeight,
          this.$refs.myCanvasWrap.clientWidth
        );

        let that = this;
        imgDom.onload = function() {
          // canvas画布宽高设置
          // that.canvasW = boxW * ratio;
          that.canvasW = boxW;
          that.scale =
            that.canvasW / imgDom.width > 1 ? 1 : that.canvasW / imgDom.width;
          // that.canvasH = imgDom.height * that.scale * ratio;
          that.canvasH = imgDom.height * that.scale;
          // canvas容器宽高设置
          that.canvas.style = `width: ${boxW}px; height: ${imgDom.height *
            that.scale}px;`;

          resolve();

          // that.$nextTick(() => {
          //   // 改变canvas大小后，需要渲染后再触发drawImage绘制图片
          //   that.ctx.drawImage(imgDom, 0, 0, that.canvasW, that.canvasH);
          // });
        };
      });
    },
    onMousedown(e) {
      this.downX = e.offsetX;
      this.downY = e.offsetY;
      this.isMousedown = true;

      console.log("onMousedown", this.downX, this.downY);
    },
    onMouseup(e) {
      console.log('onMouseup');

      this.isMousedown = false;

      this.mouseupDownX = e.offsetX;
      this.mouseupDownY = e.offsetY;

      if (
        Math.abs(this.downX - e.offsetX) < 10 &&
        Math.abs(this.downY - e.offsetY) < 10
      ) {
        console.log("点击");
      } else {
        // 放开时保存矩形数据
        this.allRectangleArr.push({
          rectWidth: this.rectWidth, // 矩形的宽
          rectHeight: this.rectHeight, // 矩形的高
          rectX: this.rectX, // 矩形的x坐标（左上角）
          rectY: this.rectY, // 矩形的y坐标（左上角）
          zIndex: this.zIndex // 层级
        });
        this.zIndex++;
        console.log("拖拽");
      }
    },
    onMousemove(e) {
      if (e.offsetX === this.mouseupDownX && e.offsetY === this.mouseupDownY) {
        return false;
      }

      if (this.isMousedown) {
        this.ctx.clearRect(0, 0, this.canvasW, this.canvasH); // 清空画布

        console.log("onMousemove", e.offsetX, e.offsetY);

        if (e.offsetX - this.downX < 0) {
          this.rectWidth = -(e.offsetX - this.downX);
          this.rectX = e.offsetX;
        } else {
          this.rectWidth = e.offsetX - this.downX;
          this.rectX = this.downX;
        }

        if (e.offsetY - this.downY < 0) {
          this.rectHeight = -(e.offsetY - this.downY);
          this.rectY = e.offsetY;
        } else {
          this.rectHeight = e.offsetY - this.downY;
          this.rectY = this.downY;
        }

        // 绘制矩形（还未保存）
        this.drawRectangle({
          rectWidth: this.rectWidth, // 矩形的宽
          rectHeight: this.rectHeight, // 矩形的高
          rectX: this.rectX, // 矩形的x坐标（左上角）
          rectY: this.rectY // 矩形的y坐标（左上角）
        });

        this.reDrawData();

        console.log(e.offsetX, e.offsetY);
      } else {
        console.log("悬停");
        // 悬停时填充显示

        let flag = false;
        let isOld = false; // 是否还是上一个填充矩形
        let _curRectangle = null; // 临时填充矩形对象

        // 先匹配在哪个绘制的矩形中
        this.allRectangleArr.forEach(item => {
          if (
            this.isPointInRectangle(
              { x: e.offsetX, y: e.offsetY },
              {
                x1: item.rectX,
                y1: item.rectY,
                x2: item.rectX + item.rectWidth,
                y2: item.rectY + item.rectHeight
              }
            )
          ) {
            _curRectangle = item;
          }
        });

        // 然后对比填充矩形数据
        if (_curRectangle) {
          flag = true;
          if (
            this.curRectangle &&
            this.curRectangle.zIndex == _curRectangle.zIndex
          ) {
            isOld = true;
          } else {
            isOld = false;
          }
          this.curRectangle = _curRectangle;
        }

        if (flag) {
          if (!isOld) {
            console.log("填充");
            this.drawPic().then(() => {
              // 先清除
              this.reDrawData();

              // 再绘制
              this.ctx.beginPath();
              // this.ctx.fillStyle = "pink";
              // this.ctx.fillRect(
              //   this.curRectangle.rectX + 2,
              //   this.curRectangle.rectY + 2,
              //   this.curRectangle.rectWidth - 4,
              //   this.curRectangle.rectHeight - 4
              // );

              this.ctx.rect(
                this.curRectangle.rectX + 2,
                this.curRectangle.rectY + 2,
                this.curRectangle.rectWidth - 4,
                this.curRectangle.rectHeight - 4
              );
              this.ctx.fillStyle = "red";
              this.ctx.fill();
            });
          }
        } else {
          if (this.curRectangle) {
            this.curRectangle = null;
            this.drawPic().then(() => {
              this.reDrawData();
            });
          }
        }
      }
    },
    getPixelRation(context) {
      let backingStore =
        context.backingStorePixelRatio ||
        context.webkitBackingStorePixelRatio ||
        context.mozBackingStorePixelRatio ||
        context.msBackingStorePixelRatio ||
        context.oBackingStorePixelRatio ||
        context.backingStorePixelRatio ||
        1;
      return (window.devicePixelRatio || 1) / backingStore;
    },
    // 绘制矩形
    drawRectangle(data) {
      const { rectWidth, rectHeight, rectX, rectY } = data;
      // 空心矩形
      this.ctx.beginPath();
      this.ctx.strokeStyle = "green";
      this.ctx.lineWidth = 5;
      this.ctx.moveTo(rectX, rectY);
      this.ctx.lineTo(rectX + rectWidth, rectY);
      this.ctx.lineTo(rectX + rectWidth, rectY + rectHeight);
      this.ctx.lineTo(rectX + rectWidth, rectY + rectHeight);
      this.ctx.lineTo(rectX, rectY + rectHeight);
      this.ctx.closePath();
      this.ctx.stroke();
      // this.ctx.strokeRect(rectX, rectY, rectWidth, rectHeight);
    },
    // 判断当前点坐标是否在矩形中
    isPointInRectangle(point, rect) {
      const { x, y } = point;
      const { x1, y1, x2, y2 } = rect;
      return x >= x1 && x <= x2 && y >= y1 && y <= y2;
    },
    reDrawData() {
      console.log("重画");
      // 绘制之前的矩形
      if (this.allRectangleArr.length) {
        this.allRectangleArr.forEach(item => {
          this.drawRectangle({
            rectWidth: item.rectWidth, // 矩形的宽
            rectHeight: item.rectHeight, // 矩形的高
            rectX: item.rectX, // 矩形的x坐标（左上角）
            rectY: item.rectY, // 矩形的y坐标（左上角）
            zIndex: item.zIndex // 层级
          });
        });
      }
    }
  }
};
</script>

<style scoped>
.canvas-wrap {
  position: relative;
}
.canvas-wrap img {
  width: 100%;
}
.canvas-wrap canvas {
  position: absolute;
  top: 0;
  left: 0;
}
</style>
