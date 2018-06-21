//Dingo.js v1.2
//MIT License 2018

var STYLE=document.createElement('style');
document.body.appendChild(STYLE);


document.body.style.boxSizing = "border-box";
var metaTag=document.createElement('meta');
metaTag.name = "viewport"
metaTag.content = "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
document.getElementsByTagName('head')[0].appendChild(metaTag);

function addelem(type,add){
  if(typeof type==='function'){
    if('style' in add){
    }else{
      add['style']=[];
    }
    var elemid=type(add);
    return elemid;
  }else{
    var args={};
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
      p=parent;
    }else{
      p=document.body;
    }

    elemref=document.createElement(args['tag']);

    for(key in args){
      elemref[key]=args[key];
    }

    if("style" in args){
      for(key in args['style']){
        elemref['style'][key]=args['style'][key];
      }
    }
    if(add!=null){
      if('style' in add){
        for(key in add['style']){
          elemref['style'][key]=add['style'][key];
        }
      }
    }
    elemref.addchild=function(type,args){
      args["parent"]=this;
      if("id" in args){
        this[args["id"]]=addelem(type,args);
        return this[args["id"]];
      }else{
        return addelem(type,args);
      }

    }
    elemref.view=function(){console.log(this)};

    p.appendChild(elemref);
    return elemref;
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
function addsrc(url){
  var script=document.createElement('script');
  script.type='text/javascript';
  script.src=url;
  document.head.appendChild(script);

}
function addscript(code){
  var script=document.createElement('script');
  script.type='text/javascript';
  script.innerHTML=code;
  document.head.appendChild(script);
}
