console.log('this is magic notes');

//function to add notes into local storage


let addbtn = document.getElementById("add-btn");
// console.log(addbtn);
    addbtn.addEventListener("click" , function addtext(e) {
        showNotes();
     
        let addtxt = document.getElementById("add-text");
        //check if there is existing notes available
        let notes = localStorage.getItem('notes');
        if(notes == null){
            notesobj = [];
        }
        else{
            notesobj = JSON.parse(notes);
        }

        // or else add notes by users
        notesobj.push(addtxt.value);
        localStorage.setItem('notes' , JSON.stringify(notesobj));
        addtxt.value= "";
        console.log(notesobj); 

    showNotes();
        
    });

    //funtion to show notes on page 

    function showNotes() {

        let notes = localStorage.getItem("notes");
        if(notes == null){
            notesobj = [];
        }
        else{
            notesobj = JSON.parse(notes);
        }

        let html = "";
        notesobj.forEach( function(element , index) {

            html +=`
            
            <div class="card my-2 mx-2" style="width: 18rem;">
                 <div class="card-body">
                    <h5 class="card-title">Note ${index + 1}</h5>
                    <p class="card-text">${element}</p>
                    <button id="${index}" onclick="deleteNote(this.id)"  class="btn btn-primary">Delete Note</button >
                </div> 
            </div> 
            
            `;
            
        });
        let notesElem = document.getElementById("notes");
        if(notesobj.length != 0){
            notesElem.innerHTML = html ;
        }
        else{
            notesElem.innerHTML= "nothig to show!...please add something";
        
    }
}

//function to delete notes

function deleteNote(index){
    console.log("I am deleting note" , index);

    let notes = localStorage.getItem("notes");
    if(notes == null){
        notesobj = [];
    }
    else{
        notesobj = JSON.parse(notes);
    }

    notesobj.splice(index , 1);
    localStorage.setItem('notes' , JSON.stringify(notesobj));
    showNotes();



}
