let body = document.querySelector(".body");
let loding = document.querySelector(".over-lay");
window.addEventListener("load", function() {
  setTimeout(function() {
    loding.style.transition = "opacity 1s";
    loding.style.opacity = "0";
    setTimeout(function() {

      loding.style.display = "none";
      body.style.overflow = "auto";
    }, 2000);
  }, 0);
})
let rightS = document.querySelector(".right-s")

let menu = document.querySelector(".meno");
let menuMood = "open";
function getMenuMood() {
  if (menuMood == "open") {
    menuMood = "close";
    rightS .style =  `
    width:257.2px ;

    `;
    menu.innerHTML = "close";
  }
  else {
    menuMood = "open";
    rightS .style=  `
    width: 0;
    `;
    menu.innerHTML = "menu";
  }
}
let infoAlertt = document.getElementById("infoAlertt");
let coment = document.querySelector(".coment");
function gg() {
  alerttte.style=`display :none;`
}
function gggu() {
coment.style=`display :none;`;
}
let alerttte = document.getElementById("alertt");

window.addEventListener("mouseup",function (event) {
  gg();
})
function alertt(msg, color) {
  gggu()
  alerttte.style = `display :flex;`
  infoAlertt.innerHTML = msg;
  infoAlertt.style = `color :${color};`;

}

let  nameInput = "unknown";


let proC = document.querySelector(".pro-c") ;
proC.style.display = "block";
const colorconst = "2977F6";
// logo Variables
let spanLogo = document.getElementById("span");
let hh = document.getElementById("hh");
let logoMood = "sapn";
// show all Variables
let showMood = "show";
let hab = document.querySelector(".hab");
let showLll = document.getElementById("showAll"); 

// delet Variables
let r1 = document.querySelector(".r1");
let r2 = document.querySelector(".r2");
let r3 = document.querySelector(".r3");
let r4 = document.querySelector(".r4");
let r5 = document.querySelector(".r5");
let r6 = document.querySelector(".r6");
let r7 = document.querySelector(".r7");
let r8 = document.querySelector(".r8");
let r9 = document.querySelector(".r9");
let r10 = document.querySelector(".r10");

// nav Variables
let home = document.getElementById ("home");
let book = document.getElementById ("book");3
let videos = document.getElementById ("videos");
let friends = document.getElementById ("friends");
let n1 = document.getElementById ("n4");
let n2 = document.getElementById ("n3");
let n3 = document.getElementById ("n2");
let n4 = document.getElementById ("n1");
let n21 = document.getElementById ("n21");
let n32 = document.getElementById ("n32");
let n23 = document.getElementById ("n23");
let n24 = document.getElementById ("n24");

// show more Variables
let showAlot = document.getElementById ("showAlot");
let showAlotMood = "show";
let nee = document.getElementById ("nee");
let spanS = document.getElementById ("spanS");

// logo
 function logo() {
  if (logoMood == "span") {
spanLogo.style = `font-weight: 350;
color: #333;
  transition: 0.8s;
  font-size: 30px;
  background:#fff;
  `;
hh.style = `background: #2977F6;
  padding: 5px;
  border-radius: 7px;
  font-weight: 450;
  color: #f1f1f1;
transition: 0.8s;
font-size: 30px;
`;
logoMood = "h1";
  }
  else {
hh.style = `font - weight: 350;
color: #333;
  transition: 0.8s;
  font-size: 30px;
  margin: 3px;`;
spanLogo.style = `background: #2977F6;
  padding: 5px;
  border-radius: 7px;
  font-weight: 450;
  color: # f1f1f1;
transition: 0.8 s;
font - size: 30 px;background: #2977F6;
`;
logoMood = "span";
  }
}
let senahMood = false;
let senah = document.querySelector(".senah")
function senahFunction() {
  if (!senahMood) {
    senah.style.display = "none";
  }
  else{
  senah.style.display = "flex";
  }
}
// show and hidden 
function show(name,heght,allm) {
  name.style = `
  height:  ${heght}${allm};
overflow-y: hidden;
  `
}
function hidden(name,heght,allm) {
  name.style = `
  height:  ${heght}${allm};
overflow-y: hidden;
  `
}

// showAll
showLll.onclick = function() {
if (showMood == "show") {
  show(hab,100,"%");
  showLll.innerHTML = "Hidden";
  showMood = "hidden";
}
else {
hidden(hab,140,"px");
showLll.innerHTML = "Show All";
showMood = "show";
} 

}

// delet
function delet(r) {
  r.style = `
  display:none;
  `
}

// nav 
 function nav(num1,num2,num3,num4,num5,num6,num7,num8) {
  num1.style = `
font-size: 30px;

color: #777;
  margin-left: 10px;
  
  border-bottom: 2.5px #2977F6 solid ;
  color: #2977F6;
  padding: 22.4px 30px;
  `;
  num2.style = `font-size: 30px;
padding: 22.4px 30px;
color: #777;
  margin-left: 10px;`;
  
  num3.style = `font-size: 30px;
padding: 22.4px 30px;
color: #777;
  margin-left: 10px;
  `;
  num4.style = `font-size: 30px;
padding: 22.4px 30px;
color: #777;
  margin-left: 10px;
  `;
  num5.style = `
font-size: 30px;

color: #777;
  margin-left: 10px;
  
  border-top: 2.5px #2977F6 solid ;
  color: #2977F6;
  padding: 30px 30px;
  `;
num6.style = `font-size: 30px;
padding:30px 30px;
color: #777;
  margin-left: 10px;`;

num7.style = `font-size: 30px;
padding:30px 30px;
color: #777;
  margin-left: 10px;
  `;
num8.style = `font-size: 30px;
padding: 30px 30px;
color: #777;
  margin-left: 10px;
  `;
}
function disNav(e1,e2,e3,e4) {
  e1.style = `
  margin-top :76.6px;
  `
    e2.style = `
  display:none;
  `
    e3.style = `
  display:none;
  `
    e4.style = `
  display:none;
  `
}


 function n11() {
  nav(n1,n2,n3,n4,n21,n32,n23,n24);
  disNav(home,book,friends,videos);
  window.scrollTo({
  top: 0,
  behavior: "smooth",
});
}
function n22() {
  nav(n2,n1,n3,n4,n32,n21,n23,n24);
  disNav(friends,book,home,videos);

}
function n33() {
  nav(n3,n2,n1,n4,n23,n32,n24,n21);
  disNav(videos,book,home,friends);
}
function n44() {
  nav(n4, n2, n3, n1,n24,n32,n23,n21);
  disNav(book,videos,home,friends);
}
let spanSs = document.querySelector("spanS");
// showMore
showAlot.onclick = function () {
  if (showAlotMood == "show") {
        pS.innerHTML = "show less"
    
    show(nee,1119.9,"px");
    showAlotMood = "hidden";
  }
  else {
        pS.innerHTML = "show more"
   hidden(nee,690,"px");
   showAlotMood = "show";

  }
}
// like
let likeMood = "like";

function likee(i) {
  if (likeMood == "like") {
posts[i].likes = ++likePosttt;
    likeMood = "dis";
let numfavet = i;
 }
  else {
   posts[i].likes = --likePosttt;
likeMood = "like";
}

/*
  localStorage.postN = JSON.stringify(posts);
  showPost();
  */
  }
let pluse = document.getElementById ("pluse");
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-analytics.js";
import { getFirestore, collection, addDoc, onSnapshot } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-firestore.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCyuBGv-_k1Ewy_dgE_SKmZ4ySAHJjnKoE",
  authDomain: "fusion-a107a.firebaseapp.com",
  projectId: "fusion-a107a",
  storageBucket: "fusion-a107a.appspot.com",
  messagingSenderId: "152309033769",
  appId: "1:152309033769:web:61fb67508c4de1ed136538",
  measurementId: "G-LK3ZNQ7784"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

// Function to add a document to the "users" collection
const addUserDocument = async () => {
  try {
    const docRef = await addDoc(collection(db, "users"), {
      name: "John Doe",
      email: "johndoe@example.com",
      age: 30
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

// Function to listen to the "users" collection
const listenToUsersCollection = () => {
  const unsubscribe = onSnapshot(collection(db, "users"), (snapshot) => {
    snapshot.forEach((doc) => {
      console.log(doc.id, " => ", doc.data());
    });
  }, (error) => {
    console.error("Error listening to collection: ", error);
  });

  // Call unsubscribe() to stop listening to changes
};

// Call the functions to see them in action
addUserDocument();
listenToUsersCollection();
let infoAlert = document.querySelector(".info-alert");
let alerte = document.getElementById("alertt");
let pMoodWeb = document.querySelector(".pMoodWeb");
let buttonMoodWeb = document.querySelector(".buttonMoodWeb");
let header = document.querySelector(".header");
let searchIcon = document.querySelector(".search-icon");
let seach = document.getElementById("seach");
let logoe = document.querySelector(".logo");
let naveev = document.querySelector(".naveev");

let pp = document.querySelectorAll(".pp");
let containerq = document.querySelectorAll(".containerq");
let infoo = document.querySelector(".infoo");
let infooo = document.querySelector(".infooo");
let infoooo = document.querySelector(".infoooo");
let w = document.querySelectorAll(".w");
let shoog = document.querySelector(".shoog");
let rrt = document.querySelector(".rrt");
let rrrt = document.querySelector(".rrrt");
let rrrtf = document.querySelector(".rrrtf");
let rrrrt = document.querySelector(".rrrrt");
let rrrrrt = document.querySelector(".rrrrrt");
let leftS = document.querySelector(".left-s")

let webMood = "dark";
let darMood = "dark";
let box = document.querySelector(".box");
let boxComent = document.querySelector(".box-coment");
let pi = document.getElementById("pi");
function darkk() {
  leftS.style.background = "#333";
  leftS.style.color = "#f1f1f1";
pi.style = `
     color:#fff;
     background :#6C6C6C;
    `;
menu.style = `
     color:#fff;
     background :#6C6C6C;
    `;
    
boxComent.style = `
background: #111;
`;
infoAlert.style = `background :#444;`;
box.style = `background :#111;`;

body.style = `background:#333;`;
shoog.onclick = function () {
shoog.style=` color:#8167FF;`
if (showMood == "show") {
show(hab,100,"%");
showLll.innerHTML = "Hidden";
showMood = "hidden";
}
else {
hidden(hab,140,"px");
showLll.innerHTML = "Show All";
showMood = "show";
}

}
w.style =`color:#B6B6B6;`;
document.querySelector(".navbar").style.background = "#222";
infoo.style = `color:#D5D5D5;`;
infooo.style = `color:#D5D5D5;`;
infoooo.style = `color:#D5D5D5;`;
containerq.style = `background :#333;
color:#D5D5D5;
`
rrrtf.style = `background :#333;
color:#fff;
`
rrt.style = `background :#222;
color:#fff;
`
rrrt.style = `background :#222;
color:#fff;
`
rrrrt.style = `background :#222;
color:#fff;
`
rrrrrt.style = `background :#222;
color:#fff;
`
header.style = `
background :#222;
`;
hh.style = `
color:#f1f1f1;
transition: 0.8s;
font-size: 30px;
background: #222;
`;
spanLogo.style = `
background: #236DE5;
padding: 5px;
border-radius: 7px;
font-weight: 450;
color: #f1f1f1;
transition: 0.8s;
font-size: 30 px;
background: #236DE5;
`;
seach.style = `
outline-color:#236DE5 ;
color: #f1f1f1;
background: #111;
`;
searchIcon.style = `
border: 1px #f9f9f9 solid;
color: #f7f7f7;
background: #111;
`;
searchIcon.style = `
border: 1px #f9f9f9 solid;
color: #f7f7f7;
background: #111;
`;
searchIcon.onclick = function() {
// Tab to edit
// searcher()
searchIcon.style = `background: #777;
color: #fff;`
}
logoe.onclick = function () {
if (logoMood == "span") {
spanLogo.style = `font-weight: 350;
color: #f1f1f1;
transition: 0.8s;
font-size: 30px;
background:#222;
`;
hh.style = `background: #2977F6;
padding: 5px;
border-radius: 7px;
font-weight: 450;
color: #f1f1f1;
transition: 0.8s;
font-size: 30px;
`;
logoMood = "h1";

}
else {
hh.style = `font-weight: 350;
color: #f1f1f1;
transition: 0.8s;
font-size: 30px;
margin: 3px;
background: #222;`;
spanLogo.style = `
padding: 5px;
border-radius: 7px;
font-weight: 450;
color: #f1f1f1;
transition: 0.8s;
font-size: 30px;background: #236DE5;
`;
logoMood = "span";
}
}

}
function lightt() {
  leftS.style.background = "#f1f1f1";
  leftS.style.color = "#000";
  document.querySelector(".navbar").style.background = "#fff";
rrt.style = `background :#f0f0f0;
color:#fff;
`
rrrt.style = `background :#f0f0f;
color:#fff;
`
rrrrt.style = `background :#f0f0f;
color:#fff;
`
rrrrrt.style = `background :#f0f0f;
color:#fff;
`
shoog.onclick = function() {
shoog.style = ` color:#092AB5;`
if (showMood == "show") {
show(hab, 100, "%");
showLll.innerHTML = "Hidden";
showMood = "hidden";
}
else {
hidden(hab, 140, "px");
showLll.innerHTML = "Show All";
showMood = "show";
}

}

w.style =`color:#9C9C9C;`;
infoo.style = `color:#000;`;
infooo.style = `color:#000;`;
infoooo.style = `color:#000;`;
containerq.style = `background :#f1f1f;
color:#000;
`
rrrtf.style = `background :#f1f1f;
color:#000;
`
header.style = `
background :#fff;
`;
hh.style = `
color: #333;
`;
spanLogo.style = `
color: #f1f1f1;
background: #2977F6;
`;
seach.style = `
outline-color:#2977F6 ;
color: #888;
`;
searchIcon.style = `
border: 1px #888 solid;
color: #888;
background: #f5f5f5;
`;
searchIcon.onclick = function() {
// Tab to edit
searcher()
searchIcon.style = `background: #f9f9f9;
color: #555;`
}
logoe.onclick = function() {
if (logoMood == "span") {
spanLogo.style = `font-weight: 350;
color: #333;
transition: 0.8s;
font-size: 30px;
background:#fff;
`;
hh.style = `background: #2977F6;
padding: 5px;
border-radius: 7px;
font-weight: 450;
color: #f1f1f1;
transition: 0.8s;
font-size: 30px;
`;
logoMood = "h1";
}
else {
hh.style = `font - weight: 350;
color: #333;
transition: 0.8s;
font-size: 30px;
margin: 3px;`;
spanLogo.style = `background: #2977F6;
padding: 5px;
border-radius: 7px;
font-weight: 450;
color: # f1f1f1;
transition: 0.8 s;
font - size: 30 px;background: #2977F6;
`;

logoMood = "span";
}
pi.style = `
     color:#000;
     background :#f6f6f6;
    `;
menu.style = `
     color:#000;
     background :#f6f6f6;
    `;
}


box.style = `background :#fff;`; body.style = `background :#f1f1f1;`;infoAlert.style = `background :#f0f0f;`;

}

let isDarkMode = localStorage.getItem("isDarkMode") === "true";

function toggleMode() {
  if (isDarkMode) {
    // استدعاء دالة الضوء
    lightt();
    isDarkMode = false;
    buttonMoodWeb.innerHTML = "dark_mode";
    pMoodWeb.innerHTML = "Dark Mood";
    pi.innerHTML = "dark_mode";
    
  } else {
    // استدعاء دالة الظلام
    darkk();
    isDarkMode = true;
    buttonMoodWeb.innerHTML = "light_mode";
    pMoodWeb.innerHTML = "Light Mood";
    pi.innerHTML = "light_mode";
    
  }
  // حفظ الحالة في Local Storage
  localStorage.setItem("isDarkMode", isDarkMode);
}

// استعادة الحالة عند تحميل الصفحة
window.onload = function() {
  n11()
  if (isDarkMode) {
    darkk();
    buttonMoodWeb.innerHTML = "light_mode";
    pMoodWeb.innerHTML = "Light Mood";
    pi.innerHTML = "light_mode";
  } else {
    lightt();
    buttonMoodWeb.innerHTML = "dark_mode";
    pMoodWeb.innerHTML = "Dark Mood";
    pi.innerHTML = "dark_mode";
  }
};

n11();

// search 




/*let valuelange = "en";
function trans() {
  if (valuelange === "en") {
    valuelange = "ar";
  } else {
    valuelange = "en";
  }
  console.log(valuelange);
}

*/
// التأكد من أن دالة alertt موجودة أو تعريفها إذا لم تكن موجودة

window.onerror = function(message, source, lineno, colno, error) {
  // عرض رسالة تنبيه عند حدوث خطأ
  alertt("):حدث خطأ، سوف يتم إعادة تحميل الموقع " + error, "red");

  // تعيين حدث النقر على الزر .btn-info لإعادة تحميل الصفحة
  var reloadButton = document.querySelector(".btn-info");
  if (reloadButton) {
    reloadButton.onclick = function() {
      location.reload();
    };
  } else {
    // إذا لم يكن الزر موجودًا، إعادة تحميل الصفحة فورًا
    location.reload();
  }

  // إعادة false لمنع ظهور رسالة الخطأ الافتراضية
  return false;
};
let logInbtn = document.getElementById("logInbtn")
sinUpBtn.onclick = function () {
 sinUp()
}
logInbtn.onclick = function() {
  login()
}
senahMood = false;

let sendComentBtn = document.getElementById('sendComentBtn');
sendComentBtn.onclick = function() {
  if (sendComent.value.trim() !== "") {
    let dateComent = new Date();
    let dateComentNow = dateComent.getFullYear() + "/" + (dateComent.getMonth() + 1) + "/" + dateComent.getDate();
    let newComent = {
      bodyComent: sendComent.value,
      nameComent: nameInput,
      datecoment: dateComentNow,
    };
    if (postIndex >= 0) {
      if (!posts[postIndex].coments) {
        posts[postIndex].coments = []; // Ensure the comments array exists
      }
      posts[postIndex].coments.push(newComent);
      localStorage.setItem("postN", JSON.stringify(posts));
      showComent();
      sendComent.value = "";
    } else {
      console.log("No post selected for comment");
    }
  } else {
    console.log("Comment is empty");
  }
};
let uploadbtn = document.querySelector('.uploadbtn')
uploadbtn.onclick = function() {
  if (narInp && narInp.value.trim() !== "") {
    let now = new Date();
    let date = now.getFullYear() + " / " + (now.getMonth() + 1) + " / " + now.getDate();
    console.log(date);
    let newPost = {
      bodyPost: narInp.value,
      name: nameInput,
      likes: 0,
      date: date,
      coments: [],
    };

    db.collection("posts").add(newPost)
      .then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
        // تحديث المنشورات بعد إضافة منشور جديد
        fetchPosts();
      })
      .catch((error) => {
        console.error("Error adding document: ", error);
      });

    clearInput();
  } else {
    alertt("Element with id 'narInp' not found or input value is empty.", "red");
  }
};

function showComent() {
  let comentser = document.getElementById("comentser");
  comentser.innerHTML = "";

  if (postIndex >= 0 && posts[postIndex].coments) {
    let storedComents = posts[postIndex].coments;

    if (storedComents.length === 0) {
      comentser.innerHTML = '<p class = "p-nan">لا يوجد تعليقات كون اول من يعلق</p>';
    } else {
      for (let i = 0; i < storedComents.length; i++) {
        let comentHTML = `
          <div class="coment1">
            <div class="profile-coment">
              <img src = "pro1.jpeg" alt="">
              <p class="pro-name-com">${storedComents[i].nameComent}</p>
              <p class= "comet-date-info">${storedComents[i].datecoment}</p>
            </div>
            <div class="info-txt-com">
              <p>${storedComents[i].bodyComent}</p>
            </div>
          </div>`;
        comentser.innerHTML += comentHTML;
      }
    }
  } else {
    comentser.innerHTML = '<p class = "p-nan">لا يوجد تعليقات كون اول من يعلق</p>';
  }
}

let comentsLength;
// دالة لاسترجاع المنشورات ووضعها في المصفوفة
function fetchPosts() {
  db.collection("posts").get().then((querySnapshot) => {
      posts = []; // نعيد تعيين المصفوفة لتفادي تكرار البيانات

      if (querySnapshot.empty) {
        console.log("No posts found");
      } else {
        const docs = querySnapshot.docs;
        for (let i = 0; i < docs.length; i++) {
          let postData = docs[i].data();
          postData.id = docs[i].id; // إضافة معرّف الوثيقة إلى البيانات
          posts.push(postData);
        }
      }

      // عرض المنشورات على واجهة المستخدم (اختياري)
      showPost(posts);
    })
    .catch((error) => {
      console.error("Error fetching documents: ", error);
    });
}

document.addEventListener('DOMContentLoaded', (event) => {
  fetchPosts();
});

function showPost(posts) {
  let postn = "";
  for (let i = posts.length - 1; i >= 0; i--) {
    comentsLength = posts[i].coments ? posts[i].coments.length : 0;
    postn += `
      <div class="nasher post">
        <div class="head-post">
          <div class="date-info">
            <p class="date">${posts[i].date}</p>
            <p class="material-symbols-outlined date-icon">calendar_month</p>
          </div>
          <div class="pro-post">
            <p>${posts[i].name}</p>
            <img class="pro-c" src="pro1.jpeg" alt="">
          </div>
        </div>
        <div class="post-info">
          <p>${posts[i].bodyPost}</p>
        </div>
        <div class="chosesec">
          <div class="upload like choke" onclick="deletePost('${posts[i].id}')">
            <button id="deleteee" class="likee deleteee chokee">
              <p>delete</p>
              <span id="spanS" class="material-symbols-outlined">delete</span>
            </button>
          </div>
          <div class="upload like choke" onclick="com(${i})">
            <button id="like" class="likee lookos chokee">
              <p id="lnn">${comentsLength}</p>
              <span id="spanSs" class="material-symbols-outlined spanS">comment</span>
            </button>
          </div>
          <div class="upload like choke" onclick="">
            <button id="like" class="likee lookos chokee">
              <p id="lnn">${posts[i].likes}</p>
              <span id="spanSs" class="material-symbols-outlined spanS">thumb_up</span>
            </button>
          </div>
        </div>
      </div>
    `;
  }
  document.getElementById("posts").innerHTML = postn;
}

function clearInput() {
  narInp.value = "";
}

function com(index) {
  let coment = document.getElementById("coment");
  let boxComent = document.querySelector(".box-coment");
  coment.style = `transform:translateY(0%)`;
  boxComent.style = `transform:translateX(0%)`;
  postIndex = index;
  showComent();
}

function deletePost(postId) {
  db.collection("posts").doc(postId).delete()
    .then(() => {
      console.log("Document successfully deleted!");
      fetchPosts();
    })
    .catch((error) => {
      console.error("Error removing document: ", error);
    });
}
// Variables dark mood
let searchMood = "opject";
 let inputSs = document.getElementById("inputSs")
 function getSearchMood(id) {
  if (id == "byOpject") {
    searchMood = "opject";
    inputSs.placeholder = "Search by opject"
  }
  else{
    inputSs.placeholder = "Search by name"
    searchMood = "name";
  }
searchere(inputSs.value)
 }
 
 
// search in header
let seachInput = document.getElementById("seach").value;

function searcher(value) {
  let postn = "";
  let postne = "";
  let found = false;
  for (let i = posts.length - 1; i >= 0; i--) {
  if (posts[i] && posts[i].name && posts[i].name.toLocaleLowerCase().includes(value.trim().toLocaleLowerCase())) {
    found = true;
    postn += `
      <div class="nasher post">
      <div class = "head-post">
      <div class = "date-info">
      <p class = "date">${posts[i].date}</p>
      <p class = "material-symbols-outlined date-icon">calendar_month</p>
      </div>
        <div class="pro-post">
          <p>${posts[i].name}</p>
          <img class="pro-c" src = "pro1.jpeg" alt="">
        </div>
        </div>
        <div class="post-info">
          <p>${posts[i].bodyPost}</p>
        </div>
        <div class="chosesec">

          <div class="upload like choke" onclick="deletPostt(${i})">
            <button id="deleteee" class="likee deleteee chokee">
              <p>delete</p>
              <span id="spanS" class="material-symbols-outlined">delete</span>
            </button>
          </div>

          <div class="upload like choke" onclick="com(${i})">
            <button id="like" class="likee lookos chokee">
              <p id="lnn">${comentsLength}</p>
              <span id="spanSs" class="material-symbols-outlined spanS">comment</span>
            </button>
          </div>
                    <div class="upload like choke" onclick="likee(${i})">
            <button id="like" class="likee lookos chokee">
              <p id="lnn">${posts[i].likes}</p>
              <span id="spanSs" class="material-symbols-outlined spanS">thumb_up</span>
            </button>
          </div>
        </div>
      </div>`
  }
   else if (posts[i] && posts[i].bodyPost && posts[i].bodyPost.toLocaleLowerCase().includes(value.trim().toLocaleLowerCase())) {
     found = true;
         postn += `
      <div class="nasher post">
      <div class = "head-post">
      <div class = "date-info">
      <p class = "date">${posts[i].date}</p>
      <p class = "material-symbols-outlined date-icon">calendar_month</p>
      </div>
        <div class="pro-post">
          <p>${posts[i].name}</p>
          <img class="pro-c" src = "pro1.jpeg" alt="">
        </div>
        </div>
        <div class="post-info">
          <p>${posts[i].bodyPost}</p>
        </div>
        <div class="chosesec">

          <div class="upload like choke" onclick="deletPostt(${i})">
            <button id="deleteee" class="likee deleteee chokee">
              <p>delete</p>
              <span id="spanS" class="material-symbols-outlined">delete</span>
            </button>
          </div>

          <div class="upload like choke" onclick="com(${i})">
            <button id="like" class="likee lookos chokee">
              <p id="lnn">${comentsLength}</p>
              <span id="spanSs" class="material-symbols-outlined spanS">comment</span>
            </button>
          </div>
                    <div class="upload like choke" onclick="likee(${i})">
            <button id="like" class="likee lookos chokee">
              <p id="lnn">${posts[i].likes}</p>
              <span id="spanSs" class="material-symbols-outlined spanS">thumb_up</span>
            </button>
          </div>
        </div>
      </div>`
   }
  }

  if (found) {
    document.getElementById("posts").innerHTML = postn;
  } else {
    postne = `
      <div class="error-searchd">
        <p class="error-search">No results :(</p>
      </div>
    `;
    document.getElementById("posts").innerHTML = postne;
  }
}
function searchere(value) {
  let searchPost = "";
  let found = false;

  if (searchMood === "name") {
    for (let i = posts.length - 1; i >= 0; i--) {
      if (posts[i] && posts[i].name && posts[i].name.toLocaleLowerCase().includes(value.trim().toLocaleLowerCase())&&value.trim().toLocaleLowerCase()!== "") {
        found = true;
        searchPost += `
      <div class="nasher post">
        <div class="pro-post">
          <p>${posts[i].name}</p>
          <img class="pro-c" src = "pro1.jpeg" alt="">
        </div>
        <div class="post-info">
          <p>${posts[i].bodyPost}</p>
        </div>
        <div class="chosesec">
          <div class="upload like choke" onclick="deletPostt(${i})">
            <button id="deleteee" class="likee deleteee chokee">
              <p>delete</p>
              <span id="spanS" class="material-symbols-outlined">delete</span>
            </button>
          </div>
          <div class="upload like choke" onclick="likee(${i})">
            <button id="like" class="likee lookos chokee">
              <p id="lnn">${posts[i].likes}</p>
              <span id="spanSs" class="material-symbols-outlined spanS">thumb_up</span>
            </button>
          </div>
          <div class="upload like choke" onclick="com(${i})">
            <button id="like" class="likee lookos chokee">
              <p id="lnn">${comentsLength}</p>
              <span id="spanSs" class="material-symbols-outlined spanS">comment</span>
            </button>
          </div>
        </div>
      </div>
 `;
      }
    }

    if (found) {
      document.getElementById("postsSsearch").innerHTML = searchPost;
    } else {
      searchPost = `
        <div class="error-searchd">
          <p class="error-search">No results :(</p>
        </div>
      `;
      document.getElementById("postsSsearch").innerHTML = searchPost;
    }
    
  } else {
    for (let i = posts.length - 1; i >= 0; i--) {
      if (posts[i] && posts[i].bodyPost && posts[i].bodyPost.toLocaleLowerCase().includes(value.trim().toLocaleLowerCase()) && value.trim().toLocaleLowerCase() !== "") {
        found = true;
        searchPost += `
      <div class="nasher post">
        <div class="pro-post">
          <p>${posts[i].name}</p>
          <img class="pro-c" src = "pro1.jpeg" alt="">
        </div>
        <div class="post-info">
          <p>${posts[i].bodyPost}</p>
        </div>
        <div class="chosesec">
          <div class="upload like choke" onclick="deletPostt(${i})">
            <button id="deleteee" class="likee deleteee chokee">
              <p>delete</p>
              <span id="spanS" class="material-symbols-outlined">delete</span>
            </button>
          </div>
          <div class="upload like choke" onclick="likee(${i})">
            <button id="like" class="likee lookos chokee">
              <p id="lnn">${posts[i].likes}</p>
              <span id="spanSs" class="material-symbols-outlined spanS">thumb_up</span>
            </button>
          </div>
          <div class="upload like choke" onclick="com(${i})">
            <button id="like" class="likee lookos chokee">
              <p id="lnn">${comentsLength}</p>
              <span id="spanSs" class="material-symbols-outlined spanS">comment</span>
            </button>
          </div>
        </div>
      </div>
`;
      }
    }

    if (found) {
      document.getElementById("postsSsearch").innerHTML = searchPost;
    } else {
      searchPost = `
        <div class="error-searchd">
          <p class="error-search">No results :(</p>
        </div>
      `;
      document.getElementById("postsSsearch").innerHTML = searchPost;
    }  }
}

//darLigh();

                
function openSearch() {
  document.querySelector(".search-icon").style = `display:none;`;
  document.getElementById("seach").style = `display:flex;`
  
}


