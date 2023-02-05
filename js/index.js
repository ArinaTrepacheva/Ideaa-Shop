let container=document.querySelector(`.food-container`);
let input=document.querySelector(`.search-input`);
let conS=document.querySelector(`.search-container`);
let btn=document.querySelector(`.order-button`);
let modal=document.querySelector(`.modal`)
let names=[`Кактус`,`Настенные часы`, `Телевизор`,`Блендер`,`Шторы`,`Комплект посуды`];
let nums =[200, 1500, 25000,1200,3000,5000];
for(let i = 0; i < names.length; i++){
namee=names[i];
num=nums[i];
container.innerHTML+=`<div class="card">
<img src="assets/goods/${i+1}.jpg">
<div class="card-body">
  <span class="food-title">${namee}</span>
  <span class="food-price">${num}</span>
</div>
</div>`
}
conS.addEventListener(`input`,function(){
  for(let i=0;i<names.length;i++){
    namee=names[i];
num=nums[i];
  let search=input.value.toLowerCase();
  let title=namee.toLowerCase();
  if (title.includes(search)){
    container.innerHTML=`<div class="card">
    <img src="assets/goods/${i+1}.jpg">
    <div class="card-body">
      <span class="food-title">${namee}</span>
      <span class="food-price">${num}</span>
    </div>
    </div>`
  }
  else{
    container.classList.add(`d-none`)
  }
}
})

let sum=0;
let sideBar=document.querySelector(`.sidebar-list`);
let result=document.querySelector(`.sidebar-total`);
let res=document.querySelector(`.sidebar-result`);
container.addEventListener(`click`, function(evt){
  res.innerHTML=` `;
    let card=evt.target.closest(`.card`);
    card.classList.toggle(`card-active`);
    let priceKor=Number(card.querySelector(`.food-price`).innerHTML);
    let nameKor=card.querySelector(`.food-title`).innerHTML;
    sideBar.innerHTML+=nameKor+` `+priceKor +` руб.`+ `<br>`;
    sum += priceKor;
    result.innerHTML=`Итого: `+ sum + ` руб.`;
})
btn.addEventListener(`click`, function(){
sideBar.innerHTML=` `;
result.innerHTML=` `;
res.innerHTML=`Ваш заказ оформлен! Ожидайте 2-3 дня!`;
card.classList.remove(`card-active`);
})