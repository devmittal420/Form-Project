// Apply blur filter
async function applyBlur(inputImagePath, outputImagePath, sigma = 1) {
  const image = sharp(inputImagePath);
  await image.blur(sigma);
  await image.toFile(outputImagePath);

  console.log("Blur filter applied successfully");
}

// Apply sharpen filter
async function applySharpen(inputImagePath, outputImagePath, sigma = 1) {
  const image = sharp(inputImagePath);
  await image.sharpen(sigma);
  await image.toFile(outputImagePath);

  console.log("Sharpen filter applied successfully");
}

// Apply grayscale filter
async function applyGrayscale(inputImagePath, outputImagePath) {
  const image = sharp(inputImagePath);
  await image.grayscale();
  await image.toFile(outputImagePath);

  console.log("Grayscale filter applied successfully");
}

export default {
  applyBlur,
  applyGrayscale,
  applySharpen,
};
