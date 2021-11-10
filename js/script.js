const app = new Vue ({

  el: '#app',

  data: {
    marca: 'FIAT',
    modello: '500 Cabrio',
    colore: '',
    immagine: 'img/500rosa.png',
    pneumatici: 'R-18',
    alimentazione: 'Benzina',
    messaggio: 'Benvenuto nella nostra concessonaria',
    messaggio2: 'Ti aiuteremo a scegliere la macchina che fa per te',
  },

  methods: {
    stampaCar(){
      document.querySelector('.customer-car').classList.remove('hide');
      this.immagine = 'img/500rosa.png';
      
    },
    colorPink(){
      this.colore = 'rosa-metalizzato';
      this.immagine = 'img/500rosa.png';
    },
    colorBlu(){
      this.colore = 'blu-metalizzato';
      this.immagine = 'img/500blu.png';
    },
    colorAzzurro(){
      this.colore = 'azzurro-metalizzato';
      this.immagine = 'img/500azzurra.png';
    }
  }
})


// , 'img/500azzurra.png', 'img/500blu.png'