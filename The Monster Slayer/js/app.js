new Vue({
  el: '#app',
  data: {
    playerHealth: 100,
    monsterHealth: 100,
    gameIsRunning: false,
    turns: []
  },
  methods: {
    start() {
      this.gameIsRunning = true;
      this.playerHealth = 100;
      this.monsterHealth = 100;
      this.turns = [];
    },
    attack() {
      var damage = this.calculateDamage(3, 10);
      this.monsterHealth -= damage;
      this.turns.unshift({
        isPlayer: true,
        text: 'Player hits the monster for ' + damage
      });
      if (this.check()) return;
      this.monsterAttack();
    },
    specialAttack() {
      var damage = this.calculateDamage(10, 20);
      this.monsterHealth -= damage;
      this.turns.unshift({
        isPlayer: true,
        text: 'Player hits the monster hard for ' + damage
      });
      if (this.check()) return;
      this.monsterAttack();
    },
    heal() {
      if (this.playerHealth <= 90) {
        this.playerHealth += 10;
      }
      this.turns.unshift({
        isPlayer: true,
        text: 'Player heals for 10'
      });
    },
    giveUp() {
      this.gameIsRunning = false;
    },
    monsterAttack() {
      var damage = this.calculateDamage(5, 12);
      this.playerHealth -= damage;
      this.turns.unshift({
        isPlayer: false,
        text: 'Monster hits the player for ' + damage
      });
      this.check();
    },
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
