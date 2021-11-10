const container = document.getElementsByClassName('box-container');
const app = new Vue ({

  el: '#app',

  data: {
    marca: 'FIAT',
    modello: '500 Cabrio',
    colore: 'Rosa metallizzato',
    immagine: 'img/500rosa.png',
    pneumatici: 'R-18',
    alimentazione: 'Benzina',
    messaggio: 'Benvenuto nella nostra concessonaria',
    messaggio2: 'Ti aiuteremo a scegliere la macchina che fa per te',
  },

  methods: {
    stampaCar(){
      let html= 
        `
        <div class="customer-car d-flex justify-content-center align-items-center flex-column">
          <h3 class="model">Marca: {{marca}}</h3>
          <h3 class="model">Modello: {{modello}}</h3>
          <h3 class="model">Colore: {{colore}}</h3>
          <h3 class="model">Pneumatici: {{pneumatici}}</h3>
          <h3 class="model">Alimentazione: {{alimentazione}}</h3>
          <img src="img/500rosa.png" alt="">
        </div>
        `
    }
  }
})


// , 'img/500azzurra.png', 'img/500blu.png'