function loadCart() {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  const tbody = document.getElementById('cart-items');
  const totalDiv = document.getElementById('cart-total');

  tbody.innerHTML = '';

  if (cart.length === 0) {
    tbody.innerHTML = '<tr><td colspan="5" style="text-align:center;">Your cart is empty.</td></tr>';
    totalDiv.textContent = '';
    return;
  }

  let grandTotal = 0;

  cart.forEach((item, index) => {
    const itemTotal = item.price * item.qty;
    grandTotal += itemTotal;

    const tr = document.createElement('tr');

    tr.innerHTML = `
      <td>${item.name}</td>
      <td>${item.price.toFixed(2)}</td>
      <td>
        <input type="number" min="1" value="${item.qty}" data-index="${index}" class="qty-input" />
      </td>
      <td>${itemTotal.toFixed(2)}</td>
      <td><button data-index="${index}" class="remove-btn">Remove</button></td>
    `;

    tbody.appendChild(tr);
  });

  totalDiv.innerHTML = `<h3>Total: $${grandTotal.toFixed(2)}</h3>`;

  // Attach event listeners for quantity change
  document.querySelectorAll('.qty-input').forEach(input => {
    input.addEventListener('change', function () {
      const idx = this.getAttribute('data-index');
      let val = parseInt(this.value);
      if (val < 1) val = 1;
      this.value = val;
      cart[idx].qty = val;
      localStorage.setItem('cart', JSON.stringify(cart));
      loadCart(); // Refresh the cart view
    });
  });

  // Attach event listeners for remove buttons
  document.querySelectorAll('.remove-btn').forEach(button => {
    button.addEventListener('click', function () {
      const idx = this.getAttribute('data-index');
      cart.splice(idx, 1);
      localStorage.setItem('cart', JSON.stringify(cart));
      loadCart();
    });
  });
}

// Initial load
loadCart();
