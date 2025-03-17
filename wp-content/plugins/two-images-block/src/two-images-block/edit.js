import {
	__experimentalLinkControl as LinkControl,
	useBlockProps,
	RichText,
	MediaPlaceholder,
	BlockControls,
	InspectorControls,
	MediaUpload,
} from "@wordpress/block-editor";

import {
	ToolbarGroup,
	PanelBody,
	SelectControl,
	ToolbarButton,
	Popover,
	Button,
} from "@wordpress/components";
import "./editor.scss";
export default function Edit({ attributes, setAttributes }) {
	return (
		<>
		<InspectorControls>
		<PanelBody>
		<MediaUpload
		    
            onSelect={(media) => setAttributes({image_url01: media.url })}
            allowedTypes={['image']}
            value={attributes.image_url01}
            render={({ open }) => (
                <>
				<p>Front Image</p>
                    {attributes.image_url01 ? (
                        <>
                            <img 
                                src={attributes.image_url01} 
                                alt="Background" 
                                style={{ width: '30%', height: 'auto' }} 
                            />
                            <Button 
                                onClick={() => setAttributes({ image_url01 : '' })} 
                                isDestructive 
                                isSmall
                            >
                                Remove Image
                            </Button>
                        </>
                    ) : (
                        <Button onClick={open} isPrimary>
                            Choose Front Image
                        </Button>
                    )}
                </>
            )}
        />

		</PanelBody>
		<PanelBody>
		<MediaUpload
            onSelect={(media) => setAttributes({image_url02: media.url })}
            allowedTypes={['image']}
            value={attributes.image_url02}
            render={({ open }) => (
                <>
				<p>Background Image</p>
                    {attributes.image_url02 ? (
                        <>
                            <img 
                                src={attributes.image_url02} 
                                alt="Background" 
                                style={{ width: '30%', height: 'auto' }} 
                            />
                            <Button 
                                onClick={() => setAttributes({ image_url02 : '' })} 
                                isDestructive 
                                isSmall
                            >
                                Remove Image
                            </Button>
                        </>
                    ) : (
                        <Button onClick={open} isPrimary>
                            Choose Background Image
                        </Button>
                    )}
                </>
            )}
        />

		</PanelBody>
		</InspectorControls>

		<div {...useBlockProps()}>
    <div 
        className="frontImage"
        style={{ 
            backgroundImage: attributes.image_url01 ? `url(${attributes.image_url01})` : 'none',
            
        }}
    >
       
    </div>
    <div 
        className="backgroundImage"
        style={{ 
            backgroundImage: attributes.image_url02 ? `url(${attributes.image_url02})` : 'none',
           
        }}
    >
        
    </div>
    
</div>
		</>
	);
}
