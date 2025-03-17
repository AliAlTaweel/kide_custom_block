
import { __ } from '@wordpress/i18n';
import { useBlockProps, RichText,MediaPlaceholder, InnerBlocks } from '@wordpress/block-editor';
import './editor.scss';


export default function Edit({attributes,setAttributes}) {

	const ALLOWED_BLOCKS = [ 'core/buttons','core/paragraph' ];

	
	return (
		<div {...useBlockProps({ className: 'secTemplate' })} >
			<section className='container'>
				<div className="titleAndIcon">
				<RichText 
						tagName='h2'
						className='secTemplateH2'
						allowedFormats={[]}
						value={attributes.secTemplateTitle}
						onChange={(secTemplateTitle) => setAttributes({secTemplateTitle})}
						placeholder='Put Title Here...'
					/>
					<div className='iconContainer'>
					{attributes.image_url && attributes.image_id ? (
							<>
								<img src={attributes.image_url} />
								<button className="button-remove" onClick={() => setAttributes({image_url: "", image_id: null})}>Remove</button>
							</>
						) : (
								<MediaPlaceholder
										onSelect = {
											( image ) => {
												setAttributes( { image_url: image.url, image_id: image.id } );
											}
										}
										allowedTypes = { [ 'image' ] }
										multiple = { false }
										labels = { { title: 'Icon Image' } }
									>
								</MediaPlaceholder>
						)	
					}
				</div>
				</div>
				<div className='textAndBtns'>
				<InnerBlocks 
						allowedBlocks={ ALLOWED_BLOCKS } 
						
					/>
				</div>
				
				
			</section>
		</div>
	);
}
