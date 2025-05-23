/** 将文本水印转换为二进制字符串 */
function textToBinary(text) {
  return text.split('').map(char => char.charCodeAt(0).toString(2).padStart(8, '0')).join('');
}
/** 将其嵌入到图像的像素值中 */
function embedLSBWatermark(imageData, watermarkText) {
  const binaryWatermark = textToBinary(watermarkText);
  let data = imageData.data;
  let index = 0;

  for (let i = 0; i < binaryWatermark.length; i++) {
      if (index >= data.length) break;

      // 获取当前像素的R通道值（或选择其他通道）
      let pixelValue = data[index];

      // 修改最低有效位
      let bit = parseInt(binaryWatermark[i], 2);
      data[index] = (pixelValue & ~1) | bit;

      index += 4; // 跳过每个像素的RGBA通道
  }

  return imageData;
}
/** 从图像中提取之前嵌入的二进制水印，并将其转换回文本 */
function binaryToText(binaryString) {
  const bytes = [];
  for (let i = 0; i < binaryString.length; i += 8) {
      bytes.push(parseInt(binaryString.slice(i, i + 8), 2));
  }
  return String.fromCharCode(...bytes);
}

function extractLSBWatermark(imageData, length) {
  let binaryWatermark = '';
  let data = imageData.data;
  let index = 0;

  for (let i = 0; i < length * 8; i++) {
      if (index >= data.length) break;

      // 获取当前像素的R通道值（或选择其他通道）
      let pixelValue = data[index];

      // 提取最低有效位
      let bit = pixelValue & 1;
      binaryWatermark += bit;

      index += 4; // 跳过每个像素的RGBA通道
  }

  return binaryToText(binaryWatermark);
}