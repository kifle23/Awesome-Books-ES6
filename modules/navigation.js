export default () => {
  const list = document.getElementById('list');
  const addNew = document.getElementById('add-new');
  const contact = document.getElementById('contact');
  const listInfo = document.getElementById('list-info');
  const addNewInfo = document.getElementById('add-new-info');
  const contactInfo = document.getElementById('contact-info');

  const showList = () => {
    listInfo.style.display = 'flex';
    addNewInfo.style.display = 'none';
    contactInfo.style.display = 'none';
  };
  const showAddNew = () => {
    listInfo.style.display = 'none';
    addNewInfo.style.display = 'flex';
    contactInfo.style.display = 'none';
  };
  const showContact = () => {
    listInfo.style.display = 'none';
    addNewInfo.style.display = 'none';
    contactInfo.style.display = 'flex';
  };

  list.addEventListener('click', showList);
  addNew.addEventListener('click', showAddNew);
  contact.addEventListener('click', showContact);

  const activeLink = () => {
    const anchorTags = document.querySelectorAll('a');
    anchorTags.forEach((element) => {
      element.addEventListener('click', function (event) {
        event.preventDefault();
        anchorTags.forEach((element) => {
          element.classList.remove('active');
        });
        this.classList.add('active');
      });
    });
  };
  activeLink();
};
