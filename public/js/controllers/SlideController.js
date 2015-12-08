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
    var showEverything = function(){
      $('.loading').css('display','none')
      $('.player-info').css('display','block')
    }

    setTimeout(showEverything, 7000)
    $('.images').on('mouseenter', 'img', function(){
      $(this).toggleClass('chosenonehover')
    });
    $('.images').on('mouseleave', 'img', function(){
      $(this).toggleClass('chosenonehover')
    });
  });

}]);