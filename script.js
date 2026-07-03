/* 
========================================================================
בחרתי להשתמש במאפיין "currentTime" של אובייקט ה-Audio.
הסבר: המאפיין audio.currentTime = 0; מאפס את זמן הניגון של הצליל לאפס (לתחילת הקובץ).
הסיבה להשתמש בזה היא שאם לוחצים על החיה כמה פעמים ברצף מהר, הצליל ייקטע ויתחיל מחדש מיד,
ולא נצטרך לחכות שהצליל יסתיים לחלוטין כדי לשמוע אותו שוב בלחיצה הבאה.
========================================================================
*/

// פונקציה להשמעת צליל של חיה
function playAnimalSound(animalId) {
    // מוצאים את קובץ השמע לפי ה-ID שלו
    let sound = document.getElementById(animalId + "Sound");
    
    if (sound) {
        sound.currentTime = 0; // האלמנט שלא נלמד בכיתה (איפוס הצליל)
        sound.play(); // הפעלת הצליל
    }
}

// ---------------------------------------------------------
// 1. הפעלת מנגינת רקע בלחיצה הראשונה בלבד
function playBgMusic() {
    let bgMusic = document.getElementById("bgMusic");
    bgMusic.play();
    
    window.removeEventListener('click', playBgMusic);
}

// מאזין אירועים ללחיצה על המסך שמפעיל את הפונקציה[cite: 7]
window.addEventListener('click', playBgMusic);

// 2. הוספת מאזיני אירועים (EventListeners) ללחיצות עכבר על התמונות
let animals = ["cat", "cow", "pig", "monkey", "parrot", "snake", "tiger"];

for (let animal of animals) {
    let imgElement = document.getElementById(animal + "Img");
    
    imgElement.addEventListener("click", function() {
        playAnimalSound(animal);
    });
}

// ---------------------------------------------------------
// 3. הוספת מאזין אירועים ללחיצות מקלדת (keydown)
document.addEventListener("keydown", function(event) {
    let keyPressed = event.key.toLowerCase();
    
    switch(keyPressed) {
        case "c":
            playAnimalSound("cat");
            break;
        case "w":
            playAnimalSound("cow");
            break;
        case "g":
            playAnimalSound("pig");
            break;
        case "m":
            playAnimalSound("monkey");
            break;
        case "p":
            playAnimalSound("parrot");
            break;
        case "s":
            playAnimalSound("snake");
            break;
        case "t":
            playAnimalSound("tiger");
            break;
        default:
            alert("No such drum type!");
            return; // exit the function if the key is not recognized
    }
});