const changeWidth = () => {
  const newValue = `${document.querySelector('.width-slider').value}px`;
  document.querySelector('.js-variable-container').style.width = newValue;
  document.querySelector('.js-width-value').innerHTML = newValue; 
}

document.querySelector('.width-slider').addEventListener('change', changeWidth);

document.querySelector('.width-plus').addEventListener('click', () => {
  document.querySelector('.width-slider').value = Math.min(
      700,
      Number.parseInt(document.querySelector('.width-slider').value, 10) + 10
  );
  changeWidth();
});

document.querySelector('.width-minus').addEventListener('click', () => {
  document.querySelector('.width-slider').value = Math.max(
      300,
      Number.parseInt(document.querySelector('.width-slider').value, 10) - 10
  );
  changeWidth();
});

function changeField(key, value) {
  switch (key) {
      case 'as': 
          document.querySelector('.js-variable-item').style.alignSelf = value;
          break;
      case 'order':
          document.querySelector('.js-variable-item').style.order = 
              value === 'm1' ? -1 : parseInt(value);
          break; 
      case 'fg':
      case 'fs':
      case 'fb':
          const oldValue = parseInt( document.querySelector(`.${key}-slider`).value );
          const step = parseInt( document.querySelector(`.${key}-slider`).step );
          const unit = key === 'fb' ? 'px' : '';
          if (value === 'minus') {
              document.querySelector(`.${key}-slider`).value = `${Math.max(
                  parseInt( document.querySelector(`.${key}-slider`).min ), 
                  oldValue - step
              )}`;
          } else {
              document.querySelector(`.${key}-slider`).value = `${Math.min(
                  parseInt( document.querySelector(`.${key}-slider`).max ), 
                  oldValue + step
              )}`;
          }
          const property = key === 'fg' ? 'flexGrow' : key === 'fs' ? 'flexShrink' : 'flexBasis';
          document.querySelector('.js-variable-item').style[property] = 
              `${document.querySelector(`.${key}-slider`).value}${unit}`;
          document.querySelector(`.js-value-${key}`).innerHTML = 
              `${document.querySelector(`.${key}-slider`).value}${unit}`;
          break;
  }
}

for (let btn of document.querySelectorAll('button') ) {
  btn.addEventListener('click', function(e) {
      const [key, value] = e.target.classList.value.split('-');
      changeField(key, value);
  })
}

