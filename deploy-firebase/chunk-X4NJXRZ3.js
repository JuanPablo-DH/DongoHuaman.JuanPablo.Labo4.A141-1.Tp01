import{b as _,d as A}from"./chunk-R4TC5525.js";import"./chunk-GA4GTMOU.js";import{a as l}from"./chunk-PVSVCBQX.js";import{$a as x,Ha as b,Ja as d,La as i,Ma as e,Ra as p,Sa as j,Ta as a,Ua as h,Va as u,Z as m,wa as r,xa as g,xb as v}from"./chunk-X4LIZENW.js";import"./chunk-X6YOYRVK.js";function M(c,s){if(c&1&&(i(0,"p"),a(1),e()),c&2){let y=j();r(),u("Tiempo restante: ",y.tiempoRestante," segundos")}}var T=(()=>{let s=class s{constructor(t){this.router=t,this.duracion=10,this.baraja=[],this.cartaActual=0,this.cartaAnterior=0,this.tiempoRestante=this.duracion,this.puntaje=0,this.estaDetenido=!0,this.subscription=this.router.events.subscribe(o=>{o instanceof _&&this.detenerTemporizador()})}ngOnInit(){}inicializarBaraja(){for(let t=1;t<=12;t++)this.baraja.push(t)}mezclarBaraja(){for(let t=this.baraja.length-1;t>0;t--){let o=Math.floor(Math.random()*(t+1));[this.baraja[t],this.baraja[o]]=[this.baraja[o],this.baraja[t]]}}iniciarTemporizador(){this.estaDetenido=!1,this.temporizador=setInterval(()=>{this.tiempoRestante--,this.tiempoRestante===0&&this.finalizarJuego()},1e3)}detenerTemporizador(){clearInterval(this.temporizador)}empezarJuego(){this.inicializarBaraja(),this.mezclarBaraja(),this.detenerTemporizador(),this.iniciarTemporizador(),this.cartaAnterior=this.cartaActual,this.cartaActual=this.baraja.pop(),this.puntaje=0}finalizarJuego(){this.detenerTemporizador(),this.baraja=[],this.tiempoRestante=this.duracion,this.estaDetenido=!0,this.cartaActual=0,this.cartaAnterior=0,l.alertJuegoTerminado(`Tu puntaje fue ${this.puntaje}`).then(()=>{this.puntaje=0})}seleccionarMenor(){if(!this.estaDetenido){if(this.baraja.length===0){this.finalizarJuego();return}this.cartaAnterior=this.cartaActual,this.cartaActual=this.baraja.pop(),this.cartaActual<this.cartaAnterior?(this.puntaje++,l.alertJuegoGanaste(":D")):l.alertJuegoPerdiste(":(")}}seleccionarMayor(){if(!this.estaDetenido){if(this.baraja.length===0){this.finalizarJuego();return}this.cartaAnterior=this.cartaActual,this.cartaActual=this.baraja.pop(),this.cartaActual>this.cartaAnterior?(this.puntaje++,l.alertJuegoGanaste(":D")):l.alertJuegoPerdiste(":(")}}};s.\u0275fac=function(o){return new(o||s)(g(A))},s.\u0275cmp=m({type:s,selectors:[["app-juego-dos"]],standalone:!0,features:[x],decls:28,vars:8,consts:[[1,"juego-dos-container"],[1,"cartas-container"],[1,"card"],[1,"text-center"],[1,"buttons-container"],["type","button",1,"btn","btn-primary",3,"click","disabled"],[1,"card","text-center","informacion-container"],[4,"ngIf"]],template:function(o,n){o&1&&(i(0,"div",0)(1,"div",1)(2,"div",2)(3,"h2",3),a(4,"Mazo"),e(),i(5,"h2",3),a(6),e()(),i(7,"div",2)(8,"h2",3),a(9,"Carta Anterior"),e(),i(10,"h2",3),a(11),e()(),i(12,"div",2)(13,"h2",3),a(14,"Carta Actual"),e(),i(15,"h2",3),a(16),e()()(),i(17,"div",4)(18,"button",5),p("click",function(){return n.empezarJuego()}),a(19," Iniciar Juego "),e(),i(20,"button",5),p("click",function(){return n.seleccionarMenor()}),a(21," Menor "),e(),i(22,"button",5),p("click",function(){return n.seleccionarMayor()}),a(23," Mayor "),e()(),i(24,"div",6)(25,"p"),a(26),e(),b(27,M,2,1,"p",7),e()()),o&2&&(r(6),h(n.baraja.length),r(5),h(n.cartaAnterior),r(5),h(n.cartaActual),r(2),d("disabled",!n.estaDetenido),r(2),d("disabled",n.estaDetenido),r(2),d("disabled",n.estaDetenido),r(4),u("Puntaje: ",n.puntaje,""),r(),d("ngIf",!n.estaDetenido))},dependencies:[v],styles:[".juego-dos-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;align-items:center;height:calc(100vh - 58px);background:linear-gradient(6deg,#fff,#656565 90%)}.btn[_ngcontent-%COMP%]{white-space:nowrap}.cartas-container[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:center;align-items:center;height:350px;width:950px;padding:8px;margin-top:-100px}.cartas-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]{justify-content:center;margin:3px;height:100%;width:100%;color:#fff;border:solid 2px #ffffff;background-color:#202020}.buttons-container[_ngcontent-%COMP%]{margin-top:15px;display:flex;flex-direction:row;justify-content:center;align-items:center;width:950px}.buttons-container[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{width:150px;margin:5px;color:#fff;border:solid 2px #ffffff;background-color:#202020}.informacion-container[_ngcontent-%COMP%]{margin-top:15px;height:70px;width:250px;color:#fff;border:solid 2px #ffffff;background-color:#202020}"]});let c=s;return c})();export{T as JuegoDosComponent};
