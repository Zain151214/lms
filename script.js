// Constructor Function

function Book(name, author, type) {
    this.name = name;
    this.author = author;
    this.type = type;
}

// Display Constructor

function Display() {}

// add methods to display prototype

Display.prototype.add = function (book) {
    console.log('adding to ui');
    let tableBody = document.getElementById('tableBody');

    let uiString = `   <tr>
                        <td>${book.name}</td>
                        <td>${book.author}</td>
                        <td>${book.type}</td>
                    </tr>`;
     
    tableBody.innerHTML += uiString;
}

Display.prototype.clear = function () {
    let libraryForm = document.getElementById('libraryForm');
    libraryForm.reset();
}

Display.prototype.validate = function (book) {
    if(book.name.length < 2 || book.author.length < 2){
        return false;
    }else{
        return true;
    }
}

// Add submit event listener to libraryForm

let libraryForm = document.getElementById('libraryForm');
libraryForm.addEventListener('submit', libraryFormSubmit);

function libraryFormSubmit(e) {
    console.log('form submiteed')

    let name = document.getElementById("bookName").value;
    let author = document.getElementById("author").value;
    let type;

    // for radio buttons 

    let fiction = document.getElementById("fiction");
    let programming = document.getElementById("programming");
    let cooking = document.getElementById("cooking");

    if (fiction.checked) {
        type = fiction.value;
    } else if (programming.checked) {
        type = programming.value;
    } else {
        type = cooking.value;
    }

    let book = new Book(name, author, type);
    let display = new Display();

    if(display.validate(book)){
        display.add(book);
        display.clear();
    }else{
        alert('Plz enter text in name and author section more then 2 characters.')
    }

    e.preventDefault();
}