import{a as b,c as g}from"./chunk-IGK4EADA.js";import"./chunk-4NNJTYQ7.js";import"./chunk-R4TC5525.js";import"./chunk-GA4GTMOU.js";import{$a as h,Ha as c,Ja as d,La as a,Ma as o,Ta as n,Va as f,Wa as p,Z as m,wa as s,wb as v,xa as l}from"./chunk-X4LIZENW.js";import"./chunk-X6YOYRVK.js";function U(t,e){if(t&1&&(a(0,"li"),n(1),o()),t&2){let S=e.$implicit;s(),f(" ",S.nombre," ")}}var y=(()=>{let e=class e{constructor(i,r){this.databaseService=i,this.usuarioService=r,this.listaUsuarios=[],this.usuarioObtenido={nombre:""},this.emailUsuario=""}ngOnInit(){this.emailUsuario=this.usuarioService.getEmail(),this.usuarioService.traerTodos()?.subscribe(i=>{this.listaUsuarios=i}),this.usuarioService.traerPorId(this.emailUsuario)?.subscribe(i=>{this.usuarioObtenido=i})}};e.\u0275fac=function(r){return new(r||e)(l(b),l(g))},e.\u0275cmp=m({type:e,selectors:[["app-info-usuario"]],standalone:!0,features:[h],decls:9,vars:3,consts:[[1,"info-usuario-container"],[4,"ngFor","ngForOf"]],template:function(r,u){r&1&&(a(0,"div",0)(1,"h1"),n(2,"Informacion Usuario Works!"),o(),a(3,"ul")(4,"label"),n(5,"Lista Usuarios"),o(),c(6,U,2,1,"li",1),o(),a(7,"h2"),n(8),o()()),r&2&&(s(6),d("ngForOf",u.listaUsuarios),s(2),p(" Nombre del usuario '",u.emailUsuario,"'-> ",u.usuarioObtenido.nombre," "))},dependencies:[v],styles:[".info-usuario-container[_ngcontent-%COMP%]{height:calc(100vh - 58px);background:linear-gradient(6deg,#fff,#656565 90%)}"]});let t=e;return t})();export{y as InfoUsuarioComponent};
