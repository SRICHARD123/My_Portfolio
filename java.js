

     // Show SweetAlert as soon as the page loads
   
  window.onload = function() {
    swal({
      content: createDotSpinner(),
      buttons: false,
      closeOnClickOutside: false,
      closeOnEsc: false,
    });

    // Auto-close after 3 seconds
    setTimeout(() => swal.close(), 5000);
  };

  function createDotSpinner() {
    const container = document.createElement('div');

    const spinner = document.createElement('div');
    spinner.classList.add('dot-spinner');

    for (let i = 0; i < 3; i++) {
      const dot = document.createElement('div');
      dot.classList.add('dot');
      spinner.appendChild(dot);
    }

    const text = document.createElement('p');
    text.style.textAlign = 'center';
    text.textContent = "Loading...";

    container.appendChild(spinner);
    container.appendChild(text);

    return container;
  }
// arrow up


// Show button when page is scrolled down
window.onscroll = function() {
    const btn = document.getElementById("scrollBtn");
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
      btn.style.display = "block";
    } else {
      btn.style.display = "none";
    }
  };
  
  // Scroll smoothly to the top
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }
  





