import React, { useEffect, useState } from 'react';
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
import { API_KEY, value_converter } from '../../data';
import moment from 'moment';

// const fakedata = [
// 	{
// 		img: thumbnail1,
// 		title: 'Best Channel to learn coding that help you to be a web developer',
// 		channelName: 'Greatstack',
// 		views: '15k',
// 		old: '2',
// 	},
// 	{
// 		img: thumbnail2,
// 		title: 'Best Channel to learn coding that help you to be a web developer',
// 		channelName: 'Greatstack',
// 		views: '15k',
// 		old: '2',
// 	},
// 	{
// 		img: thumbnail3,
// 		title: 'Best Channel to learn coding that help you to be a web developer',
// 		channelName: 'Greatstack',
// 		views: '15k',
// 		old: '2',
// 	},
// 	{
// 		img: thumbnail4,
// 		title: 'Best Channel to learn coding that help you to be a web developer',
// 		channelName: 'Greatstack',
// 		views: '15k',
// 		old: '2',
// 	},
// 	{
// 		img: thumbnail5,
// 		title: 'Best Channel to learn coding that help you to be a web developer',
// 		channelName: 'Greatstack',
// 		views: '15k',
// 		old: '2',
// 	},
// 	{
// 		img: thumbnail6,
// 		title: 'Best Channel to learn coding that help you to be a web developer',
// 		channelName: 'Greatstack',
// 		views: '15k',
// 		old: '2',
// 	},
// 	{
// 		img: thumbnail7,
// 		title: 'Best Channel to learn coding that help you to be a web developer',
// 		channelName: 'Greatstack',
// 		views: '15k',
// 		old: '2',
// 	},
// 	{
// 		img: thumbnail8,
// 		title: 'Best Channel to learn coding that help you to be a web developer',
// 		channelName: 'Greatstack',
// 		views: '15k',
// 		old: '2',
// 	},
// ];

// const repeatedData = [...Array(1)].flatMap(() => fakedata);

function Feed({ category }) {
	const [data, setData] = useState([]);

	const fetchData = async () => {
		const videoList_URL = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=${category}&key=${API_KEY}`;
		await fetch(videoList_URL)
			.then((response) => response.json())
			.then((data) => setData(data.items));
	};

	useEffect(() => {
		fetchData();
	}, [category]);

	return (
		<div className="feed">
			{data.map((item, index) => (
				<Link
					to={`video/${item.snippet.categoryId}/${item.id}`}
					key={index}
					className="card">
					<img
						src={item.snippet.thumbnails.medium.url}
						alt=""
					/>
					<h2>{item.snippet.title}</h2>
					<h3>{item.snippet.channelTitle}</h3>
					<p>
						{value_converter(item.statistics.viewCount)} views &bull;{' '}
						{moment(item.snippet.publishedAt).fromNow()} days ago
					</p>
				</Link>
			))}
		</div>
	);
}

export default Feed;
