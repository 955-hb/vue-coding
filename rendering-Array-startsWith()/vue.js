Vue.createApp({
    data() {
      return {
        startsWithLetter: "",
        fruits: [
          "Apple",
          "Banana",
          "Melon",
          "Blueberry",
          "Strawberry",
          "Ananas",
          "Mango"
        ]
      };
    },
    computed: {
      dynamicFruitList() {
        return this.startsWithLetter === ""
          ? this.fruits
          : this.fruits.filter((fruit) => {
              return fruit.startsWith(this.startsWithLetter);
            });
      }
    }
  }).mount("#app");