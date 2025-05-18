 const radios = document.querySelectorAll('input[name="color"]');
  const products = document.querySelectorAll('.product');

  radios.forEach(radio => {
    radio.addEventListener('change', () => {
      const color = radio.value.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");

      // Bước 1: Làm mờ tất cả
      products.forEach(product => product.classList.add('fade-out'));

      // Bước 2: Sau khi mờ xong thì cập nhật ảnh và hiển thị lại
      setTimeout(() => {
        products.forEach((product, i) => {
          const img = product.querySelector('img');

          if (color === 'đen') {
            img.src = `./image/image${i + 1}.jpg`;
            product.style.display = 'block';
            product.classList.remove('fade-out');
          } else if (color === 'trang') {
            if (i === 0) {
              img.src = `./image/image5.jpg`;
              product.style.display = 'block';
              product.classList.remove('fade-out');
            } else {
              product.style.display = 'none';
            }
          }
        });
      }, 300); // Delay khớp với CSS transition
    });
  });