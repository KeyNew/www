 function $(id){
        return document.getElementById(id);
    }

   function getStyle(obj,attr){
               return getComputedStyle(obj,null)[attr];
           }

           var list = document.getElementById("list");
           var lis = list.children;
           var ol = document.getElementById("ol");
           var olli =ol.children;
           var w = parseInt(getStyle(lis[0],"width"));

           var oll=0;
           var n=0;         
           list.addEventListener("touchstart",function(ev){
               ev.preventDefault();
               var ex = ev.changedTouches[0].pageX;

               oll=this.offsetLeft;
               list.addEventListener("touchmove", function(ev){
                  var dis = ev.changedTouches[0].pageX-ex;
                   list.style.left=oll+dis+"px";
               })
               list.addEventListener("touchend", function(ev){
                  n=Math.round(this.offsetLeft/w);
                  n=index;
                  if(n>0){
                    n=0;
                  }else if(n<-(lis.length-1)){
                      n=-(lis.length-1);
                  }
                   list.style.left=n*w+"px";
                   timer = setInterval(xz, 3000);
               });
           });

           var leader = 0,target = 0;
           var index = 0;
           function ld(index){
                for (var i = 0; i < olli.length; i++) {
                        olli[i].className="";
                    }
                    olli[index].className="current";
                    target = index*-innerWidth;
                    setInterval(function(){
                        leader = leader+(target-leader)/10;
                        list.style.left=leader+"px";
                    }, 30);
                }

        for (var i = 0; i < olli.length; i++) {
               olli[i].index=i;
                olli[i].onmouseover=function(){
                    index=this.index;
                    ld(this.index);
                }
            }

            function xz(){
                index++;
                if(index>7){
                    index=0;
                }
                ld(index);
            }

     var  timer = setInterval(xz, 3000);