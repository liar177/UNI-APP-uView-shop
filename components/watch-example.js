const computedBehavior = require('miniprogram-computed')

Component({
  behaviors: [computedBehavior],
  data: {
    value1: 1,
    value2: 1,
    sum: 2,
  },
  watch: {
    'value1, value2': function (value1, value2) {
      if(value1 && value2){
         this.setData({
        sum: parseInt(value1)+parseInt(value2)
      })
      }else{
        this.setData({
          sum: 0
        })
      }
     
    },
  },
  methods: {
  }
})
