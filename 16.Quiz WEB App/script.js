// let data=[];
// let correctAnswers=[];
// let answers=[];

//  function getStarted(id){
//     try {
//         id.classList.add("d-none");
//    let questionBoard= id.parentElement.nextElementSibling;
//    questionBoard.classList.remove("d-none");
   
//    getData(questionBoard);
//    //setTimeout(getData(),1000);
//     } catch (error) {
//         alert(error);
//     }
// }

// async function getData(questionBoard){
    
//    try {
//     promise= await fetch("./questions.json");
//     data= await promise.json();
   
//     data.forEach((element,key) => {
//         questionBoard.innerHTML +=` <div class="${key!=0 ? "d-none":""}">
//         <h4>${element.id}.${element.question}</h4>
//         <div class="text-light" >
        
//             <button class="btn btn-outline-light my-3 w-100 text-start" onclick="storeResult(this)">${element.A}</button>
//             <button class="btn btn-outline-light my-3 w-100 text-start" onclick="storeResult(this)">${element.B}</button>
//             <button class="btn btn-outline-light my-3 w-100 text-start" onclick="storeResult(this)">${element.C}</button>
//             <button class="btn btn-outline-light my-3 w-100 text-start" onclick="storeResult(this)">${element.D}</button>
            
//         </div>
//         <div class="d-flex justify-content-around"><button class="btn btn-outline-light ${key==0?"d-none":""}" onclick="previous(this)">Previous</button>
//             <button class="btn btn-outline-light ${key==data.length-1?"d-none":""}" onclick="next(this)">Next</button>
//              </div>
//     </div>`
//     correctAnswers.push(element.answer);
//     //console.log(correctAnswers);
//     });
//    } catch (error) {
//     alert(error);
//    }
// }

// function next(id){
// try {
//     {
//         id.parentElement.parentElement.classList.add("d-none");
//         id.parentElement.parentElement.nextElementSibling.classList.remove("d-none");
//     }
// } catch (error) {
//     alert(error);
// }
// }
// function previous(id){
// try {
//     {
//         id.parentElement.parentElement.classList.add("d-none");
//         id.parentElement.parentElement.previousElementSibling.classList.remove("d-none");
//     }
    
// } catch (error) {
//     alert(error);
// }}
// function storeResult(id){
//     // answers.push(id.innerText);
//     // console.log(answers);
   
//         let arraySomeResult=answers.some((value,key) => {
//             return value == id.children[0].innerText;
            
//         });
//         if(!arraySomeResult){
//             let options=id.parentElement.children;
//             let array = Array.from(options);
//             array.forEach(el => {
//                 el.setAttribute("onclick", "update(this)");
//             })
//             id.classList.add("btn-info");
//             answers.push(id.children[0].innerText);
//         }
        
     
// }

// function update(id){
    
//         let arraySomeResult=answers.some((value,key) => {
//             return value==id.childern[0].innerText;
//         });
//         if(!arraySomeResult){
//             let options=id.parentElement.childern;
//             let array= Array.from(options);
//             array.forEach(element => {
//                 id.classList.remove("btn-info")
//             });
//             answers.pop();
//             id.classList.add("btn-info");
//             answers.push(id.childern[0].innerText);
//         }
        
//     } 

// ---------------------------------------------------------------------------------------------------------------------------------------


let data = [];
let correctAnswers = [];
let answers = [];

function getStarted(id) {
    try {
        id.classList.add("d-none");
        let questionBoard = id.parentElement.nextElementSibling;
        questionBoard.classList.remove("d-none");
        getData(questionBoard);
    } catch (error) {
        alert(error);
    }
}
async function getData(questionBoard) {
    try {
        promise = await fetch("./question.json");
        data = await promise.json();

        data.forEach((el, key1) => {
            questionBoard.innerHTML += `<div class="${key1 != 0 ? "d-none" : ""}">
            <h4>${key1 + 1}. ${el.question}</h4>
            <div class="text-light" id="${key1}"></div>
            <div class="d-flex justify-content-around"><button class="btn btn-outline-light ${key1 == 0 ? "d-none" : ""}" onclick="previous(this)">previous</button><button class="btn btn-outline-light px-4 ${key1 == data.length - 1 ? "d-none" : ""}" onclick="next(this)">next</button></div>
            </div>`
            el.options.forEach((el, key2) => {
                document.getElementById(key1).innerHTML += `<button class="btn btn-outline-light my-3 w-100 text-start" onclick="storeResult(this)">${key2 + 1}.<span>${el}</span></button>`;
            });
            correctAnswers.push(el.answer);
        });
    } catch (error) {
        alert(error);
    }
}
function next(id) {
    try {
        id.parentElement.parentElement.classList.add("d-none");
        id.parentElement.parentElement.nextElementSibling.classList.remove("d-none");
    } catch (error) {
        alert(error);
    }

}
function previous(id) {
    try {
        id.parentElement.parentElement.classList.add("d-none");
        id.parentElement.parentElement.previousElementSibling.classList.remove("d-none");
    } catch (error) {
        alert(error);
    }
}
function storeResult(id) {
    console.log(id);
    try {
        let arraySomeResult = answers.some((value, key) => {
            //return value == id.children[0].innerText;
            console.log(value == id.children[0].innerText);
        });
        if (!arraySomeResult) {
            let options = id.parentElement.children;
            let array = Array.from(options);
            array.forEach(el => {
                el.setAttribute("onclick", "update(this)");
            })
            id.classList.add("btn-info")
            answers.push(id.children[0].innerText);
        }
    } catch (error) {
        alert(error);
    }
}
function update(id) {
    try {
        let arraySomeResult = answers.some((value, key) => {
            return value == id.children[0].innerText;
        });
        if (!arraySomeResult) {
            let options = id.parentElement.children;
            let array = Array.from(options);
            array.forEach(el => {
                el.classList.remove("btn-info");
            })
            answers.pop();
            answers.push(id.children[0].innerText);
            id.classList.add("btn-info");
        }
    } catch (error) {
        alert(error);
    }
}
