new Vue({
  el: '#app',
  data: {
    playerHealth: 100,
    monsterHealth: 100,
    gameIsRunning: false
  },
  methods: {
    start() {
      this.gameIsRunning = true;
      this.playerHealth = 100;
      this.monsterHealth = 100;
    },
    attack() {
      this.monsterHealth -= this.calculateDamage(3, 10);
      if (this.check()) return;
      this.playerHealth -= this.calculateDamage(5, 12);
      this.check();
    },
    specialAttack() {},
    heal() {},
    giveUp() {},
    calculateDamage(min, max) {
      return Math.max(Math.round(Math.random() * max), min);
    },
    check() {
      if (this.monsterHealth <= 0) {
        if (confirm('You Won the Game!Start a new game?')) {
          this.start();
        } else {
          this.gameIsRunning = false;
        }
        return true;
      } else if (this.playerHealth <= 0) {
        if (confirm('You Lost the Game!Start a new game?')) {
          this.start();
        } else {
          this.gameIsRunning = false;
        }
        return true;
      }
      return false;
    }
  }
});
