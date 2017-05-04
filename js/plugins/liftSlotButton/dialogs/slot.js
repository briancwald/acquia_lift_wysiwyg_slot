// Our dialog definition.
CKEDITOR.dialog.add('slotDialog', function (editor) {
  return {

    // Basic properties of the dialog window: title, minimum size.
    title: 'Lift Slot Properties',
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
        label: 'Lift slot ID',

        // Validation checking whether the field is a valid lift ID
        validate: CKEDITOR.dialog.validate.regex(/[a-f0-9]{8}(?:-[a-f0-9]{4}){3}-[a-f0-9]{12}/i, "Please enter a valid lift slot ID."),
      }]
       id: 'tab-adv',
                label: 'Lift Dynamic Slot Placeholder',
                elements: [
                    // UI elements of the second tab will be defined here.
                ]
            }
    }, ],
    onOk: function () {
      var dialog = this;
      var liftSlotWrapper = editor.document.createElement('div');

      // Set element attribute and text by getting the defined field values.
      liftSlotWrapper.setAttribute('data-lift-slot', dialog.getValueOf('tab-basic', 'lift-slot'));
      var liftID = dialog.getValueOf('tab-basic', 'lift-slot');
      liftSlotWrapper.setText('[Lift Slot: ' + liftID + ']');

      editor.insertElement(liftSlotWrapper);
    }
  };
});
