var lastScrollTop = 0;
        window.addEventListener('scroll', function() {
          
          var scrollPosition = window.scrollY;
          var header = document.querySelector('.header-upper');
          var currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
          if (intr) {
                clearInterval(intr);
            }
      if (currentScrollTop >= lastScrollTop) {
        header.style.height = '0px';
      } else { 
        if (scrollPosition == 0) {
            header.style.height = 'auto';
            header.style.background = 'transparent';
        } else {
            if(header.style.height == 'auto' || header.style.height == '0px' ) {
                header.style.background = '#222';
            var count = 0;
            var intr = setInterval(() => {
                header.style.height = (count++) + 'px';
                if (count == 126) {
                    clearInterval(intr);
                }
            }, 0.01);
            }
            
        }          
      }
      lastScrollTop = currentScrollTop;
        });


    var count = 0;

    function incrementCount() {
      count++;
      document.getElementById('countElement').textContent = count;
    }

    let dropdownVisible = false;

    function toggleDropdownVisibility() {
      const dropdownContent = document.querySelector(".dropdown-content");

      if (dropdownVisible) {
        dropdownContent.classList.remove("active");
      } else {
        dropdownContent.classList.add("active");
      }

      dropdownVisible = !dropdownVisible;
    }