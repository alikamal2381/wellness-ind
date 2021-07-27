  
import React, { useEffect, useState } from 'react';
import '../App.css'
import images from './data';
import { SRLWrapper } from 'simple-react-lightbox';

const options = {
	// settings: {
	// 	overlayColor: 'rgb(25, 136, 124)',
	// 	autoplaySpeed: 1500,
	// 	transitionSpeed: 900
	// },
	// buttons: {
	// 	backgroundColor: 'red',
	// 	iconColor: 'rgba(126, 172, 139, 0.8)'
	// },
	// caption: {
	// 	captionColor: '#a6cfa5',
	// 	captionFontFamily: 'Raleway, sans-serif',
	// 	captionFontWeight: '300',
	// 	captionTextTransform: 'uppercase'
	// },
	// progressBar: {
	// 	height: '20px',
	// 	fillColor: 'blue',
	// 	backgroundColor: 'white'
	// }
};


function Slideshow() {
	const [tag, setTag] = useState('all');
	const [filteredImages, setFilteredImages] = useState([]);

	useEffect(
		() => {
			tag === 'all' ? setFilteredImages(images) : setFilteredImages(images.filter(image => image.tag === tag));
		},
		[tag]
	);

    return (
      <div>
                <div className="my-5">
          <h1 className="text-center"> Slide show </h1>
        </div>

        <div className="container-fluid mb-5">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row gy-4">

                    <div className="App">
                    <div className="tags">
                        <TagButton name="all" tagActive={tag === 'all' ? true : false} handleSetTag={setTag} /> /
                        <TagButton name="tiens" tagActive={tag === 'tiens' ? true : false} handleSetTag={setTag} /> /
                        <TagButton name="product" tagActive={tag === 'product' ? true : false} handleSetTag={setTag} /> /
                        <TagButton name="syllabus" tagActive={tag === 'syllabus' ? true : false} handleSetTag={setTag} /> /
                        <TagButton name="other" tagActive={tag === 'other' ? true : false} handleSetTag={setTag} />
                    </div>
                    <SRLWrapper options={options}>
                    <div className="container">
                            {filteredImages.map(image => (
                                <div key={image.id} className="image-card">
                                    <a href={`/images/${image.imageName}`}>
                                        <img className="image" src={`/images/${image.imageName}`} alt="" />
                                    </a>
                                </div>
                            ))}
                        </div>
                    </SRLWrapper>
                   {/*  <SRLWrapper options={options}>
                        <div className="container">
                            {filteredImages.map(image => (
                                <div key={image.id} className="image-card">
                                    <a href={`/images/${image.imageName}`}>
                                        <img className="image" src={`/images/${image.imageName}`} alt="" />
                                    </a>
                                </div>
                            ))}
                        </div>
                    </SRLWrapper> */}
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

const TagButton = ({ name, handleSetTag, tagActive }) => {
	return (
		<button className={`tag ${tagActive ? 'active' : null}`} onClick={() => handleSetTag(name)}>
			{name.toUpperCase()}
		</button>
	);
};

export default Slideshow;
