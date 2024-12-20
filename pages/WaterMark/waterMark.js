// 由于 z-index 属性除了 auto之外，只能传入一个整型值，因此其最大值为整型的最大值
const maxZIndex = 2;

function addWatermark(watermarkContainer) {
  const rotate = 45;
  const gap = 100;
  const text = "水印";
  const fontSize = 14;
  const color = "rgba(0,0,0,0.3)";

  const canvas = document.createElement("canvas" );
  const context = canvas.getContext("2d");
  const font = fontSize + "px Arial";
  // 设置水印文字的宽度和高度
  const metrics = context.measureText(text);
  const canvasWidth = metrics.width + gap;
  canvas.width = canvasWidth;

  canvas.height = canvasWidth;
  // 绘制水印文字
  context.translate(canvas .width / 2, canvas.height / 2);
  context.rotate((-1 * rotate * Math.PI) / 180);
  context.fillStyle = color;
  context.font = font;
  context.textAlign = "center";
  context.textBaseline = "middle";
  context.fillText(text,0,0);
  // 将canvas转为图片
  const url = canvas.toDataURL("image/png");
  // 创建水印元素并添加到容器中
  const watermarkLayer = document.createElement("div");
  watermarkLayer.style.position = "absolute";
  watermarkLayer.style.top = "0";
  watermarkLayer.style.left = "0";
  watermarkLayer.style.width = "100%";
  watermarkLayer.style.height="100%";
  watermarkLayer.style.pointerEvents = "none";
  watermarkLayer.style.backgroundImage = `url(${url})`;
  watermarkLayer.style.backgroundRepeat = "repeat";
  watermarkLayer.style.zIndex = maxZIndex;
  watermarkContainer.appendChild(watermarkLayer);
  return watermarkLayer;
};

function decodeWatermark(source, result) {
  const canvas = document.createElement("canvas" );
  const context = canvas.getContext("2d");
  const image = new Image( );
  image.crossOrigin = "anonymous";
  image.src = source.src;
  image.onload = () =>{
    canvas.width = image.width;
    canvas.height = image.height;
    context.drawImage(image,0,0);
    const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
    const data = imageData.data;
    const colorKey = 1;
    const flag = true;
    for (let i = 0; i< data.length; i++) {
      // 找到像素点的颜色通道值，由下标i%4 的值确定:0 -> R,1 -> G, 2 -> B, 3 -> A
      if (i % 4 == colorKey) {
        if (data[i] % 2 == 0) {
          // 如果色值为偶数
          data[i] = flag ? 255 : 0;
        } else {
          // 如果色值为奇数
          data[i] = flag ? 0: 255;
        }
      } else if (i % 4 == 3) {
        // 透明度不作处理
        continue;
      }
    }

    context.putImageData(imageData,0,0);
    result.src = canvas.toDataURL("image/png");
  };
};