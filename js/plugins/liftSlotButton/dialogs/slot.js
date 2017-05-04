// Our dialog definition.
CKEDITOR.dialog.add('slotDialog', function (editor) {
  return {

    // Basic properties of the dialog window: title, minimum size.
    title: 'Lift slot Properties',
    minWidth: 400,
    minHeight: 200,

    // Dialog window content definition.
    contents: [{
      id: 'tab-basic',
      label: 'Lift Settings',

      // The tab content.
      elements: [{
        // Text input field for the slot id.
        type: 'text',
        id: 'lift-slot',
        label: 'Lift slot placeholder ID',
      }]
    }],
    onOk: function () {
      var dialog = this;
      var liftSlotWrapper = editor.document.createElement('div');

      // Set element attribute and text by getting the defined field values.
      liftSlotWrapper.setAttribute('id', dialog.getValueOf('tab-basic', 'lift-slot')).addClass('lift-placeholder-slot');
      var liftID = dialog.getValueOf('tab-basic', 'lift-slot');
      liftSlotWrapper.setText('[Lift Slot Selector: #' + liftID + ']');

      editor.insertElement(liftSlotWrapper);
    }
  };
});
