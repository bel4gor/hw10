const addItemBtn = document.getElementById('addItemBtn');
const itemInput = document.getElementById('itemInput');
const shoppingList = document.getElementById('shoppingList');
const itemCount = document.getElementById('itemCount');
const feedback = document.getElementById('feedback');

addItemBtn.addEventListener('click', function () {
  const itemName = itemInput.value.trim();

  if (itemName === '') {
    feedback.textContent = 'Please enter a valid item name.';
    return;
  }

  feedback.textContent = '';

  const li = document.createElement('li');
  li.className = 'list-group-item d-flex justify-content-between align-items-center';
  li.textContent = itemName;

  // Extra credit: Remove item on click
  li.addEventListener('click', function () {
    shoppingList.removeChild(li);
    updateCount();
  });

  shoppingList.appendChild(li);
  itemInput.value = '';
  updateCount();
});

function updateCount() {
  itemCount.textContent = shoppingList.children.length;
}
