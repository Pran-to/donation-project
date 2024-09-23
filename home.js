// donation and history toggle 
document.getElementById('donation-btn').addEventListener('click', ()=>{

    doToggle('donation-btn', 'history-btn' , 'cards' , 'history-section');
})

document.getElementById('history-btn').addEventListener('click', ()=>{  
        doToggle('history-btn', 'donation-btn' , 'history-section' , 'cards');
})


// Donation functionality 
// card 1 
donateFun('title-1','donation-btn1','donation-input-1','donationAmount-1')
//  card 2
donateFun('title-2','donation-btn2','donation-input-2','donationAmount-2')
// card 3
donateFun('title-3','donation-btn3','donation-input-3','donationAmount-3')
