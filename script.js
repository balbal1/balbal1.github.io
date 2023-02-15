let container = document.getElementsByClassName('contacts')[0];
let empty = document.getElementsByClassName('empty')[0]

let addContact = function() {
    if (document.forms["myForm"]["name"].value == "" || document.forms["myForm"]["phone"].value == "") {
        return;
    }
    empty.style.display = 'none';
    
    let contact = document.createElement('div');
    let name = document.createElement('p');
    let phone = document.createElement('p');
    let close = document.createElement('div');
    
    contact.setAttribute("class", "contact");
    close.setAttribute("class", "close");
    
    n = document.getElementsByClassName('contact').length
    close.setAttribute("onclick", "deleteContact("+n+")")
    close.innerText = "X";
    
    name.innerText = document.forms["myForm"]["name"].value;
    phone.innerText = document.forms["myForm"]["phone"].value;
    
    contact.appendChild(name);
    contact.appendChild(phone);
    contact.appendChild(close);
    container.appendChild(contact);
}

let deleteContact = function(i) {
    let contacts = document.getElementsByClassName('contact');
    contacts[i].remove();

    contacts = document.getElementsByClassName('contact');
    for (i = 0; i < contacts.length; i++) {
        contacts[i].children[2].setAttribute("onclick", "deleteContact("+i+")")
    }

    if (i == 0) {
        empty.style.display = 'inline-block';
    }
}