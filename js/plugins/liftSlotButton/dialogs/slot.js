// Our dialog definition.
CKEDITOR.dialog.add('slotDialog', function (editor) {
  return {

    // Basic properties of the dialog window: title, minimum size.
    title: 'Lift slot properties',
    minWidth: 400,
    minHeight: 200,

    // Dialog window content definition.
    contents: [{
      id: 'tab-basic',
      label: 'Lift Settings',

      // The tab content.
      elements: [{
        // Text input field for the slot id.
        type: 'select',
        default: editor.config.AcquiaLiftSlotButton_slots[0][1],
        items: editor.config.AcquiaLiftSlotButton_slots,
        id: 'lift-slot',
        label: 'Lift slot',
        validate: CKEDITOR.dialog.validate.notEqual('none', 'Slot cannot be empty.')
      }]
    }],
    onOk: function () {
      var dialog = this;
      var liftSlotWrapper = editor.document.createElement('div');

      // Set element attribute and text by getting the defined field values.
      liftSlotWrapper.setAttribute('id', dialog.getValueOf('tab-basic', 'lift-slot')).addClass('lift-placeholder-slot');
      var liftID = dialog.getValueOf('tab-basic', 'lift-slot');
      liftSlotWrapper.setText('Lift Slot ID: #' + liftID );

      editor.insertElement(liftSlotWrapper);
    }

    
  };
});
