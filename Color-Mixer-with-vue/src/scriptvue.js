Vue.createApp({
  data() {
    return {
      red: 150,
      green: 105,
      blue: 180,
    };
  },
  computed: {
    backgroundColor(){
        return {
            backgroundColor: `rgb(${this.red}, ${this.green}, ${this.blue})`,
        }
    },
    hexColor(){
        const red = rangeValueToHex(this.red);
        const green = rangeValueToHex(this.green);
        const blue = rangeValueToHex(this.blue);

        return "#" + red + green + blue;
    },
  },
  methods: {
    
    // onBlueChange(event) {
    //   this.blue = event.target.value;
    // },
    getRandomColor() {
        fetch("https://dummy-apis.netlify.app/api/color")
    .then((req) => req.json())
    .then((color) => {
        this.red = color.rgb.r;
        this.green = color.rgb.g;
        this.blue = color.rgb.b;
    });
    }
  },
}).mount("#app");


function rangeValueToHex(value) {
    value = Number.parseInt(value);
    return ("0" + value.toString(16)).substr(-2);
  }
