import { CommonModule, NgClass, NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UsuarioService } from '../../../services/usuario.service';
import { ChatService } from '../../../services/chat.service';
import { DatabaseService } from '../../../services/database.service';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [FormsModule, CommonModule, NgFor, NgIf, NgClass],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.css',
})
export class ChatComponent implements OnInit {
  listaMensajes: any[] = [];
  inputMensaje: any = '';
  emailUsuario: any = '';
  estadoMostrar: boolean = false;

  constructor(
    private usuarioService: UsuarioService,
    private chatService: ChatService
  ) {
    this.emailUsuario = this.usuarioService.getEmail();
    this.actualizarChat();
  }

  ngOnInit(): void {}

  enviarMensaje() {
    if (this.inputMensaje !== '') {
      this.chatService.enviarMensaje(this.emailUsuario, this.inputMensaje);
      this.actualizarChat();
      this.inputMensaje = '';
    }
  }

  mostrarChat() {
    this.estadoMostrar = true;
    this.actualizarScroll();
  }

  ocultarChat() {
    this.estadoMostrar = false;
  }

  actualizarChat() {
    this.chatService.traerTodos()?.subscribe((r) => {
      this.listaMensajes = ChatService.ordenarPorFecha(r);
      this.actualizarScroll();
    });
  }

  actualizarScroll() {
    setTimeout(() => {
      let elementos = document.getElementsByClassName('mensaje');
      let ultimo: any = elementos[elementos.length - 1];
      if (ultimo) {
        //@ts-ignore
        document.getElementById('mensajes-container').scrollTop =
          ultimo.offsetTop;
      }
    }, 20);
  }
}
