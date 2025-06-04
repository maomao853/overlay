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
import { Panel, PanelBody, PanelRow, TextControl, __experimentalDimensionControl as DimensionControl } from '@wordpress/components';

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
    <div { ...useBlockProps() }>
      <InspectorControls>
        <Panel>
          <PanelBody title={__("Settings", "wpdev")}>
            <PanelRow>
              <TextControl
                __nextHasNoMarginBottom
                __next40pxDefaultSize
                label={__("Ultrasound URL", "wpdev")}
                attributes={attributes.ultrasound}
                value={attributes.ultrasound}
                onChange={(ultrasound) => setAttributes({"ultrasound": ultrasound})}
              />
            </PanelRow>
            <PanelRow>
              <TextControl
                __nextHasNoMarginBottom
                __next40pxDefaultSize
                label={__("Illustration URL", "wpdev")}
                attributes={attributes.illustration}
                value={attributes.illustration}
                onChange={(illustration) => setAttributes({"illustration": illustration})}
              />
            </PanelRow>
            <PanelRow>
              <DimensionControl
                __nextHasNoMarginBottom
                __next40pxDefaultSize
                label={' Size'}
                icon={'desktop'}
                onChange={(dimension) => setAttributes({"dimension": dimension})}
                value={attributes.dimension}
                sizes={
                  [
                    {
                      name: __( 'Small' ),
                      slug: '100px',
                    },
                    {
                      name: __( 'Medium' ),
                      slug: '250px',
                    },
                    {
                      name: __( 'Large' ),
                      slug: '500px',
                    },
                  ]
                }
              />
            </PanelRow>
          </PanelBody>
        </Panel>
      </InspectorControls>
      <div class="container">
        <div class="container-image">
          <img class="img_ultrasound" src={attributes.ultrasound} />
        </div>
        <input class="slider" type="range" min="0" max="1" step="0.01" value="0" />
      </div>
    </div>
	);
}
