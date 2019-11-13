var app = new Vue({
  el: '#app',
  data: {
    message : 'Binding',
    checked : false,
    checkedNames : [],
    picked : [],
    selected: 'A',
    options: [
      { text: 'One', value: 'A' },
      { text: 'Two', value: 'B' },
      { text: 'Three', value: 'C' }
    ],
    age :25,
    msg : 'modifiers example'
  }
})