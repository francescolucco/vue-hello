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
      const container = document.querySelector('.box-img');
      let html= 
        `
        <img src="img/500rosa.png" alt=""> 
        `
        console.log(this);
      container.innerHTML = html;
    },
    colorPink(){
      this.colore = 'rosa-metalizzato';
      console.log('rosa');
      const container = document.querySelector('.box-img');
      let html= 
        `
        <img src="img/500rosa.png" alt=""> 
        `
        console.log(this);
      container.innerHTML = html;
    },
    colorBlu(){
      this.colore = 'blu-metalizzato';
      const container = document.querySelector('.box-img');
      let html= 
        `
        <img src="img/500blu.png" alt=""> 
        `
        console.log(this);
      container.innerHTML = html;
    },
    colorAzzurro(){
      this.colore = 'azzurro-metalizzato';
      console.log('azzurro');
      const container = document.querySelector('.box-img');
      let html= 
        `
        <img src="img/500azzurra.png" alt=""> 
        `
        console.log(this);
      container.innerHTML = html;
    }
  }
})


// , 'img/500azzurra.png', 'img/500blu.png'