///// about header 
    window.addEventListener('scroll', function () {
        const header = document.querySelector('header');

         header.classList.toggle('newclass', window.scrollY > 10);
      });                         ///// --- ///

      ///// about 