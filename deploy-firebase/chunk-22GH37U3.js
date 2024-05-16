import{a as I}from"./chunk-GA4GTMOU.js";import{a as d}from"./chunk-PVSVCBQX.js";import{$a as w,Ha as h,Ja as c,La as s,Ma as p,Na as b,P as m,Qa as j,Ra as y,Sa as u,Ta as g,U as v,Va as _,Wa as f,Z as x,ga as P,ha as C,ta as A,wa as o,wb as S,xa as U,xb as B}from"./chunk-X4LIZENW.js";import{f as i}from"./chunk-X6YOYRVK.js";var k=(()=>{let a=class a{constructor(e){this.http=e,this.apiUrlArgentina="https://restcountries.com/v3.1/name/argentina",this.apiUrlEstadosUnidos="https://restcountries.com/v3.1/name/usa",this.apiUrlBrasil="https://restcountries.com/v3.1/name/brasil",this.apiUrlAnimalPerro="https://dog.ceo/api/breeds/image/random",this.apiUrlAnimalZorro="https://randomfox.ca/floof/"}getImagenPerro(){return i(this,null,function*(){return yield(yield fetch(this.apiUrlAnimalPerro)).json()})}getImagenZorro(){return i(this,null,function*(){return yield(yield fetch(this.apiUrlAnimalZorro)).json()})}getArgentina(){return i(this,null,function*(){return(yield(yield fetch(this.apiUrlArgentina)).json())[0]})}getEstadosUnidos(){return i(this,null,function*(){return(yield(yield fetch(this.apiUrlEstadosUnidos)).json())[0]})}getBrasil(){return i(this,null,function*(){return(yield(yield fetch(this.apiUrlBrasil)).json())[0]})}getFetch(e){return i(this,null,function*(){try{return yield(yield fetch(e)).json()}catch(t){console.log(t)}})}getHttpClient(e){return i(this,null,function*(){this.http.get(e).subscribe(t=>{console.log(t)})})}};a.\u0275fac=function(t){return new(t||a)(v(I))},a.\u0275prov=m({token:a,factory:a.\u0275fac,providedIn:"root"});let r=a;return r})();function F(r,a){if(r&1){let n=j();s(0,"div")(1,"button",7),y("click",function(){let t=P(n).index,l=u(2);return C(l.seleccionarOpcion(t))}),g(2),p()()}if(r&2){let n=a.$implicit,e=a.index,t=u(2);o(),c("disabled",t.opcionesSeleccionadas[e]),o(),f(" ",e+1,". ",n," ")}}function M(r,a){if(r&1&&(s(0,"div")(1,"h1",3),g(2),p(),b(3,"img",4),s(4,"div",5),h(5,F,3,3,"div",6),p()()),r&2){let n=u();o(2),f(" ",n.contadorPregunta,"\xB0 ",n.preguntaActual.pregunta," "),o(),c("src",n.preguntaActual.imagenUrl,A),o(2),c("ngForOf",n.preguntaActual.opciones)}}var N=(()=>{let a=class a{constructor(e){this.apiService=e,this.preguntaActual=null,this.contadorPregunta=1,this.puntaje=0,this.opcionesSeleccionadas=[!1,!1,!1,!1],this.cargarNuevaPregunta()}ngOnInit(){}seleccionarOpcion(e){this.opcionesSeleccionadas=[!0,!0,!0,!0],this.preguntaActual&&this.preguntaActual.respuestaCorrecta===e?(this.puntaje++,d.alertJuegoGanaste(":D")):d.alertJuegoPerdiste(`:( La respuesta era '${this.preguntaActual.opciones[this.preguntaActual.respuestaCorrecta]}'`),setTimeout(()=>{this.contadorPregunta<=5&&(this.contadorPregunta++,this.opcionesSeleccionadas=[!1,!1,!1,!1]),this.cargarNuevaPregunta()},1e3)}cargarNuevaPregunta(){switch(this.contadorPregunta){case 1:this.cargarBanderaArgentina();break;case 2:this.cargarBanderaEstadoUnidos();break;case 3:this.cargarBanderaBrasil();break;case 4:this.cargarPerro();break;case 5:this.cargarZorro();break;default:this.contadorPregunta--,this.opcionesSeleccionadas=[!0,!0,!0,!0],d.alertJuegoTerminado(`Juego terminado tu puntaje fue: ${this.puntaje}`).then(()=>{this.puntaje=0,this.contadorPregunta=1,this.opcionesSeleccionadas=[!1,!1,!1,!1],this.cargarNuevaPregunta()});break}}cargarBanderaArgentina(){this.apiService.getArgentina().then(e=>{this.preguntaActual={pregunta:"\xBFDe que pais es esta Bandera?",imagenUrl:e.flags.png,opciones:["Corrientes","Argentina","Paraguay","Santa Fe"],respuestaCorrecta:1}})}cargarBanderaEstadoUnidos(){this.apiService.getEstadosUnidos().then(e=>{this.preguntaActual={pregunta:"\xBFDe que pais es esta Bandera?",imagenUrl:e.flags.png,opciones:["Rusia","Espa\xF1a","Peru","Estados Unidos"],respuestaCorrecta:3}})}cargarBanderaBrasil(){this.apiService.getBrasil().then(e=>{this.preguntaActual={pregunta:"\xBFDe que pais es esta Bandera?",imagenUrl:e.flags.png,opciones:["Brasil","China","Uruguay","Bolivia"],respuestaCorrecta:0}})}cargarPerro(){this.apiService.getImagenPerro().then(e=>{this.preguntaActual={pregunta:"\xBFQue animal es?",imagenUrl:e.message,opciones:["Chancho","Gato","Perro","Pollo"],respuestaCorrecta:2}})}cargarZorro(){this.apiService.getImagenZorro().then(e=>{this.preguntaActual={pregunta:"\xBFQue animal es?",imagenUrl:e.image,opciones:["Hormiga","Mosquito","Zorro","Auto"],respuestaCorrecta:2}})}};a.\u0275fac=function(t){return new(t||a)(U(k))},a.\u0275cmp=x({type:a,selectors:[["app-juego-tres"]],standalone:!0,features:[w],decls:4,vars:2,consts:[[1,"juego-tres-container"],[4,"ngIf"],[1,"puntaje"],[1,"tematica"],[1,"imagen-api",3,"src"],[1,"opciones"],[4,"ngFor","ngForOf"],[1,"btn",3,"click","disabled"]],template:function(t,l){t&1&&(s(0,"div",0),h(1,M,6,4,"div",1),s(2,"h2",2),g(3),p()()),t&2&&(o(),c("ngIf",l.preguntaActual),o(2),_("Puntaje: ",l.puntaje,""))},dependencies:[S,B],styles:[".juego-tres-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;align-items:center;text-align:center;height:calc(100vh - 58px);background:linear-gradient(6deg,#fff,#656565 90%)}.tematica[_ngcontent-%COMP%]{margin-top:4px}.imagen-api[_ngcontent-%COMP%]{height:350px;width:100%;border-radius:25px;margin-top:10px;background-color:#202020;border:solid 2px #ffffff}.opciones[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:center;align-items:center}.btn[_ngcontent-%COMP%]{background-color:#202020;color:#fff;border:solid 2px #ffffff;margin:10px;width:200px;height:100px}.puntaje[_ngcontent-%COMP%]{margin-top:10px}"]});let r=a;return r})();export{N as JuegoTresComponent};