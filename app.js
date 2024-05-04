console.log('this is note app');
shownotes();
let addbtn = document.getElementById('addbtn');
addbtn.addEventListener('click',function(e){
    let addtxt = document.getElementById("addtxt");
    let notes = localStorage.getItem("notes");
    if(notes==null){
        notesobj=[];
    }
    else{
        notesobj=JSON.parse(notes);
    }
    notesobj.push(addtxt.value);
    localStorage.setItem("notes",JSON.stringify(notesobj));
    addtxt.value="";
    console.log(notesobj);
    shownotes();
})

function shownotes(){
    let notes = localStorage.getItem("notes");
    if(notes==null){
        notesobj=[];
    }
    else{
        notesobj=JSON.parse(notes);
    }
    let html = "";
    notesobj.forEach(function(element,index){
        html += `
        <div class="noteCard my-2 mx-2 card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">note ${index + 1}</h5>
          <p class="card-text"> ${element}</p>
          <button id="${index}"onclick="deleteNote(this.id)" class="btn btn-primary">Delet Note</button>
        </div>
      </div> `;
    });
    let notesele = document.getElementById('notes');
    if(notesobj.length!=0){
        notesele.innerHTML = html;
    }
    else{
        notesele.innerHTML=`Nothing! plz "Add a Notes"`;
    }
}

//delete notes//
function deleteNote(index){
    console.log('I am Deleting',index);

    let notes = localStorage.getItem("notes");
    if(notes==null){
        notesobj=[];
    }
    else{
        notesobj=JSON.parse(notes);
    }

    notesobj.splice(index,1);
    localStorage.setItem("notes",JSON.stringify(notesobj));
    shownotes();
}

let search = document.getElementById('searchTxt');
search.addEventListener("input", function(){
    let inputval=search.value.toLowerCase();
    console.log('input event fired!',inputval);
    let noteCards=document.getElementsByClassName('noteCard');
    Array.from(noteCards).forEach(function(element){
        let cardTxt=element.getElementsByTagName("p")[0];
        console.log(cardTxt);
        if(cardTxt.includes(inputval)){
            element.style.display= "block";
        }
        else{
            element.style.display= "none";
        }
    })
    
}) 

