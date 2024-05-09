import{a as O}from"./chunk-UXRZ3QNY.js";import{c as E}from"./chunk-TMQEY75P.js";import"./chunk-GX5EWQQM.js";import{a as S,b as M,c as x,d as y,e as k,f as w,g as P}from"./chunk-M7IKT5IS.js";import{d as v,e as C}from"./chunk-DB7IGAXR.js";import{a as u}from"./chunk-PVSVCBQX.js";import"./chunk-YWHE27JH.js";import{$a as g,Na as e,Oa as t,Va as c,Xa as r,_ as h,ab as f,bb as _,db as b,xa as d,ya as p}from"./chunk-ESKPFVMM.js";import"./chunk-X6YOYRVK.js";var B=(()=>{let l=class l{constructor(o,i){this.router=o,this.usuarioService=i,this.email="",this.clave=""}iniciarSesion(){let o;try{o=O.crearParaIniciarSesion(this.email,this.clave)}catch(i){u.alertAccesoError(i);return}this.usuarioService.iniciarSesion(o).then(i=>{u.alertAccesoExito("Inicio de sesion exitoso"),setTimeout(()=>{this.router.navigateByUrl("/home/info-usuario")},250)}).catch(i=>{u.alertAccesoError("No existe el usuario")})}cargarUsuario(o){this.email=this.usuarioService.usuariosValidos[o-1].email,this.clave=this.usuarioService.usuariosValidos[o-1].clave}};l.\u0275fac=function(i){return new(i||l)(p(v),p(E))},l.\u0275cmp=h({type:l,selectors:[["app-login"]],standalone:!0,features:[b],decls:31,vars:2,consts:[[1,"container","mt-5"],[1,"row","justify-content-center"],[1,"col-md-6"],[1,"card","p-4"],[1,"card-body"],[1,"card-title","text-center","mb-4"],[1,"mb-3"],["for","email",1,"form-label"],["type","email","id","email","placeholder","Ingrese su email","name","email",1,"form-control",3,"ngModelChange","ngModel"],["for","clave",1,"form-label"],["type","password","id","clave","placeholder","Ingrese su contrase\xF1a","name","clave",1,"form-control",3,"ngModelChange","ngModel"],[1,"text-center"],["type","submit",1,"btn","text-white","bg-dark","w-100",3,"click"],[1,"text-center","mt-3"],["href","#","routerLink","/registrar",1,"form-label"],["type","submit",1,"btn","text-white","bg-primary","w-100",3,"click"]],template:function(i,n){i&1&&(e(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"h5",5),r(6,"Iniciar Sesion"),t(),e(7,"form")(8,"div",6)(9,"label",7),r(10,"Email"),t(),e(11,"input",8),_("ngModelChange",function(a){return f(n.email,a)||(n.email=a),a}),t()(),e(12,"div",6)(13,"label",9),r(14,"Contrase\xF1a"),t(),e(15,"input",10),_("ngModelChange",function(a){return f(n.clave,a)||(n.clave=a),a}),t()(),e(16,"div",11)(17,"button",12),c("click",function(){return n.iniciarSesion()}),r(18," Iniciar Sesion "),t()(),e(19,"div",13)(20,"a",14),r(21,"\xBFNo tenes una cuenta? Registrate aqui."),t()(),e(22,"div",13)(23,"button",15),c("click",function(){return n.cargarUsuario(1)}),r(24," Usuario 1 "),t()(),e(25,"div",13)(26,"button",15),c("click",function(){return n.cargarUsuario(2)}),r(27," Usuario 2 "),t()(),e(28,"div",13)(29,"button",15),c("click",function(){return n.cargarUsuario(3)}),r(30," Usuario 3 "),t()()()()()()()()),i&2&&(d(11),g("ngModel",n.email),d(4),g("ngModel",n.clave))},dependencies:[P,w,S,M,x,k,y,C],styles:["body[_ngcontent-%COMP%]{background:#000}.card[_ngcontent-%COMP%]{margin-top:5%;border:none;height:320px}.forms-inputs[_ngcontent-%COMP%]{position:relative}.forms-inputs[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{position:absolute;top:-18px;left:10px;background-color:#fff;padding:5px 10px;font-size:15px}.forms-inputs[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{height:50px;border:2px solid #eee}.forms-inputs[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus{box-shadow:none;outline:none;border:2px solid #000}.btn[_ngcontent-%COMP%]{height:50px}.success-data[_ngcontent-%COMP%]{display:flex;flex-direction:column}.bxs-badge-check[_ngcontent-%COMP%]{font-size:90px}"]});let m=l;return m})();export{B as LoginComponent};
