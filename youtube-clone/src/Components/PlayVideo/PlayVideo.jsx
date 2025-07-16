import React, { useEffect, useState } from 'react';
import './PlayVideo.css';

import like from '../../assets/like.png';
import dislike from '../../assets/dislike.png';
import share from '../../assets/share.png';
import save from '../../assets/save.png';
import jack from '../../assets/jack.png';
import { API_KEY, value_converter } from '../../data';
import moment from 'moment';
import { useParams } from 'react-router-dom';

function PlayVideo() {
	const { videoId } = useParams();

	const [apiData, setApiData] = useState(null);
	const [channelData, setChannelData] = useState(null);
	const [commentData, setCommentData] = useState([]);

	const fetchVideoData = async () => {
		// Fetching Videos data
		const videoDetails_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`;
		await fetch(videoDetails_url)
			.then((res) => res.json())
			.then((data) => setApiData(data.items[0]));
	};

	const fetchOtherData = async () => {
		if (!apiData?.snippet?.channelId) return;
		// fetching channel data
		const channelData_URL = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${apiData?.snippet?.channelId}&key=${API_KEY}`;

		await fetch(channelData_URL)
			.then((res) => res.json())
			.then((data) => setChannelData(data.items[0]));

		// fetching comment data
		const comment_URL = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&maxResults=50&videoId=${videoId}&key=${API_KEY}`;
		await fetch(comment_URL)
			.then((res) => res.json())
			.then((data) => setCommentData(data));
	};

	useEffect(() => {
		fetchVideoData();
	}, [videoId]);

	useEffect(() => {
		if (apiData?.snippet?.channelId) {
			fetchOtherData();
		}
		console.log(channelData);
	}, [apiData]);

	return (
		<div className="play-video">
			{/* <video
				src={video1}
				controls
				autoPlay
				muted></video> */}
			<iframe
				src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
				frameborder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
				referrerpolicy="strict-origin-when-cross-origin"
				allowfullscreen></iframe>
			<h3>{apiData ? apiData.snippet.title : 'Title Here'}</h3>
			<div className="play-video-info">
				<p>
					{apiData ? value_converter(apiData.statistics.viewCount) : '16k'}{' '}
					Views &bull;{' '}
					{apiData?.snippet?.publishedAt
						? moment(apiData.snippet.publishedAt).fromNow()
						: 'nothing'}{' '}
				</p>
				<div>
					<span>
						<img
							src={like}
							alt=""
						/>{' '}
						{apiData?.snippet
							? value_converter(apiData.statistics.likeCount)
							: 155}
					</span>
					<span>
						<img
							src={dislike}
							alt=""
						/>{' '}
					</span>
					<span>
						<img
							src={share}
							alt=""
						/>{' '}
						Share
					</span>
					<span>
						<img
							src={save}
							alt=""
						/>{' '}
						Save
					</span>
				</div>
			</div>
			<hr />
			<div className="publisher">
				<img
					src={
						channelData ? channelData.snippet.thumbnails.default.url : { jack }
					}
					alt=""
				/>
				<div>
					<p>{apiData?.snippet ? apiData.snippet.channelTitle : ''}</p>
					<span>
						{channelData
							? value_converter(channelData.statistics.subscriberCount)
							: '2'}{' '}
						Subscribers
					</span>
				</div>
				<button>Subscribe</button>
			</div>
			<div className="vid-description">
				<p>
					{apiData?.snippet ? apiData.snippet.description.slice(0, 250) : ''}
				</p>
				<p>Subscribe to this channel to watch more Stuff</p>
				<hr />
				<h4>
					{apiData?.statistics
						? value_converter(apiData.statistics.commentCount)
						: 0}{' '}
					Comments
				</h4>
				{/* comments */}
				{commentData?.items?.map((item, index) => (
					<div
						className="comment"
						key={item.id || index}>
						<img
							src={item.snippet.topLevelComment.snippet.authorProfileImageUrl}
							alt=""
						/>
						<div>
							<h3>
								{item.snippet.topLevelComment.snippet.authorDisplayName}{' '}
								<span> {} day ago</span>
							</h3>
							<p>{item.snippet.topLevelComment.snippet.textDisplay}</p>
							<div className="comment-action">
								<img
									src={like}
									alt=""
								/>
								<span>
									{value_converter(
										item.snippet.topLevelComment.snippet.likeCount
									)}
								</span>
								<img
									src={dislike}
									alt=""
								/>
								<span>{}</span>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}

export default PlayVideo;
