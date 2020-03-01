const printToDom = (divId, textToPrint) => {
  //const selectedDiv = $('#tank')
  $(`#${divId}`).html(textToPrint);
};

export default { printToDom };
