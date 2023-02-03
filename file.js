console.log('this is project1');
//if note is added then update the local storage
localStorage.clear();
//function to add elements into local storage;
let addbtn = document.getElementById('add-btn');
    addbtn.addEventListener("click", function (e) {
    showNotes();

        let addtext = document.getElementById('add-text');
    
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesobj = [];
    }
    else {
        notesobj = JSON.parse(notes);
    }
    // console.log(notes);
     notesobj.push(addtext.value);
   
    localStorage.setItem("notes", JSON.stringify(notesobj));
    addtext.value = "";
    console.log(notesobj);


    showNotes();

});
//function to show elements from local storage;
function showNotes() {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesobj = [];
    }
    else {
        notesobj = JSON.parse(notes);
    }

    let html = "";
    notesobj.forEach(function (element, index) {
        html += `
        <div class="notecard card my-2 mx-2" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">Note ${index + 1}</h5>
            <p class="card-text">${element}</p>
            <button id="${index}" onclick="deleteNote(this.id)" class="btn btn-primary">Delete Note</button>
        </div>
        </div>     
        `;
    });
    
    let notesElem = document.getElementById('notes');
    if(notesobj.length != 0){
        notesElem.innerHTML= html;
    }
    else{
        notesElem.innerHTML= "nothig to show!...please add something";
    }

}


//function to delete note

function deleteNote(index) {
    console.log("i am deleting" , index);

    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesobj = [];
    }
    else {
        notesobj = JSON.parse(notes);
    }

    notesobj.splice(index,1);
    localStorage.setItem("notes" , JSON.stringify(notesobj));
    showNotes();


    
}