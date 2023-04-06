// {/* <div id="joke" class="joke">Awesome joke is loading.....</div>
// <button id="jokebtn" class="btn">Next Joke</button> */}

const jokes=document.getElementById('joke');
const jokebtn=document.querySelector('#jokebtn');

//
// const generateJokes = () => {
// const setHeader = {
//     headers:{
//         Accept:"application/json"
//     }
// }


// fetch('https://icanhazdadjoke.com/',setHeader)
// .then((res) => res.json())
// .then((data) => {
//     jokes.innerHTML=data.joke;
// }).catch((error) => {
//     console.log(error);
// })
// }

//Async/Await

const generateJokes = async() =>{
    try{
        const setHeader = {
            headers:{
                Accept : "application/json"
            }
        }
        const res = await fetch('https://icanhazdadjoke.com/',setHeader);
        const data = await res.json();
        jokes.innerHTML=data.joke;
    }catch(err){
        console.log(`the error is &{err}`);
    }


}
jokebtn.addEventListener('click', generateJokes);
generateJokes();