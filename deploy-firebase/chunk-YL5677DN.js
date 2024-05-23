import{a as X,c as _}from"./chunk-5LZMEZ4H.js";import"./chunk-YAKXDKO4.js";import{a as W,b as q,e as Q,g as C}from"./chunk-X4MHT563.js";import{c as A,d as H,e as R}from"./chunk-QPGK4NSD.js";import"./chunk-NYKCLNJP.js";import{$a as g,Ab as U,Ha as j,Ja as x,La as o,Ma as r,Na as b,P as S,Qa as k,Ra as m,Sa as d,Ta as a,U as O,Ua as v,Va as P,Xa as E,Ya as I,Z as p,Za as T,cb as F,db as V,eb as z,ga as u,ha as f,wa as l,wb as D,xa as h,xb as N,yb as B,zb as L}from"./chunk-LWDUHSDB.js";import"./chunk-X6YOYRVK.js";var M=(()=>{let t=class t{constructor(n){this.database=n,this.bd="tp01_mensajes"}enviarMensaje(n,e){this.database.insertar({emisor:n,texto:e,fechaEnvio:new Date().toISOString()},this.bd)}traerTodos(){return this.database.traerTodos(this.bd)}static ordenarPorFecha(n){return n.sort((e,c)=>{let w=new Date(e.fechaEnvio),K=new Date(c.fechaEnvio);return w.getTime()-K.getTime()})}};t.\u0275fac=function(e){return new(e||t)(O(X))},t.\u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"root"});let i=t;return i})();var $=(i,t)=>({"mensaje-enviado":i,"mensaje-recibido":t});function ee(i,t){if(i&1){let s=k();o(0,"div",2)(1,"button",3),m("click",function(){u(s);let e=d();return f(e.mostrarChat())}),a(2,"CHAT"),r()()}}function te(i,t){if(i&1&&(o(0,"div",14)(1,"div",15)(2,"span",16),a(3),b(4,"br"),a(5),V(6,"date"),r(),o(7,"p",17),a(8),r()()()),i&2){let s=t.$implicit,n=d(2);x("ngClass",F(7,$,n.emailUsuario===s.emisor,n.emailUsuario!==s.emisor)),l(3),v(s.emisor),l(2),P(" ",z(6,4,s.fechaEnvio,"dd/MM/yyyy HH:mm"),""),l(3),v(s.texto)}}function ne(i,t){if(i&1){let s=k();o(0,"div",4)(1,"div",5)(2,"label",6),a(3,"Chat"),r(),o(4,"button",7),m("click",function(){u(s);let e=d();return f(e.ocultarChat())}),a(5,"X"),r()(),o(6,"div",8)(7,"div",9),j(8,te,9,10,"div",10),r()(),o(9,"div",11)(10,"input",12),T("ngModelChange",function(e){u(s);let c=d();return I(c.inputMensaje,e)||(c.inputMensaje=e),f(e)}),m("keydown.enter",function(){u(s);let e=d();return f(e.enviarMensaje())}),r(),o(11,"button",13),m("click",function(){u(s);let e=d();return f(e.enviarMensaje())}),a(12,"Enviar"),r()()()}if(i&2){let s=d();l(8),x("ngForOf",s.listaMensajes),l(2),E("ngModel",s.inputMensaje)}}var G=(()=>{let t=class t{constructor(n,e){this.usuarioService=n,this.chatService=e,this.listaMensajes=[],this.inputMensaje="",this.emailUsuario="",this.estadoMostrar=!1,this.emailUsuario=this.usuarioService.getEmail(),this.actualizarChat()}ngOnInit(){}enviarMensaje(){this.inputMensaje!==""&&(this.chatService.enviarMensaje(this.emailUsuario,this.inputMensaje),this.actualizarChat(),this.inputMensaje="")}mostrarChat(){this.estadoMostrar=!0,this.actualizarScroll()}ocultarChat(){this.estadoMostrar=!1}actualizarChat(){this.chatService.traerTodos()?.subscribe(n=>{this.listaMensajes=M.ordenarPorFecha(n),this.actualizarScroll()})}actualizarScroll(){setTimeout(()=>{let n=document.getElementsByClassName("mensaje"),e=n[n.length-1];e&&(document.getElementById("mensajes-container").scrollTop=e.offsetTop)},20)}};t.\u0275fac=function(e){return new(e||t)(h(_),h(M))},t.\u0275cmp=p({type:t,selectors:[["app-chat"]],standalone:!0,features:[g],decls:2,vars:2,consts:[["class","chat-button",4,"ngIf"],["class","chat-container card text-center",4,"ngIf"],[1,"chat-button"],[1,"btn",3,"click"],[1,"chat-container","card","text-center"],[1,"card-header","text-start"],[2,"color","white"],[1,"btn","btn-danger",3,"click"],[1,"card-body"],["id","mensajes-container",1,"mensajes-container"],["class","mensaje",3,"ngClass",4,"ngFor","ngForOf"],[1,"card-footer"],["type","text","placeholder","Ingresa tu mensaje",1,"form-control",3,"ngModelChange","keydown.enter","ngModel"],[1,"btn","btn-success",3,"click"],[1,"mensaje",3,"ngClass"],[1,"mensaje-contenido"],[1,"mensaje-informacion"],[1,"mensaje-texto"]],template:function(e,c){e&1&&j(0,ee,3,0,"div",0)(1,ne,13,2,"div",1),e&2&&(x("ngIf",!c.estadoMostrar),l(),x("ngIf",c.estadoMostrar))},dependencies:[C,W,q,Q,U,D,N,B,L],styles:[".chat-button[_ngcontent-%COMP%]{position:fixed;z-index:9999;bottom:50px;right:50px}.chat-button[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:80px;height:80px;border-radius:50px;background-color:#202020;color:#fff;font-size:18px;border:solid 2px #ffffff}.chat-container[_ngcontent-%COMP%]{position:fixed;z-index:9999;width:350px;right:50px;bottom:50px;background-color:#777;border:solid 2px white}.card-header[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;height:60px;background-color:#202020;border-bottom:solid 2px #a7a7a7}.card-header[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{position:absolute;right:5px;width:40px;height:40px;border-radius:15px;font-size:15px;background-color:#777;color:#fff;border:solid 2px white}.card-footer[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;height:70px;background-color:#202020;border-top:solid 2px #a7a7a7}.card-footer[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{border:solid 2px white;border-radius:2px 15px 15px 2px;background-color:#a7a7a7;color:#202020;margin-right:15px}.card-footer[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{background-color:#777;border:solid 2px white;color:#fff}.mensajes-container[_ngcontent-%COMP%]{height:350px;overflow:scroll}.mensajes-container[_ngcontent-%COMP%]::-webkit-scrollbar{display:none}.mensaje[_ngcontent-%COMP%]{margin:5px 0;border-radius:25px}.mensaje-contenido[_ngcontent-%COMP%]{display:inline-block;padding:10px}.mensaje-enviado[_ngcontent-%COMP%]{display:block;float:right;background-color:#202020;color:#fff;text-align:right}.mensaje-enviado[_ngcontent-%COMP%]   .mensaje-informacion[_ngcontent-%COMP%]{font-size:12px;color:#a7a7a7}.mensaje-recibido[_ngcontent-%COMP%]{display:block;float:left;background-color:#a7a7a7;color:#000;text-align:left}.mensaje-recibido[_ngcontent-%COMP%]   .mensaje-informacion[_ngcontent-%COMP%]{font-size:12px;color:#202020}.mensaje-texto[_ngcontent-%COMP%]{min-width:200px;max-width:200px;margin-bottom:2px;word-wrap:break-word}.form-control[_ngcontent-%COMP%]{box-shadow:none!important}"]});let i=t;return i})();var J=(()=>{let t=class t{constructor(n,e){this.router=n,this.usuarioService=e,this.email="",this.email=this.usuarioService.getEmail()}ngOnInit(){}cerrarSesion(){this.usuarioService.cerrarSesion().then(n=>{this.router.navigateByUrl("/iniciar-sesion")}).catch(n=>console.log(n))}};t.\u0275fac=function(e){return new(e||t)(h(H),h(_))},t.\u0275cmp=p({type:t,selectors:[["app-nav-bar"]],standalone:!0,features:[g],decls:25,vars:1,consts:[[1,"navbar","navbar-expand-lg","navbar-dark"],[1,"container-fluid"],["routerLink","/home/info-usuario",1,"navbar-brand"],["id","navbarNav",1,"collapse","navbar-collapse"],[1,"navbar-nav","me-auto","mb-2","mb-lg-0"],[1,"nav-item"],["aria-current","page","routerLink","/home/juego-uno",1,"nav-link"],["aria-current","page","routerLink","/home/juego-dos",1,"nav-link"],["aria-current","page","routerLink","/home/juego-tres",1,"nav-link"],["aria-current","page","routerLink","/home/juego-cuatro",1,"nav-link"],[1,"navbar-nav","ms-auto","mb-2","mb-lg-0"],["routerLink","/home/quien-soy",1,"nav-link"],["href","#",1,"nav-link",3,"click"]],template:function(e,c){e&1&&(o(0,"nav",0)(1,"div",1)(2,"a",2),a(3),r(),o(4,"div",3)(5,"ul",4)(6,"li",5)(7,"a",6),a(8,"Ahorcado"),r()(),o(9,"li",5)(10,"a",7),a(11,"Mayor o Menor"),r()(),o(12,"li",5)(13,"a",8),a(14,"Preguntados"),r()(),o(15,"li",5)(16,"a",9),a(17,"Predicci\xF3n"),r()()(),o(18,"ul",10)(19,"li",5)(20,"a",11),a(21,"\xBFQui\xE9n soy?"),r()(),o(22,"li",5)(23,"a",12),m("click",function(){return c.cerrarSesion()}),a(24,"Cerrar Sesi\xF3n"),r()()()()()()),e&2&&(l(3),v(c.email))},dependencies:[C,R],styles:[".navbar[_ngcontent-%COMP%]{border-bottom:solid 2px white;background:radial-gradient(circle,#555,#4b4b4b 7%,#454545 11%,#3c3c3c 17%,#353535,#2e2e2e 27%,#2b2b2b 29%,#292929,#262626 41%,#232323 46%,#1e1e1e 55% 60%,#1d1d1d 66% 69%,#1c1c1c 74%,#171717 77%,#151515 83%,#121212 88%,#0e0e0e 95%,#000)}"]});let i=t;return i})();var Ce=(()=>{let t=class t{constructor(){}ngOnInit(){}};t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=p({type:t,selectors:[["app-home"]],standalone:!0,features:[g],decls:3,vars:0,template:function(e,c){e&1&&b(0,"app-nav-bar")(1,"router-outlet")(2,"app-chat")},dependencies:[A,J,G]});let i=t;return i})();export{Ce as HomeComponent};
