let elements = {
    searchBar: { 
        selector: 'input[type=text]' 
      },
    submit: { 
        selector: '//[@name="q"]', 
        locateStrategy: 'xpath' 
      }
}

module.exports = {
    url: function() {
        return this.api.launchUrl;
    },
    elements: elements
}