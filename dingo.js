console.log("Dingo.js v0.8");
console.log("MIT License 2018")

var ELEMENT=[];
var STYLE= document.createElement('style')
document.body.appendChild(STYLE);
ELEMENT['body']=document.body;
document.body.style.boxSizing = "border-box";
var metaTag=document.createElement('meta');
metaTag.name = "viewport"
metaTag.content = "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
document.getElementsByTagName('head')[0].appendChild(metaTag);

function addelem(id,type,add){
  if(typeof type==='function'){
    if('style' in add){
    }else{
      add['style']=[];
    }
    var elemid=type(id,add);
    return elemid;
  }else{
    var args={};
    args['id']=id;
    args['style']={};
    args['tag']=type;
    for(var key in add){
      if(key!='style'){
        args[key]=add[key];
      }
    }
    var p;
    parent=args['parent'];
    if(parent!=null&&parent!=""){
      p=document.getElementById(args['parent']);
    }else{
      p=document.getElementsByTagName("BODY")[0];
    }
    ELEMENT[id]=document.createElement(args['tag']);
    ELEMENT[id].setAttribute('id',id);
    //ELEMENT[id].onclick=args['onclick'];
    //ELEMENT[id].onmouseover=args['onmouseover'];
    //ELEMENT[id].ondblclick=args['ondblclick'];

    for(key in args){
      ELEMENT[id][key]=args[key];
    }

    if("style" in args){
      for(key in args['style']){
        ELEMENT[id]['style'][key]=args['style'][key];
      }
    }
    if(add!=null){
      if('style' in add){
        for(key in add['style']){
          ELEMENT[id]['style'][key]=add['style'][key];
        }
      }
    }
    ELEMENT[id].addchild=function(child,type,args){
      args['parent']=id;
      ELEMENT[id][child]=addelem(id+":"+child,type,args);
      return ELEMENT[id][child];
    }
    ELEMENT[id].view=function(){console.log(this)};
    //default settings

    //ELEMENT[id].style.position="absolute";
    //ELEMENT[id].style.display="inline-block";
    //ELEMENT[id].style.overflow="visible";


    p.appendChild(ELEMENT[id]);
    return ELEMENT[id];
  }

}

function element(id){
  if(id in ELEMENT){
    return ELEMENT[id];
  }else{
    console.error("Undefined Element:"+id);
  }
}
function ELEMENT(id){
  if(id in ELEMENT){
    return ELEMENT[id];
  }else{
    console.error("Undefined Element:"+id);
  }
}
function elem(id){
  if(id in ELEMENT){
    return ELEMENT[id];
  }else{
    console.error("Undefined Element:"+id);
  }
}

function addstyle(name,css){
  var cout=name+"{";
  for(var key in css){
      cout+=key+":"+css[key]+";";
  }
  cout+="}";
  STYLE.innerHTML+=cout;
}

/////////////////////////////////////////
//........Function Libraries...........//
/////////////////////////////////////////
//................I/O..................//
//-------------------------------------//

//-------------------------------------//
//................GUI..................//
//-------------------------------------//
function landscape(){
  return (window.innerWidth>window.innerHeight);
}

function portrait(){
  return (window.innerWidth<window.innerHeight);
}

function browserwidth(){
  return window.innerWidth;
}

function browserheight(){
  return window.innerHeight;
}
//-------------------------------------//
//Storage
//-------------------------------------//
function savevar(key,value){

}
function getvar(key){

}
function writefile(name,file){

}
function readfile(name){

}
//-------------------------------------//
//Network
//-------------------------------------//
function redirect(url){
  window.location.href=url;
}
function redirectnew(url){
  window.open(url, '_blank');
}

//-------------------------------------//
//Timing
//-------------------------------------//
var timeintervals=[];

function delay(func,time){
  setTimeout(func,time);
}
function repeat(func,time,num){
  for(var i=0;i<num;i++){
    setTimeout(func,time*i);
  }
  //timeintervals[func]=setInterval(func, 3000);
}
function wait(func,time){
  setTimeout(func,time);
}
/////////sjakjakak
function loop(func,time){
  for(var i=0;i<num;i++){
    setTimeout(func,time*i);
  }
  //timeintervals[func]=setInterval(func, 3000);
}
function cancelrepeat(func){
  clearInterval(timeintervals[func]);
}
function date(){

}
function time(){

}
//-------------------------------------//
//User Data
//-------------------------------------//
/////////////////////////////////////////
//Component Libraries
/////////////////////////////////////////
//Basic
function menu(name,args){
  addelem(name,"div",{style:{width:"100%","background-color":"blue"}});
  this.link={};
  for(var key in args){
    this.link[key]=addelem(name+key,"a",{innerHTML:key,href:args[key]});
  }

}
