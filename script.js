let interviewList = [];
let rejectedList = [];

let allCount = document.getElementById('dash_all');
let interviewCount = document.getElementById('dash_interview');
let rejectCount = document.getElementById('dash_rejected');

const allBtn =document.getElementById('all_btn');
const interviewBtn =document.getElementById('interview_btn');
const rejectedBtn =document.getElementById('rejected_btn');

const filterInterview =document.getElementById('blank_interview');
const filterRejected =document.getElementById('blank_rejected');

const allCards = document.getElementById('allcards');
const interviewCards = document.getElementById('interviewcards');
const rejectedCards = document.getElementById('rejectedcards');

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

    allCards.classList.add('hidden')
    interviewCards.classList.add('hidden')
    rejectedCards.classList.add('hidden')

    if(id == 'all_btn'){
        allCards.classList.remove('hidden')
    }else if(id == 'interview_btn'){
        interviewCards.classList.remove('hidden')
    }else if(id == 'rejected_btn'){
        rejectedCards.classList.remove('hidden')
    }
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
            status : 'INTERVIEW',
            note
        };
        const card_exist = interviewList.find((item) => item.title == cardInfo.title);
        if (!card_exist) {
         interviewList.push(cardInfo);
        }
    }
    renderInterview();
 
})

function renderInterview(){
    filterInterview.innerHTML=''
    for(item of interviewList){
        let div = document.createElement('div');
        div.innerHTML = `
        <div class="card flex justify-between bg-white p-6 rounded-xl shadow mb-4">
          <div>
            <p class="title font-semibold text-lg ">${item.title}</p>
            <p class="type text-gray-500 mb-2">${item.type}</p>
            <p class="salary text-gray-500 text-sm mb-4">${item.salary}</p>
            <span class="status text-xs font-semibold px-4 py-2 rounded-md bg-green-100 text-green-700 ">${item.status}</span>
            <p class="note my-4 text-gray-600 text-sm">${item.note}</p>
            <div class="flex gap-3">
              <button class="interview_btn border border-green-500 text-green-600 px-4 py-1 rounded-md hover:bg-green-500 hover:text-white">
                INTERVIEW
              </button>
              <button class="rejected_btn border border-red-500 text-red-600 px-4 py-1 rounded-md hover:bg-red-500 hover:text-white">
                REJECTED
              </button>
            </div>
          </div>
          <div>
            <button class="delete_btn text-gray-500 hover:text-red-500">
              <div class="bg-gray-100 rounded-full p-2">
                <i class="fa-regular fa-trash-can"></i>
              </div>
            </button>
          </div>
         </div>
        `
        filterInterview.appendChild(div)
    }
}