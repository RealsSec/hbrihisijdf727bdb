function audio(){document.getElementById("video").play()}function video(){var e=document.getElementById("audio");e.volume=.2,e.play()}video(),document.onkeydown=function(e){return 123!=event.keyCode&&((!e.ctrlKey||!e.shiftKey||e.keyCode!="I".charCodeAt(0))&&((!e.ctrlKey||!e.shiftKey||e.keyCode!="C".charCodeAt(0))&&((!e.ctrlKey||!e.shiftKey||e.keyCode!="J".charCodeAt(0))&&((!e.ctrlKey||e.keyCode!="U".charCodeAt(0))&&void 0))))};let counter=0,Title="real.toxic",direction=!0;aniTitle=setInterval((function(){counter==Title.length&&(direction=!1),0==counter&&(direction=!0),counter=1==direction?++counter:--counter,newtitle=0==counter?"":Title.slice(0,counter),document.title=""+newtitle}),400),window.oncontextmenu=function(){return!1},$(document).keydown((function(e){return 123!=e.keyCode&&(!(e.ctrlKey&&e.shiftKey&&73==e.keyCode||e.ctrlKey&&e.shiftKey&&74==e.keyCode)&&void 0)}));