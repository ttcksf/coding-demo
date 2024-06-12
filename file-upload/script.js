inputFile = document.querySelector('.inputFile');
fileName = document.querySelector('.fileName');
inputFile.addEventListener('change', () => {
  let file = inputFile.files[0];
  console.log(file);
  if (file === undefined) {
    fileName.textContent = '選択してください';
  } else {
    fileName.textContent = file.name;
  }
});
