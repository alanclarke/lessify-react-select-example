require('react-select/less/default.less')
var React = require('react')
var Select = React.createFactory(require('react-select'))

React.render(Select({
  name: 'example',
  options: [{
    value: 'one',
    label: 'One'
  }, {
    value: 'two',
    label: 'Two'
  }]
}), document.body)
