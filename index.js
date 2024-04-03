
// const element = document.createElement("div");
// document.body.append(element);

// const ul = document.createElement("ul");
// for (let i = 0; i < 3; i++) {
//   const li = document.createElement("li");
//   li.textContent = (i + 1).toString();
//   ul.append(li);
// }
// element.append(ul);

// const lastLi = ul.lastElementChild;
// lastLi.textContent = "Hi there!";
// console.log(lastLi.textContent);

// const main = document.getElementById("main");
// if (main) {
//   main.innerHTML = `
//     <h1>Poodles!</h1>
//     <h3>An Essay into the Pom-Pom as Aesthetic Reconfiguration of the Other from a post-Frankfurt School Appropriationist Perspective</h3>
//     <p><em>By: Byron Q. Poodle, Esq., BA.</em></p>`;
//   main.style.height = "300px";
//   main.style.backgroundColor = "#27647B";
//   main.textContent = "You've changed what's on the screen!";
//   main.style.fontSize = "24px";
//   main.style.marginLeft = "30px";
//   main.style.lineHeight = "2";
//   main.classList.remove("dog");
//   main.classList.add("cat", "sale");
// }

const mainElement = document.getElementById('main');
    mainElement.remove();


const newHeader = document.createElement('h1');
newHeader.textContent = 'Eugene is the champion'; 
newHeader.id = 'victory';

document.body.append(newHeader);


