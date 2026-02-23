let interviewList = [];
let rejectedList = [];

let allCount = document.getElementById('dash_all');
let interviewCount = document.getElementById('dash_interview');
let rejectCount = document.getElementById('dash_rejected');

const allCards = document.getElementById('allcards');

function calculateCount(){
    allCount.innerText = allCards.children.length-1;
    interviewCount.innerText = interviewList.length
    rejectCount.innerText = rejectedList.length
}
calculateCount();
