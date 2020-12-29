function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

const app = Vue.createApp({
  data() {
    return {
      monsterHealth: 100,
      playerHealth: 100
    };
  },
  computed: {
    updatedMonsterHealth() {
      return { width: this.monsterHealth + "%" };
    },
    updatedPlayerHealth() {
      return { width: this.playerHealth + "%" };
    }
  },
  methods: {
    attackMonster() {
      const attackValue = randomNumber(5, 12);
      this.monsterHealth -= attackValue;
      this.attackPlayer();
    },
    attackPlayer() {
      const attackValue = randomNumber(8, 15);
      this.playerHealth -= attackValue;
      console.log(this.monsterHealth);
    },
    specialAttack() {
      const attackValue = randomNumber(10, 20);
      this.monsterHealth -= attackValue;
      this.attackPlayer();
    }
  }
});

app.mount("#game");
