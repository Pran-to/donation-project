const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 5) {
    navbar.classList.add("backdrop-blur-md", "bg-slate-800/10");
  } else {
    navbar.classList.remove("backdrop-blur-md", "bg-slate-800/10");
  }
});


// toggle button function 


function doToggle(a , b , c , d){
 document.getElementById(a).classList.add('bg-blue-500');
 document.getElementById(a).classList.remove('bg-gray-500');
 document.getElementById(b).classList.add('bg-gray-500');
 document.getElementById(b).classList.remove('bg-blue-500');
 document.getElementById(c).classList.remove('hidden');
 document.getElementById(d).classList.add('hidden');
}

// donation all main function 
function donateFun(title ,donationBtn,donationIn,donationAm){
  document.getElementById(donationBtn).addEventListener('click',(e)=>{
      e.preventDefault();
      
              if (isNaN(inputFiled(donationIn)) || inputFiled(donationIn) <= 0) {
                  alert("Invalid donation amount.");
                  return;
              }
             else if (inputFiled(donationIn) > textFiled('main-balance')) {
                  alert("Insufficient balance.");
                  return;
              }
              else {
                  const donationTotal1 = textFiled(donationAm) + inputFiled(donationIn)  ;
                  const mainBalance = textFiled('main-balance') - inputFiled(donationIn) ;
                  document.getElementById(donationAm).innerText = donationTotal1 ;
                  document.getElementById('main-balance').innerText = mainBalance ;
                  // history update section 
                   historyUpdate (title,donationIn);

                   document.getElementById(donationIn).value = '';
  
                  //  modal part 
              }
  
  
       
  })
}

// input filed get value function  

function inputFiled (id) {
  const inputFiled = document.getElementById(id).value ;
    const input = parseFloat(inputFiled);
    return input ;
}
// text filed get value function  

function textFiled (id) {
  const textFiled = document.getElementById(id).innerText ;
    const text = parseFloat(textFiled);
    return text ;
}

// create element and history update function 
function historyUpdate (titles,donationInput){
  let history = document.getElementById('history-section');
  const title = document.getElementById(titles).innerText ;
  const newDiv = document.createElement('div');
    newDiv.innerHTML = `
    <div class=" rounded-md drop-shadow-md space-y-7 bg-white p-7 border "> <p class = "font-bold "> ${ inputFiled(donationInput)} Taka is  ${title} </p> 
    <p> ${new Date().toLocaleString()} </p>
    </div>
    `
    history.appendChild(newDiv);

 }