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
	{ img: home, text: 'Home', id: 0 },
	{ img: game_icon, text: 'Gaming', id: 20 },
	{ img: automobiles, text: 'Cars', id: 2 },
	{ img: sports, text: 'Sports', id: 17 },
	{ img: entertainment, text: 'Entertainment', id: 24 },
	{ img: tech, text: 'Tecnology', id: 28 },
	{ img: music, text: 'Music', id: 10 },
	{ img: blogs, text: 'Blogs', id: 22 },
	{ img: news, text: 'News', id: 25 },
];

// this is the list of people the user are subscribed too..pretend.
const subscribedList = [
	{ img: jack, channelName: 'PewDiePie' },
	{ img: simon, channelName: 'MrBeast' },
	{ img: tom, channelName: 'Justin Bieber' },
	{ img: megan, channelName: '5-Minute Crafts' },
	{ img: cameron, channelName: 'News daily' },
];

function Sidebar({ sidebar, category, setCategory }) {
	return (
		<div className={`sidebar ${sidebar ? '' : 'small-sidebar'}`}>
			<div className="shortcut-links">
				{sidelinks.map(({ img, text, id, index }) => (
					<div
						className={`side-link ${category === id ? 'active' : ''}`}
						onClick={() => setCategory(id)}
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
