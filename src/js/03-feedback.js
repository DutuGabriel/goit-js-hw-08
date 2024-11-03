<<<<<<< Updated upstream
//check..
=======
const LOCAL_STORAGE_KEY = 'feedback-form-state';

const saveFeedback = data => {
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(data));
};

const getFeedback = () => {
  const savedData = localStorage.getItem(LOCAL_STORAGE_KEY);
  return savedData ? JSON.parse(savedData) : {};
};

const populateForm = () => {
  const formData = getFeedback();
  document.querySelector('input[name="email"]').value = formData.email || '';
  document.querySelector('textarea[name="message"]').value =
    formData.message || '';
};

const handleInput = event => {
  const formData = getFeedback();
  const updatedData = {
    ...formData,
    [event.target.name]: event.target.value,
  };
  saveFeedback(updatedData);
};

const handleSubmit = event => {
  event.preventDefault();
  const formData = getFeedback();
  console.log('Submitted data:', formData);
  localStorage.removeItem(LOCAL_STORAGE_KEY);
  event.currentTarget.reset();
};

const form = document.querySelector('.feedback-form');
form.addEventListener('input', _.throttle(handleInput, 500));
form.addEventListener('submit', handleSubmit);
document.addEventListener('DOMContentLoaded', populateForm);
>>>>>>> Stashed changes
