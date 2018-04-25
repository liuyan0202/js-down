window.onload=function(){
    function Fun(str){
        this.li=document.getElementById("but");
        //console.log(this.li);
        /*this.marks=document.createElement("div");
        console.log(this.marks);*/
        this.wrap=document.querySelector(str);
        this.move=document.getElementById("move");
        this.btn();
        this.removeMark();

    }
    Fun.prototype.btn=function(){
        var that=this;
        this.li.addEventListener("click",function(){
            //console.log(that.mark);
            that.mark();
        },false)
    }
    Fun.prototype.mark=function(){
            var mark=document.createElement("div");
            this.wrap.appendChild(mark);
            mark.style.cssText="width:100%;height:100%;background:rgba(0,0,0,.3);position:fixed";
            var box=document.getElementsByClassName("box")[0];
            box.style.display="block";
            mark.appendChild(box);
    }
    Fun.prototype.removeMark=function(){
        this.move.onclick=function(){
            console.log("已删除");
        }
    }
    var obj=new Fun(".wrap");
}