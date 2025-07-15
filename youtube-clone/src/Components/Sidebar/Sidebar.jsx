import React from 'react';
import './Sidebar.css';
import home from '../../assets/home.png';
import game_icon from '../../assets/game_icon.png';
import automobiles from '../../assets/automobiles.png';
import sports from '../../assets/sports.png';
import entertainment from '../../assets/entertainment.png';
import tech from '../../assets/tech.png';
import music from '../../assets/music.png';
import blogs from '../../assets/blogs.png';
import news from '../../assets/news.png';
import jack from '../../assets/jack.png';
import simon from '../../assets/simon.png';
import tom from '../../assets/tom.png';
import megan from '../../assets/megan.png';
import cameron from '../../assets/cameron.png';

const sidelinks = [
	{ img: home, text: 'Home' },
	{ img: game_icon, text: 'Gaming' },
	{ img: automobiles, text: 'Cars' },
	{ img: sports, text: 'Sports' },
	{ img: entertainment, text: 'Entertainment' },
	{ img: tech, text: 'Tecnology' },
	{ img: music, text: 'Music' },
	{ img: blogs, text: 'Blogs' },
	{ img: news, text: 'News' },
];

// this is the list of people the user are subscribed too..pretend.
const subscribedList = [
	{ img: jack, channelName: 'PewDiePie' },
	{ img: simon, channelName: 'MrBeast' },
	{ img: tom, channelName: 'Justin Bieber' },
	{ img: megan, channelName: '5-Minute Crafts' },
	{ img: cameron, channelName: 'News daily' },
];

function Sidebar({ sidebar }) {
	return (
		<div className={`sidebar ${sidebar ? '' : 'small-sidebar'}`}>
			<div className="shortcut-links">
				{sidelinks.map(({ img, text, index }) => (
					<div
						className="side-link"
						key={index}>
						<img
							src={img}
							alt=""
						/>
						<p>{text}</p>
					</div>
				))}
				<hr />
			</div>
			<div className="subscribed-list">
				<h3>Subscribed</h3>
				{subscribedList.map(({ img, channelName, index }) => (
					<div
						key={index}
						className="side-link">
						<img
							src={img}
							alt={channelName}
						/>
						<p>{channelName}</p>
					</div>
				))}
			</div>
		</div>
	);
}

export default Sidebar;
