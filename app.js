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
    },
    threeRounds() {
      return this.currentRound % 3 !== 0;
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
    },
    healPlayer() {
      const healValue = randomNumber(8, 20);
      if (this.playerHealth + healValue > 100) {
        this.playerHealth = 100;
      } else {
        this.playerHealth += healValue;
      }
    }
  }
});

app.mount("#game");
