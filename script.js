let found = 0;

let messages = [

"You always make my day better 💖",

"Life is more fun with you in it  🎉",

"You are my happiest memory 📸",

"Your smile makes everything brighter ⭐",

"Every memory with you is precious 💖",

"Every memory with you is precious 😂",

"My life wouldn’t be the same without you",

"You make my life more beautiful 🌸",

"You are truly one of a kind 💌",

"Happy Birthday Elamathi 🎂"

];

function openSurprise(num){

document.getElementById("popup").style.display="block";

document.getElementById("popup-img").src="images/img"+num+".jpg";

document.getElementById("popup-text").innerText=messages[num-1];

found++;

if(found==10){

setTimeout(()=>{

document.getElementById("final").style.display="block";

alert("🎉 Final surprise unlocked!");

},500);

}

}

function closePopup(){

document.getElementById("popup").style.display="none";

}