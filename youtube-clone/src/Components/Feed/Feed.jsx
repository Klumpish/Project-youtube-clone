import React from 'react';
import './Feed.css';
import thumbnail1 from '../../assets/thumbnail1.png';
import thumbnail2 from '../../assets/thumbnail2.png';
import thumbnail3 from '../../assets/thumbnail3.png';
import thumbnail4 from '../../assets/thumbnail4.png';
import thumbnail5 from '../../assets/thumbnail5.png';
import thumbnail6 from '../../assets/thumbnail6.png';
import thumbnail7 from '../../assets/thumbnail7.png';
import thumbnail8 from '../../assets/thumbnail8.png';
import { Link } from 'react-router-dom';

const fakedata = [
	{
		img: thumbnail1,
		title: 'Best Channel to learn coding that help you to be a web developer',
		channelName: 'Greatstack',
		views: '15k',
		old: '2',
	},
	{
		img: thumbnail2,
		title: 'Best Channel to learn coding that help you to be a web developer',
		channelName: 'Greatstack',
		views: '15k',
		old: '2',
	},
	{
		img: thumbnail3,
		title: 'Best Channel to learn coding that help you to be a web developer',
		channelName: 'Greatstack',
		views: '15k',
		old: '2',
	},
	{
		img: thumbnail4,
		title: 'Best Channel to learn coding that help you to be a web developer',
		channelName: 'Greatstack',
		views: '15k',
		old: '2',
	},
	{
		img: thumbnail5,
		title: 'Best Channel to learn coding that help you to be a web developer',
		channelName: 'Greatstack',
		views: '15k',
		old: '2',
	},
	{
		img: thumbnail6,
		title: 'Best Channel to learn coding that help you to be a web developer',
		channelName: 'Greatstack',
		views: '15k',
		old: '2',
	},
	{
		img: thumbnail7,
		title: 'Best Channel to learn coding that help you to be a web developer',
		channelName: 'Greatstack',
		views: '15k',
		old: '2',
	},
	{
		img: thumbnail8,
		title: 'Best Channel to learn coding that help you to be a web developer',
		channelName: 'Greatstack',
		views: '15k',
		old: '2',
	},
];

const repeatedData = [...Array(1)].flatMap(() => fakedata);

function Feed() {
	return (
		<div className="feed">
			{fakedata.map(({ img, title, channelName, views, old, index }) => (
				<Link
					to={`video/20/4621`}
					key={index}
					className="card">
					<img
						src={img}
						alt=""
					/>
					<h2>{title}</h2>
					<h3>{channelName}</h3>
					<p>
						{views} views &bull; {old} days ago
					</p>
				</Link>
			))}
			{repeatedData.map(({ img, title, channelName, views, old, index }) => (
				<div
					key={index}
					className="card">
					<img
						src={img}
						alt=""
					/>
					<h2>{title}</h2>
					<h3>{channelName}</h3>
					<p>
						{views} views &bull; {old} days ago {index}
					</p>
				</div>
			))}
		</div>
	);
}

export default Feed;
