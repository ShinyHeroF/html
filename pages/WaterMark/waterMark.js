/** 由于 z-index 属性除了 auto之外，只能传入一个整型值，因此其最大值为整型的最大值 */
const maxZIndex = 2**23-1;

/** 创建原图图片
 * @return 原图url
 */
function createOriginImg() {
  console.log('createOriginImg ==>');
  const rotate = 45;
  const gap = 100;
  const text = "原图文字";
  const fontSize = 14;
  const color = "rgba(0,0,0,0.3)";

  const canvas = document.createElement("canvas" );
  const context = canvas.getContext("2d");
  const font = fontSize + "px Arial";
  // 设置原图文字的宽度和高度
  const metrics = context.measureText(text);
  const canvasWidth = metrics.width + gap;
  canvas.width = canvasWidth;

  canvas.height = canvasWidth;
  // 绘制原图文字
  context.translate(canvas .width / 2, canvas.height / 2);
  context.rotate((-1 * rotate * Math.PI) / 180);
  context.fillStyle = color;
  context.font = font;
  context.textAlign = "center";
  context.textBaseline = "middle";
  context.fillText(text,0,0);
  // 将canvas转为图片
  const url = canvas.toDataURL("image/png");
  return url;
}
/** 加水印 */
function drawWatermark(text = 'user 123', opacity = 0.005) {
  const image = new Image( );
  image.crossOrigin = "anonymous";
  image.src = document.getElementById("source").src;

  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');

  image.onload = () =>{
    const width = image.width
    const height = image.height;
    canvas.width = width;
    canvas.height = height;
    ctx.drawImage(image,0,0);

    ctx.font = '4em Arial';
    ctx.fillStyle = `rgba(0, 0, 0, ${opacity})`; // Semi-transparent color
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
  
    ctx.globalCompositeOperation = 'source-over'; // Default
    ctx.fillText(text, 10, 10);
    ctx.fillText(text, 10, 10);
  
    // Draw multiple layers of watermark
    // for (let y = 0; y < height; y += 150) {
    //   for (let x = 0; x < width; x += 150) {
    //     ctx.save();
    //     ctx.translate(x, y);
    //     ctx.rotate((-30 * Math.PI) / 180); // Rotate for better effect
    //     ctx.restore();
    //   }
    // }
    const url = canvas.toDataURL("image/png");
    document.getElementById("encodedImg").src = url;
  }
  // context.putImageData(imageData,0,0);
  // target.src = canvas.toDataURL("image/png");
}

/** 将水印转为暗水印 */
function encodeWatermark(waterMarkUrl = '') {
  // 水印元素地址
  const url = waterMarkUrl || createOriginImg();
  return url;
}
/** 解密暗水印 */
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

/** 混合模式解码 */
function decodeWatermarkByMixMode(source, result) {
  const canvas = document.createElement("canvas" );
  const context = canvas.getContext("2d");
  const image = new Image( );
  image.crossOrigin = "anonymous";
  image.src = source.src;
  image.onload = () =>{
    canvas.width = image.width;
    canvas.height = image.height;
    context.drawImage(image,0,0);
    /** 设置全局的混合选项 overlay */
    context.globalCompositeOperation = "overlay";
    context.fillStyle = "#000";
    /** 叠加多次 */
    for (let i = 0; i < 10; i++) {
      context.fillRect(0, 0, canvas.width, canvas.height);
    }
    /** 绘制结果图 */
    result.src = canvas.toDataURL("image/png");
  }
}
/**  */
/** 添加水印到容器中 */
function addWatermark(watermarkContainer, waterMarkUrl) {
  const watermarkLayer = document.createElement("div");
  watermarkLayer.style.position = "absolute";
  watermarkLayer.style.top = "0";
  watermarkLayer.style.left = "0";
  watermarkLayer.style.width = "100%";
  watermarkLayer.style.height="100%";
  watermarkLayer.style.pointerEvents = "none";
  watermarkLayer.style.backgroundImage = `url(${waterMarkUrl})`;
  watermarkLayer.style.backgroundRepeat = "repeat";
  watermarkLayer.style.zIndex = maxZIndex;
  watermarkContainer.appendChild(watermarkLayer);
  return watermarkLayer;
};
/** 填充图片 */
function fillImage(imgEle, imgUrl) {
  imgEle.src = imgUrl;
};