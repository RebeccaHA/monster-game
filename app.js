function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

const app = Vue.createApp({
  data() {
    return {
      monsterHealth: 100,
      playerHealth: 100,
      currentRound: 0,
      winner: null
    };
  },
  computed: {
    updatedMonsterHealth() {
      if (this.monsterHealth <= 0) {
        return { width: "0%" };
      }
      return { width: this.monsterHealth + "%" };
    },
    updatedPlayerHealth() {
      if (this.playerHealth <= 0) {
        return { width: "0%" };
      }
      return { width: this.playerHealth + "%" };
    },
    threeRounds() {
      return this.currentRound % 3 !== 0;
    }
  },
  watch: {
    monsterHealth(value) {
      if (value <= 0 && this.playerHealth <= 0) {
        this.winner = "draw";
      } else if (value <= 0) {
        this.winner = "Player";
      }
    },
    playerHealth(value) {
      if (value <= 0 && this.monsterHealth <= 0) {
        this.winner = "Draw";
      } else if (value <= 0) {
        this.winner = "Monster";
      }
    }
  },
  methods: {
    startGame() {
      (this.winner = null),
        (this.playerHealth = 100),
        (this.monsterHealth = 100);
      this.currentRound = 0;
    },
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
      this.currentRound += 1;
      this.attackPlayer();
    }
  }
});

app.mount("#game");
