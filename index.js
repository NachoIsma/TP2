const app = Vue.createApp({
  data(){
    return{
      Juegos: [],
      info_Juego: '',
      mensaje_Error: "",
      filtro_Estado: '',
      filtro_Plataforma: '',
      filtro_Nombre: ''
    };
  },

  methods: {
    registrarJuego(nombre_Juego, plataforma_Juego, estado_Juego, puntaje_Juego){
      if(this.nombre_Juego && this.plataforma_Juego && this.estado_Juego){
        if(!isNaN(this.puntaje_Juego) && (this.puntaje_Juego > 0 && this.puntaje_Juego < 11) | this.puntaje_Juego == ''){
          const juegoNuevo = {
            Nombre: this.nombre_Juego,
            Plataforma: this.plataforma_Juego,
            Estado: this.estado_Juego,
            Puntaje: this.puntaje_Juego,
          };
          this.Juegos.push(juegoNuevo);
          this.nombre_Juego = '';
          this.plataforma_Juego = '';
          this.estado_Juego = '';
          this.puntaje_Juego = '';
          this.mensaje_Error = '';

        }
        else{
          this.mensaje_Error = 'El puntaje debe ser un número del 1 al 10';
        }
      }
      else{
        this.mensaje_Error= 'Completar los campos faltantes, el puntaje es opcional';
      }
    },
    mostrar_Info(index){
      this.info_Juego = this.Juegos[index]; 
    },
    limpiar_Info(){
      this.info_Juego = '';
    }
  },

  computed:{
    juegosFiltrados() {
      return this.Juegos.filter(juego => {
        //const filtro_Nombre = this.filtro_Nombre.toLowerCase();
        const filtro_Plataforma = this.filtro_Plataforma.toLowerCase();
        const filtro_Estado = this.filtro_Estado.toLowerCase();

        //const nombre_Coincidente = filtro_Nombre === '' || juego.Nombre.toLowerCase().includes(filtro_Nombre);
        const plataforma_Coincidente= filtro_Plataforma === '' || juego.Plataforma.toLowerCase().includes(filtro_Plataforma);
        const estado_Coincidente= filtro_Estado === '' || juego.Estado.toLowerCase() === filtro_Estado;

        return nombre_Coincidente && plataforma_Coincidente && estado_Coincidente;
      });
    }
  }
});

app.mount('#pantalla');
