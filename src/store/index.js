import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    users: [],
    personnes: [
      {
        prenom: "Alexandre",
        nom: "Tallaa",
        mail: "alexandre.tallaa@bleu122.com",
        image: "https://www.bleu122.com/assets/agence/team/alexandre.png",
        birthday: "810900000000",
        technos: "[Grails]",
      },
      {
        prenom: "Anthony",
        nom: "Maniago",
        mail: "anthony.maniago@bleu122.com",
        image: "https://www.bleu122.com/assets/agence/team/anthony.png",
        birthday: "701262000000",
        technos: "[Support Technique, web, Android, Grails, Gestion Projet]",
      },
      {
        prenom: "Anton",
        nom: "Lukusa",
        mail: "anton.lukasa@bleu122.com",
        image: "https://www.bleu122.com/assets/agence/team/anton.png",
        birthday: "850215600000",
        technos: "[Flutter]",
      },
      {
        prenom: "Antonin",
        nom: "Billot",
        mail: "antonin.billot@bleu122.com",
        image: "https://www.bleu122.com/assets/agence/team/antonin.png",
        birthday: "814359600000",
        technos: "[Grails, Flutter]",
      },
      {
        prenom: "Arnaud",
        nom: "Larronde",
        mail: "arnaud.larronde@bleu122.com",
        image: "https://www.bleu122.com/assets/agence/team/arnaud.png",
        birthday: "963482400000",
        technos: "[iOS, Android, Grails]",
      },
      {
        prenom: "Charles",
        nom: "Cans",
        mail: "charles.cans@bleu122.com",
        image: "https://www.bleu122.com/assets/agence/team/charles.png",
        birthday: "456314400000",
        technos: "[Gestion Entreprise, Gestion Projet]",
      },
      {
        prenom: "Consult",
        nom: "Oxino",
        mail: "remi.lesot@oxino.fr",
        image:
          "https://oxino.fr/wp-content/uploads/elementor/thumbs/oxino-logo-b-ofcswib3i8lyvvowwvxc1onr1odt93u51bgn8d1ixw.png",
        birthday: "1673348400000",
        technos: "[Etude]",
      },
      {
        prenom: "Dalia",
        nom: "Tetio",
        mail: "dalia.tetio@bleu122.com",
        image: "https://www.bleu122.com/assets/agence/team/dalia.png",
        birthday: "789390000000",
        technos: "[UX, marketing]",
      },
      {
        prenom: "Julie",
        nom: "Borde",
        mail: "julie.borde@bleu122.com",
        image: "https://www.bleu122.com/assets/agence/team/julie.png",
        birthday: "710330400000",
        technos: "[web, Grails, Gestion Projet]",
      },
      {
        prenom: "Justine",
        nom: "Gautreau",
        mail: "justine.gautreau@bleu122.com",
        image: "https://www.bleu122.com/assets/agence/team/justine.png",
        birthday: "718542000000",
        technos: "[Gestion Projet]",
      },
      {
        prenom: "Laetitia",
        nom: "Peraire",
        mail: "laetitia.peraire@bleu122.com",
        image: "https://www.bleu122.com/assets/agence/team/laetitia.png",
        birthday: "909399600000",
        technos: "[Grails]",
      },
      {
        prenom: "Loica",
        nom: "Marotte",
        mail: "loica.marotte@bleu122.com",
        image: "https://www.bleu122.com/assets/agence/team/loica.png",
        birthday: "835264800000",
        technos: "[iOS, Flutter]",
      },
      {
        prenom: "Maia",
        nom: "Mangin",
        mail: "maia.mangin@bleu122.com",
        image: "https://www.bleu122.com/assets/agence/team/maia.png",
        birthday: "988192800000",
        technos: "[web, Grails]",
      },
      {
        prenom: "Marie",
        nom: "Bastida",
        mail: "marie.bastida@bleu122.com",
        image: "https://www.bleu122.com/assets/agence/team/marie.png",
        birthday: "876304800000",
        technos: "[UX, Gestion Projet]",
      },
      {
        prenom: "Maxime",
        nom: "Galliot",
        mail: "maxime.galliot@bleu122.com",
        image: "https://www.bleu122.com/assets/agence/team/maxime.png",
        birthday: "852030000000",
        technos:
          "[UX, Design, Veille, Atelier Créativité, web, Gestion Projet]",
      },
      {
        prenom: "Pierre",
        nom: "Halgand",
        mail: "halgand.p@gmail.com",
        image: "https://www.bleu122.com/assets/agence/team/pierre.png",
        birthday: "585568800000",
        technos: "[iOS, Android, Flutter]",
      },
      {
        prenom: "Raphael",
        nom: "Assouline",
        mail: "raphael.assouline@bleu122.com",
        image: "https://www.bleu122.com/assets/agence/team/raph.png",
        birthday: "835696800000",
        technos: "[UX, WordPress, web, Grails]",
      },
      {
        prenom: "Tony",
        nom: "Leloup",
        mail: "tony.leloup@bleu122.com",
        image: "https://www.bleu122.com/assets/agence/team/tony.png",
        birthday: "424605600000",
        technos: "[Commercial]",
      },
    ],
  },
  mutations: {
    SET_USERS(state, payload) {
      state.users = payload;
    },
  },
  actions: {
    getUsers(context) {
      axios.get("http://localhost:3000/users").then((res) => {
        context.commit("SET_USERS", res.data);
        console.log(res.data);
      });
    },
  },
});
