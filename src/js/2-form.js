const formData = { email: '', message: '' };

const form = document.querySelector('.feedback-form');
const localStorageKey = 'feedback-form-state';
const savedData = localStorage.getItem(localStorageKey);

// parse savedData from LocalStorage befor website started //
if (savedData) {
  const parsedData = JSON.parse(savedData);
  formData.email = parsedData.email ?? '';
  formData.message = parsedData.message ?? '';

  form.elements.email.value = formData.email;
  form.elements.message.value = formData.message;
}

// values for formData const //
form.addEventListener('input', evt => {
  formData[evt.target.name] = evt.target.value;
  localStorage.setItem(localStorageKey, JSON.stringify(formData));
});

// submit and form reset with alert //
form.addEventListener('submit', evt => {
  evt.preventDefault();
  if (formData.email.trim() === '' || formData.message.trim() === '') {
    alert('Fill please all fields');
    return;
  }

  console.log(formData);

  localStorage.removeItem(localStorageKey);
  form.reset();

  formData.email = '';
  formData.message = '';
});
