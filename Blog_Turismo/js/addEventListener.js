
  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sideNav');
    var instances = M.SideNav.init(elems, options);
  });

  // Or with jQuery

  $(document).ready(function(){
    $('.button-collapse').sideNav();
  });
