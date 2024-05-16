import{g as T}from"./chunk-YSNOTCFZ.js";import{a as g}from"./chunk-PVSVCBQX.js";import{$a as S,Ha as p,Ja as c,La as i,Ma as o,Na as d,Oa as b,Pa as E,Qa as x,Ra as C,Sa as m,Ta as f,Va as u,Z as h,ab as O,ga as _,ha as v,wa as s,wb as I,xb as P}from"./chunk-X4LIZENW.js";import"./chunk-X6YOYRVK.js";var y=()=>[0,1,2,3];function j(e,n){e&1&&(i(0,"div",11),d(1,"img",12),o())}function J(e,n){e&1&&(i(0,"div",11),d(1,"img",13),o())}function M(e,n){e&1&&(i(0,"div",14),d(1,"img",15),o())}function U(e,n){e&1&&(i(0,"div",16),d(1,"img",17),o())}function D(e,n){e&1&&(i(0,"div",18),d(1,"img",19),o())}function z(e,n){e&1&&(i(0,"div",20),d(1,"img",21),o())}function F(e,n){e&1&&(i(0,"div",22),d(1,"img",23),o())}function R(e,n){if(e&1&&(i(0,"span"),f(1),o()),e&2){let l=n.$implicit,t=m();s(),u(" ",t.letraEstaDeshabilitada(l)?l:"_"," ")}}function w(e,n){if(e&1){let l=x();i(0,"button",26),C("click",function(){let a=_(l).$implicit,r=m(2);return v(r.elegirLetra(a))}),f(1),o()}if(e&2){let l=n.$implicit,t=m(2);c("disabled",t.letraEstaDeshabilitada(l)||t.estaDetenido),s(),u(" ",l," ")}}function L(e,n){if(e&1&&(b(0),i(1,"div",24),p(2,w,2,2,"button",25),o(),E()),e&2){let l=n.$implicit,t=m();s(2),c("ngForOf",t.letras.slice(l*6,(l+1)*6))}}var G=(()=>{let n=class n{constructor(){this.listaPalabras=["ARGENTINA","COMPUTADORA","TELEVISION","DESTORNILLADOR","DINOSAURIO","EXTRATERRESTRE","SUPERMERCADO"],this.letras="ABCDEFGHIJKLMN\xD1OPQRSTUVWXYZ".split(""),this.letrasSeleccionadas=[],this.contadorErrores=0,this.estaDetenido=!1,this.puntaje=0,this.mezclarLista(this.listaPalabras),this.palabra=this.listaPalabras[0].toUpperCase().replace(/\s/g,"").split("")}ngOnInit(){}validarSiGano(){this.palabra.every(a=>this.letrasSeleccionadas.includes(a))?(this.contadorErrores===0?this.puntaje=5:this.puntaje=2,g.alertJuegoTerminado(`Tu puntaje fue: ${this.puntaje}`).then(()=>{this.reiniciarJuego()})):g.alertJuegoGanaste(":D")}validarSiPerdio(){this.contadorErrores===6?(this.estaDetenido=!0,g.alertJuegoTerminado(`La palabra era '${this.palabra.join("")}', tu puntaje fue: ${this.puntaje}`).then(()=>{this.reiniciarJuego()})):g.alertJuegoPerdiste(":(")}elegirLetra(t){if(!this.letrasSeleccionadas.includes(t)&&(this.letrasSeleccionadas.push(t),!this.palabra.includes(t))){this.contadorErrores++,this.validarSiPerdio();return}this.validarSiGano()}reiniciarJuego(){this.letrasSeleccionadas=[],this.contadorErrores=0,this.mezclarLista(this.listaPalabras),this.palabra=this.listaPalabras[0].toUpperCase().replace(/\s/g,"").split(""),this.estaDetenido=!1}letraEstaDeshabilitada(t){return this.letrasSeleccionadas.includes(t)}mezclarLista(t){for(let a=t.length-1;a>0;a--){let r=Math.floor(Math.random()*(a+1));[t[a],t[r]]=[t[r],t[a]]}}};n.\u0275fac=function(a){return new(a||n)},n.\u0275cmp=h({type:n,selectors:[["app-juego-uno"]],standalone:!0,features:[S],decls:13,vars:10,consts:[[1,"ahorcado-container"],[1,"card","ahorcado-munieco"],["class","cabeza",4,"ngIf"],["class","cuerpo",4,"ngIf"],["class","brazo-izquierdo",4,"ngIf"],["class","brazo-derecho",4,"ngIf"],["class","pierna-izquierda",4,"ngIf"],["class","pierna-derecha",4,"ngIf"],[1,"card","ahorcado-palabra"],[4,"ngFor","ngForOf"],[1,"ahorcado-letras"],[1,"cabeza"],["src","assets/juego-uno/ahorcado-0.png"],["src","assets/juego-uno/ahorcado-1.png"],[1,"cuerpo"],["src","assets/juego-uno/ahorcado-2.png"],[1,"brazo-izquierdo"],["src","assets/juego-uno/ahorcado-3.png"],[1,"brazo-derecho"],["src","assets/juego-uno/ahorcado-4.png"],[1,"pierna-izquierda"],["src","assets/juego-uno/ahorcado-5.png"],[1,"pierna-derecha"],["src","assets/juego-uno/ahorcado-6.png"],[1,"row"],["class","btn col",3,"disabled","click",4,"ngFor","ngForOf"],[1,"btn","col",3,"click","disabled"]],template:function(a,r){a&1&&(i(0,"div",0)(1,"div",1),p(2,j,2,0,"div",2)(3,J,2,0,"div",2)(4,M,2,0,"div",3)(5,U,2,0,"div",4)(6,D,2,0,"div",5)(7,z,2,0,"div",6)(8,F,2,0,"div",7),o(),i(9,"div",8),p(10,R,2,1,"span",9),o(),i(11,"div",10),p(12,L,3,1,"ng-container",9),o()()),a&2&&(s(2),c("ngIf",r.contadorErrores==0),s(),c("ngIf",r.contadorErrores===1),s(),c("ngIf",r.contadorErrores===2),s(),c("ngIf",r.contadorErrores===3),s(),c("ngIf",r.contadorErrores===4),s(),c("ngIf",r.contadorErrores===5),s(),c("ngIf",r.contadorErrores===6),s(2),c("ngForOf",r.palabra),s(2),c("ngForOf",O(9,y)))},dependencies:[T,P,I],styles:[".ahorcado-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;align-items:center;height:calc(100vh - 58px);background:linear-gradient(6deg,#fff,#656565 90%)}.ahorcado-errores[_ngcontent-%COMP%]{color:#fff}.ahorcado-munieco[_ngcontent-%COMP%]{width:400px;height:250px;margin-top:-30px;border:solid 2px #ffffff;background-color:#202020}.ahorcado-munieco[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{margin-bottom:-100px}.ahorcado-palabra[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:center;align-items:center;margin-top:15px;font-size:25px;border:solid 2px #ffffff;background-color:#202020}.ahorcado-palabra[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#fff;margin:10px}.ahorcado-letras[_ngcontent-%COMP%]{margin-top:15px}.ahorcado-letras[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;margin:5px;height:50px;width:50px;border-radius:25px;border:solid 2px #ffffff;background-color:#202020;color:#fff}"]});let e=n;return e})();export{G as JuegoUnoComponent};