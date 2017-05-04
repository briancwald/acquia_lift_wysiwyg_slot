// Register the plugin within the editor.
CKEDITOR.plugins.add('liftSlotButton', {

  // Register the icons.
  icons: 'rocket',

  // The plugin initialization logic goes inside this method.
  init: function (editor) {

    // Define an editor command that opens our dialog window.
    editor.addCommand('liftSlotButton', new CKEDITOR.dialogCommand('slotDialog'));

    // Create a toolbar button that executes the above command.
    editor.ui.addButton('liftSlotButton', {

      // The text part of the button (if available) and the tooltip.
      label: 'Insert Acquia Lift Slot',

      // The command to execute on click.
      command: 'liftSlotButton',

      // The button placement in the toolbar (toolbar group name).
      toolbar: 'insert',

      icon: this.path + 'icons/rocket.png'
    });

    // Register our dialog file -- this.path is the plugin folder path.
    CKEDITOR.dialog.add('slotDialog', this.path + 'dialogs/slot.js');
  }
});
