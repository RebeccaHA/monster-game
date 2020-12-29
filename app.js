function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

const app = Vue.createApp({
  data() {
    return {
      monsterHealth: 100,
      playerHealth: 100,
      currentRound: 0
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
      this.currentRound += 1;
    },
    attackPlayer() {
      const attackValue = randomNumber(8, 15);
      this.playerHealth -= attackValue;
    },
    specialAttack() {
      const attackValue = randomNumber(10, 20);
      this.monsterHealth -= attackValue;
      this.attackPlayer();
      this.currentRound += 1;
      console.log(this.currentRound);
    }
  }
});

app.mount("#game");
