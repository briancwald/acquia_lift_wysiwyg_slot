<?php

/**
 * @file
 * Contains \Drupal\acquia_lift_wysiwyg_slot\Plugin\CKEditorPlugin\AcquiaLiftSlotButton.
 */

namespace Drupal\acquia_lift_wysiwyg_slot\Plugin\CKEditorPlugin;

use Drupal\ckeditor\CKEditorPluginBase;
use Drupal\editor\Entity\Editor;

/**
 * Defines the "liftSlotButton" plugin.
 *
 * NOTE: The plugin ID ('id' key) corresponds to the CKEditor plugin name.
 * It is the first argument of the CKEDITOR.plugins.add() function in the
 * plugin.js file.
 *
 * @CKEditorPlugin(
 *   id = "liftSlotButton",
 *   label = @Translation("Acquia lift slot button")
 * )
 */
class AcquiaLiftSlotButton extends CKEditorPluginBase {


  /**
   * {@inheritdoc}
   *
   * NOTE: The keys of the returned array corresponds to the CKEditor button
   * names. They are the first argument of the editor.ui.addButton() or
   * editor.ui.addRichCombo() functions in the plugin.js file.
   */
  public function getButtons() {
    // Make sure that the path to the image matches the file structure of
    // the CKEditor plugin you are implementing.
    $modulePath = drupal_get_path('module', 'acquia_lift_wysiwyg_slot');
    return array(
      'liftSlotButton' => array(
        'label' => t('Acquia lift slot button'),
        'image' => $modulePath . '/js/plugins/liftSlotButton/icons/rocket.png',
      ),
    );
  }

  /**
   * {@inheritdoc}
   */
  public function getFile() {
    // Make sure that the path to the plugin.js matches the file structure of
    // the CKEditor plugin you are implementing.
    $modulePath = drupal_get_path('module', 'acquia_lift_wysiwyg_slot');
     return $modulePath . '/js/plugins/liftSlotButton/plugin.js';
  }

  /**
   * {@inheritdoc}
   */
  public function isInternal() {
    return FALSE;
  }

  /**
   * {@inheritdoc}
   */
  public function getDependencies(Editor $editor) {
    return [];
  }

  /**
   * {@inheritdoc}
   */
  public function getLibraries(Editor $editor) {
    return [];
  }

  /**
   * {@inheritdoc}
   */
  public function getConfig(Editor $editor) {
    return [];
  }

}
