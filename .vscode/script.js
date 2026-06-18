const inpt1 = document.querySelector("#name");
const inpt2 = document.querySelector("#email");
const form = document.querySelector("form");
const user = document.querySelector(".userdata");
const url = document.querySelector("#url");

const data = [
  {
    name: "sandip",
    email: "sandip@gmail.com",
    img: "https://plus.unsplash.com/premium_vector-1728553012443-3cf619e7579d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFufGVufDB8fDB8fHww",
  },
  {
    name: "karthi",
    email: "karthi@gmail.com",
    img: "https://images.unsplash.com/photo-1615109398623-88346a601842?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFufGVufDB8fDB8fHww",
  },
  {
    name: "subhdra",
    email: "subhdra@gmail.com",
    img: "https://images.unsplash.com/photo-1560087637-bf797bc7796a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d29tZW58ZW58MHx8MHx8fDA%3D",
  },
  {
    name: "olivia",
    email: "olivia@gmail.com",
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8d29tZW58ZW58MHx8MHx8fDA%3D",
  },
  {
    name: "kabir",
    email: "kabir@gmail.com",
    img: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fG1hbnxlbnwwfHwwfHx8MA%3D%3D",
  },
];
const ui = () => {
  user.innerHTML = "";
  data.forEach(function (elem, idx) {
    user.innerHTML += `  <div class="user-card">
            <div class="img-div">
            <img src="${elem.img}"
                    alt="">
            </div>
            <h3>NAME:${elem.name}</h3>
             <p>Email:${elem.email}</p>
            <div class="btns">
                <button class="update">update</button>
                <button onclick ="deli(${idx})" class="delete">delete</button>
            </div>`;
  });
};
ui();
form.addEventListener("submit", (event) => {
  event.preventDefault();
  let name = inpt1.value;
  let email = inpt2.value;
  let imageurl = url.value;

  if (name.trim() === "" && email.trim() === "" && imageurl.trim() === "")
    return;

  data.push({
    name: name,
    email: email,
    img: imageurl,
  });
  ui();

  form.reset();
});

var deli = function (idx) {
  data.splice(idx, 1);
  ui();
};
