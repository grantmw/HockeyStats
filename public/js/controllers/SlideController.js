app.controller('SlideController', ['$scope', function($scope) {
  
  this.player = 'ovechkin';
  this.chooseslide = function(player_name){
    this.player = player_name
  };
  this.whatslide = function(player_name){
    //return boolean
    return this.player === player_name
  };

  $(document).ready(function() {
    console.log(this);
    // $('.images').on('click', 'img', function(){
    //   console.log('listener working')
    //   $('div.playername').animate({'top': '-14px'}, 'slow')
    // });
    $('.images').on('mouseenter', 'img', function(){
      $(this).toggleClass('chosenonehover')
    });
    $('.images').on('mouseleave', 'img', function(){
      $(this).toggleClass('chosenonehover')
    });
  });

}]);