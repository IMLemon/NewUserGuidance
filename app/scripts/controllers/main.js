'use strict';

/**
 * @ngdoc function
 * @name testApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the testApp
 */
 angular.module('testApp')
 .controller('MainCtrl', function () {
  this.awesomeThings = [
  'HTML5 Boilerplate',
  'AngularJS',
  'Karma'
  ];
});

/*$(function(){

  //读取cookie
  var res=document.cookie.substring(13,27);

  //如果没有cookie
  if (res!=="localhost:9000") {
    $('#mask,#searchTip,#searchTip div:eq(0)').show();
    $('#searchTip div a').click(function(){
      var current=$(this).parent();
      current.hide();
      current.next().show();});

  //添加cookie
    var oDate=new Date();
    oDate.setMinutes(oDate.getMinutes()+1);
    document.cookie="name=localhost:9000;expires="+oDate.toGMTString();//expries失效时间
  }
});*/

window.onload = function () {

  var oMask = document.getElementById('mask');
  var oSearch = document.getElementById('searchTip');
  var aStep = oSearch.getElementsByTagName('div');
  var aA = oSearch.getElementsByTagName('a');
  var aClose = oSearch.getElementsByTagName('span');


  //读取cookie
  var res=document.cookie.substring(13,27);


  //如果没有cookie
  if (res!=="localhost:9000") {
    //mask parent frame first unit to display
    oMask.style.display = oSearch.style.display = aStep[0].style.display = 'block';

    //next step button
    for (var i = 0; i<aStep.length; i++) {
       aA[i].index = i;//give index attribute to each button
       aA[i].onclick = function () {
        this.parentNode.style.display = "none";
        if (this.index < aStep.length - 1) {
          aStep[this.index + 1].style.display = "block";
        }else {
        oMask.style.display = oSearch.style.display = "none";}//当体验结束，所有包括蒙版都
       };  
    }
    //close button
    for (var j = 0; j < aClose.length; j++) {
      aClose[j].onclick = function () {
        oMask.style.display = oSearch.style.display = "none";
      };
    }
    //添加cookie
    var oDate=new Date();
    oDate.setMinutes(oDate.getMinutes()+1);
    document.cookie="name=localhost:9000;expires="+oDate.toGMTString();//expries失效时间
  }

};
