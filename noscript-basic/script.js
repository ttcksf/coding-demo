function accountDelete(){
  const btn = document.querySelector("#btn");
  btn.addEventListener("click",(e) => {
    window.confirm('退会してよろしいですか？')
  })
};
accountDelete();
