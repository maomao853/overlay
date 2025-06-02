/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { Panel, PanelBody, PanelRow, TextControl } from '@wordpress/components';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
export default function Edit({attributes, setAttributes}) {
	return (
		<p { ...useBlockProps() }>
      <InspectorControls>
        <Panel>
          <PanelBody title={__("Settings", "wpdev")}>
            <PanelRow>
              <TextControl
                label={__("Ultrasound URL", "wpdev")}
                attributes={attributes.ultrasound}
                value={attributes.ultrasound}
                onChange={(ultrasound) => setAttributes({ultrasound})}
              />
            </PanelRow>
            <PanelRow>
              <TextControl
                label={__("Illustration URL", "wpdev")}
                attributes={attributes.illustration}
                value={attributes.illustration}
                onChange={(illustration) => setAttributes({illustration})}
              />
            </PanelRow>
          </PanelBody>
        </Panel>
      </InspectorControls>
			{ __( 'Overlay – hello from the editor!', 'overlay' ) }
		</p>
	);
}
