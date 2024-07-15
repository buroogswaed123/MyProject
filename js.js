
document.addEventListener('DOMContentLoaded', () => {
    const addContactButton = document.getElementById('addContactButton');
    const deleteContactsButton = document.getElementById('deleteContactsButton');
    const contactPopup = document.getElementById('contactPopup');
    const closePopup = document.getElementById('closePopup');
    const contactForm = document.getElementById('contactForm');
    const contactList = document.getElementById('contactList');

    const contacts = [
        { id: 1, name: 'John Doe', phone: '123-456-7890', email: 'john@example.com' },
        { id: 2, name: 'Jane Smith', phone: '987-654-3210', email: 'jane@example.com' }
    ];

    function displayContacts() {
        contactList.innerHTML = '';
        contacts.forEach(contact => {
            const contactItem = document.createElement('div');
            contactItem.className = 'contact-item';
            contactItem.innerHTML = `
                <input type="checkbox" data-id="${contact.id}">
                <span>${contact.name} - ${contact.phone} - ${contact.email}</span>
            `;
            contactList.appendChild(contactItem);
        });
    }

    function openPopup() {
        contactPopup.style.display = 'block';
    }

    function closePopupFunction() {
        contactPopup.style.display = 'none';
    }

    function addContact(event) {
        event.preventDefault();
        const name = document.getElementById('contactName').value;
        const phone = document.getElementById('contactPhone').value;
        const email = document.getElementById('contactEmail').value;
        const newContact = {
            id: Date.now(),
            name,
            phone,
            email
        };
        contacts.push(newContact);
        displayContacts();
        closePopupFunction();
    }

    function deleteSelectedContacts() {
        const checkboxes = document.querySelectorAll('.contact-item input[type="checkbox"]:checked');
        checkboxes.forEach(checkbox => {
            const contactId = parseInt(checkbox.getAttribute('data-id'), 10);
            const index = contacts.findIndex(contact => contact.id === contactId);
            if (index !== -1) {
                contacts.splice(index, 1);
            }
        });
        displayContacts();
    }

    addContactButton.addEventListener('click', openPopup);
    closePopup.addEventListener('click', closePopupFunction);
    contactForm.addEventListener('submit', addContact);
    deleteContactsButton.addEventListener('click', deleteSelectedContacts);

    displayContacts();
});