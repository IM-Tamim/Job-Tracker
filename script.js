let interviewList = [];
let rejectedList = [];

let allCount = document.getElementById('dash_all');
let interviewCount = document.getElementById('dash_interview');
let rejectCount = document.getElementById('dash_rejected');

const allBtn =document.getElementById('all_btn');
const interviewBtn =document.getElementById('interview_btn');
const rejectedBtn =document.getElementById('rejected_btn');

const allCards = document.getElementById('allcards');

const mainContainer = document.querySelector('main');

function calculateCount(){
    allCount.innerText = allCards.children.length-1;
    interviewCount.innerText = interviewList.length
    rejectCount.innerText = rejectedList.length
}
calculateCount();

function toggling(id){
    allBtn.classList.remove('bg-blue-600', 'text-white')
    interviewBtn.classList.remove('bg-blue-600', 'text-white')
    rejectedBtn.classList.remove('bg-blue-600', 'text-white')

    allBtn.classList.add('bg-gray-200', 'text-gray-700')
    interviewBtn.classList.add('bg-gray-200', 'text-gray-700')
    rejectedBtn.classList.add('bg-gray-200', 'text-gray-700')

    const selected =document.getElementById(id)
    selected.classList.remove('bg-gray-200', 'text-gray-700')
    selected.classList.add('bg-blue-600', 'text-white')
}

mainContainer.addEventListener('click',function(event){
    if (event.target.classList.contains("interview_btn")){
        const parentNode = event.target.parentNode.parentNode
        const title = parentNode.querySelector('.title').innerText
        const type = parentNode.querySelector('.type').innerText
        const salary = parentNode.querySelector('.salary').innerText
        const note = parentNode.querySelector('.note').innerText
        
        const status = parentNode.querySelector('.status')
         status.innerText = "INTERVIEW";
         status.classList.remove(
            "bg-blue-100",
            "text-blue-700",
            "bg-red-100",
            "text-red-700",
         );
         status.classList.add("bg-green-100", "text-green-700");
        
        const cardInfo ={
            title,
            type,
            salary,
            status,
            note
        };
        const card_exist = interviewList.find( (item) => item.title == cardInfo.title);
        if (!card_exist) {
         interviewList.push(cardInfo);
        }
        }
        console.log(interviewList)
    
})