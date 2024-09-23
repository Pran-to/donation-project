// donation and history toggle 
document.getElementById('donation-btn').addEventListener('click', ()=>{

    doToggle('donation-btn', 'history-btn' , 'cards' , 'history-section');
})

document.getElementById('history-btn').addEventListener('click', ()=>{  
        doToggle('history-btn', 'donation-btn' , 'history-section' , 'cards');
})


// Donation functionality 
document.getElementById('donation-btn1').addEventListener('click',(e)=>{
    e.preventDefault();

 
    
            if (isNaN(inputFiled('donation-input-1')) || inputFiled('donation-input-1') <= 0) {
                alert("Invalid donation amount.");
                return;
            }
           else if (inputFiled('donation-input-1') > textFiled('main-balance')) {
                alert("Insufficient balance.");
                return;
            }
            else {
                const donationTotal1 = textFiled('donationAmount-1') + inputFiled('donation-input-1')  ;
                const mainBalance = textFiled('main-balance') - inputFiled('donation-input-1') ;
                document.getElementById('donationAmount-1').innerText = donationTotal1 ;
                document.getElementById('main-balance').innerText = mainBalance ;
                console.log(donationTotal1 , mainBalance)
            }


     
})