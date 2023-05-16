const data=[
    {
        name: "Corey Mylchreest",
        age: 25,
        distance:"4628 Km",
        status: "online",
        avatarSrc: "./images/coreyMylchreest.jpg",
        gender:"male"
    },
    {
        name: "Vinnie Hacker",
        age: 20,
        distance:"4204 Km",
        status: "online",
        avatarSrc: "./images/vinniehacker.jpg",
        gender:"male"
    },
    {
        name: "Xavier Serrano",
        age: 29,
        distance:"5936 Km",
        status: "online",
        avatarSrc: "./images/xavierSerrano.jpg",
        gender:"male"
    },
    {
        name: "Irina Shayk",
        age: 37,
        distance:"2412 Km",
        status: "online",
        avatarSrc: "./images/irinaShayk.jpg",
        gender:"female"
    },
    {
        name: "Ray Bitancourt",
        age: 31,
        distance:"11784 Km",
        status: "online",
        avatarSrc: "./images/rayBitancourt.jpg",
        gender:"female"
    },
    {
        name: "Grace Elizabeth",
        age: 26,
        distance:"4204 Km",
        status: "online",
        avatarSrc: "./images/GraceElizabeth.jpg",
        gender:"female"
    }
]

const container= document.querySelector(".container")

const mainContainer = document.createElement("div");
mainContainer.classList.add("main-container");

const userList = document.createElement("ul");

for (const user of data) {
  const userItem = document.createElement("li");
  userItem.classList.add(
    "user-item", 
    user.gender,
  );

  const userTab = document.createElement("div");
  userTab.classList.add("user-tab");
  userTab.className='userTab'

  const userTabLeft = document.createElement("div");
  userTabLeft.classList.add("user-tab-left");

  const imageContainer = document.createElement("div");
  imageContainer.classList.add("image-container");

  const avatar = document.createElement("img");
  avatar.src = user.avatarSrc;
  avatar.className="image"

  const userDetails = document.createElement("div");
  userDetails.className='user-details'
  userDetails.classList.add("user-details");

  const fullName = document.createElement("p");
  fullName.classList='full-name'
  fullName.classList.add("full-name");
  fullName.textContent = `${user.name}, ${user.age}`;

  const distance = document.createElement("p");
  distance.classList.add("distance");
  distance.textContent = user.distance;

  const userTabRight = document.createElement("div");
  userTabRight.classList.add("user-tab-right");
  userTabRight.className="user-tab-right"

  const status = document.createElement("div");
  status.classList.add("status");
  status.textContent = user.status;

  imageContainer.appendChild(avatar);
  userDetails.appendChild(fullName);
  userDetails.appendChild(distance);
  userTabLeft.appendChild(imageContainer);
  userTabLeft.appendChild(userDetails);
  userTabRight.appendChild(status);
  userTab.appendChild(userTabLeft);
  userTab.appendChild(userTabRight);
  userItem.appendChild(userTab);
  userList.appendChild(userItem);
}

mainContainer.appendChild(userList);
container.appendChild(mainContainer);


