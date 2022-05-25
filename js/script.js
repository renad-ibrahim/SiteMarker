// variables to catch the input element 
var siteName = document.getElementById("siteName");
var siteUrl = document.getElementById("siteUrl");

// array to store all data which are user input
var container ;

// to check if the user has any data before or not
if(localStorage.getItem("userSites") != null){
    //if the user has data , we will display it to him once he open the site
    container = JSON.parse( localStorage.getItem("userSites") );
    display(container);
}
else{
    container = [];
}

// Store inputs values and put them into an object after clicking the submit button
function create(){
    var site = {
        name : siteName.value,
        url : siteUrl.value
    }

    //push every object user input into an array
    container.push(site);

    // take the array and put it into userSites key inside the localStorage ***why after push **** to take the latest update from an array
    localStorage.setItem("userSites"  , JSON.stringify(container));

    // calling them after clicking the submit button
    clearInputs();
    display(container);
}

// clear inputs values from input field 
function clearInputs() {
    siteName.value = "";
    siteUrl.value = "";
}

// Display inputs to the user in table 
function display(){
    var tableData = ``;
    for(i = 0 ; i < container.length ; i++){
        tableData += `<tr>
        <td>${container[i].name}</td>
        <td> <button class="btn btn-success" > <a target="_blank" class="text-white text-decoration-none" href="${container[i].url}">Visit</a> </button> </td>
        <td> <button class="btn btn-danger" onclick = "deleteSite(${i})" >Delete</button> </td>
    </tr>`
    }
    document.getElementById("tableBody").innerHTML = tableData;
}

// delete element if the user wanna to delete the site
function deleteSite(deletedIndex){
    container.splice(deletedIndex , 1);
    localStorage.setItem("userSites"  , JSON.stringify(container));
    display();
}