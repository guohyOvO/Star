Component({
  properties:{
    enable:{
      type:Boolean,
      value:false
    }
  },

  methods: {
    getInput: function(event){
      var detail={
        q: event.detail.value
      }
      console.log(detail)
      this.triggerEvent("onfetch",detail)
    }
  }

})