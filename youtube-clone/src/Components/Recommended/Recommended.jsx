import React from 'react';
import './Recommended.css';
import thumbnail1 from '../../assets/thumbnail1.png';
import thumbnail2 from '../../assets/thumbnail2.png';
import thumbnail3 from '../../assets/thumbnail3.png';
import thumbnail4 from '../../assets/thumbnail4.png';
import thumbnail5 from '../../assets/thumbnail5.png';
import thumbnail6 from '../../assets/thumbnail6.png';
import thumbnail7 from '../../assets/thumbnail7.png';
import thumbnail8 from '../../assets/thumbnail8.png';

const fakedata = [
	{
		img: thumbnail1,
		title: 'Best channel that will help you to be a web developer',
		channelName: 'HungryCoder',
		totalViews: '199k',
	},
	// {img:,title:"",channelName:"",totalViews:""},
];
const repeatedData = [...Array(10)].flatMap(() => fakedata);

function Recommended() {
	return (
		<div className="recommended">
			{repeatedData.map(({ img, title, channelName, totalViews }) => (
				<div className="side-video-list">
					<img
						src={img}
						alt=""
					/>
					<div className="vid-info">
						<h4>{title}</h4>
						<p>{channelName}</p>
						<p>{totalViews} Views</p>
					</div>
				</div>
			))}
		</div>
	);
}

export default Recommended;
