let hamaColors = [

    { name: "White", hex: 'ECEDED' },
    { name: "Cream", hex: 'F0E8B9' },
    { name: "Yellow", hex: 'F0B901' },
    { name: "Orange", hex: 'E64F27' },
    { name: "Red", hex: "B63136" },
    { name: "Pink", hex: "E1889F" },
    { name: "Purple", hex: "694A82" },
    { name: "Dark Blue (Blue)", hex: "2C4690" },
    { name: "Light Blue", hex: "305CB0" },
    { name: "Green", hex: "256847" },
    { name: "Light green", hex: "49AE89" },
    { name: "Brown", hex: "534137" },
    { name: "Transparent Red", hex: "C02435" },
    { name: "Transparent Green", hex: "37B876" },
    { name: "Grey", hex: "83888A" },
    { name: "Black", hex: "2E2F31" },
    { name: "Clear", hex: "D8D2CE" },
    { name: "Reddish Brown", hex: "7F332A" },
    { name: "Light Brown", hex: "A5693F" },
    { name: "Dark Red", hex: "A52D36" },
    { name: "Translucent Purple", hex: '683E9A'},
    { name: "Translucent Brown", hex: '87593D'},
    { name: "Flesh", hex: 'DE9B90'},
    { name: "Beige", hex: 'DEB48B'},
    { name: "Army (Dark Green)", hex: '363F38'},
    { name: "Claret", hex: 'B9395E'},
    { name: "Burgundy", hex: '592F38'},
    { name: "Turquoise", hex: '6797AE'},
    { name: "Neon Pink (Fucsia)", hex: 'FF208D'},
    { name: "Cerise", hex: 'FF3956'},
    { name: "Neon Yellow", hex: 'E5EF13'},
    { name: "Neon Red", hex: 'FF2833'},
    { name: "Neon Blue", hex: '2353B0'},
    { name: "Neon Green", hex: '06B73C'},
    { name: "Neon Orange", hex: 'FD8600'},
    { name: "Fluorescent Yellow", hex: 'F1F21C'},
    { name: "Fluorescent Orange", hex: 'FE630B'},
    { name: "Fluorescent Blue", hex: '2659B2'},
    { name: "Fluorescent Green", hex: '0CBD51'},
    { name: "Pastel Yellow", hex: 'F0EA37'},
    { name: "Pastel Red", hex: 'EE6972'},
    { name: "Pastel Purple", hex: '886DB9'},
    { name: "Pastel Blue", hex: '629ED7'},
    { name: "Pastel Green", hex: '83CB70'},
    { name: "Pastel Pink", hex: 'CF70B7'},
    { name: "Azure", hex: '4998BC'},

];

// spawn color buttons
document.addEventListener("DOMContentLoaded", function(event) {
  let doc = document;
  let docFrag = document.createDocumentFragment();

  for (let i = 0; i < hamaColors.length; i++){

    let button = doc.createElement('button');
    button.innerHTML = hamaColors[i].name;
    button.addEventListener("click", toggleColor);
    button.setAttribute("id", "btnid_"+hamaColors[i].hex);


    let colorDiv = doc.createElement("div");
    colorDiv.classList.add("color-preview");
    colorDiv.style.backgroundColor = "#" + hamaColors[i].hex;

    button.appendChild(colorDiv);
    docFrag.appendChild(button);

  }

  doc.getElementById('color-container').appendChild(docFrag);

});

function toggleColor(event) {

    btn = document.getElementById(this.id);
    selectedContainer = document.getElementById("selected-color-container");
    if (selectedContainer.querySelector("#" + this.id) === null) {
        selectedContainer.appendChild(btn);
    } else {
        colorContainer = document.getElementById("color-container");
        colorContainer.appendChild(btn);
    }

}

