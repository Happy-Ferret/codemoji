(function (window, Cryptoloji, undefined) {
  'use strict'
  
  Cryptoloji.states.onboarding = {}

  Cryptoloji.states.onboarding.root = {
    enter: function () {
      $(".section_onboarding").addClass("section-show")
      $(".header").hide()
    },
    leave: function () {
      $(".section_onboarding").removeClass("section-show")
      $(".header").show()
    }
  }

  Cryptoloji.states.onboarding.watermelon = {
    enter: function () {
      $(".section_onboarding").addClass("section-show").addClass("step-0")
      $(".header").hide()
      var i = 0
      $(".section_onboarding").on("click", function(){
         if(i < 4){
           $(".section_onboarding").removeClass("step-"+ parseInt(i)).addClass("step-"+ parseInt(i + 1))
           i = i + 1
         }
      })
    },
    leave: function () {
      $(".header").show()
      $(".section_onboarding").removeClass("step-4").removeClass("section-show")
    }
  }

})(window, window.Cryptoloji); 