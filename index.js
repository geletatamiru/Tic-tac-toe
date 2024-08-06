let btns = document.querySelectorAll('.btn');
let win = document.querySelector("h3");
let val;
let count = 0;
const win_msg = "Player 1 win";
const win_msg2 = "Player 2 win";
let res_btn = document.querySelector('.restart-btn');
res_btn.addEventListener("click",()=> {
  location.reload();
})
for(let i=0;i<btns.length;i++){
  btns[i].addEventListener('click',()=> {
    if(btns[i].textContent == '' && count % 2 == 0){
      val = 'X';
      btns[i].textContent = val;
      count++;
      if((btns[0].textContent == val && btns[1].textContent == val && btns[2].textContent == val) || (btns[3].textContent == val && btns[4].textContent == val && btns[5].textContent == val) || (btns[6].textContent == val && btns[7].textContent == val && btns[8].textContent == val) || (btns[0].textContent == val && btns[4].textContent == val && btns[8].textContent == val) || (btns[2].textContent == val && btns[4].textContent == val && btns[6].textContent == val) || (btns[0].textContent == val && btns[3].textContent == val && btns[6].textContent == val) || (btns[1].textContent == val && btns[4].textContent == val && btns[7].textContent == val) || (btns[2].textContent == val && btns[5].textContent == val && btns[8].textContent == val)){
        win.textContent = win_msg;
        res_btn.style.display = "inline";
      }
      if(count == 9 && win.textContent == ''){
        win.textContent = "It is a Tie";
        res_btn.style.display = "inline";
      }  

    }
    if(count % 2 == 1 && btns[i].textContent == ''){
      val = 'O';
      btns[i].textContent = val;
      count++;
      if((btns[0].textContent == val && btns[1].textContent == val && btns[2].textContent == val) || (btns[3].textContent == val && btns[4].textContent == val && btns[5].textContent == val) || (btns[6].textContent == val && btns[7].textContent == val && btns[8].textContent == val) || (btns[0].textContent == val && btns[4].textContent == val && btns[8].textContent == val) || (btns[2].textContent == val && btns[4].textContent == val && btns[6].textContent == val) || (btns[0].textContent == val && btns[3].textContent == val && btns[6].textContent == val) || (btns[1].textContent == val && btns[4].textContent == val && btns[7].textContent == val) || (btns[2].textContent == val && btns[5].textContent == val && btns[8].textContent == val)){
        win.textContent = win_msg2;
        res_btn.style.display = "inline";
      }  
    }
  })
}
