import {
  get
} from "https";

export default {
  name: 'home',
  data() {
    return {
      alertBoxFlag: true,
      loginFlag: true,
      tel: ""
    }
  },
  methods: {
    telKeydown(e) {
      let prohibitInput = ["-", "e", "+", "E"];
      if (prohibitInput.includes(e.key)) {
        e.preventDefault();
      }
    }
  },

  created() {

    this.$http.get('/login').then(res => {
      console.log(res)
    })
    this.$http.post('/list', {
      a: 1,
      b: 2
    }).then(res => {
      console.log(res)
    })
  },
  watch: {
    tel(newV) {
      if (newV.length >= 11) this.tel = newV.slice(0, 11);
    }
  }
}