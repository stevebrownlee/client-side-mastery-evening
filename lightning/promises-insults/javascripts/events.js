const data = require('./data');
const dom = require('./dom');

$('#make-insult').click((e) => {
  dom.domString(data.getDescriptors(), data.getDescriptors(), data.getNoun());
});
