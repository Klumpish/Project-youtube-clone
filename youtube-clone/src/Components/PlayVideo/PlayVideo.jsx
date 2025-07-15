import React, { useEffect, useState } from 'react';
import './PlayVideo.css';

import like from '../../assets/like.png';
import dislike from '../../assets/dislike.png';
import share from '../../assets/share.png';
import save from '../../assets/save.png';
import jack from '../../assets/jack.png';
import user_profile from '../../assets/user_profile.jpg';
import { API_KEY } from '../../data';

const fakeComments = [
	{
		img: user_profile,
		userName: 'im_not_a_bOT',
		old: '2',
		comment: 'this comment is not about selling viagra',
		likes: '851',
		dislikes: '21',
	},
];
const repeatedData = [...Array(8)].flatMap(() => fakeComments);

function PlayVideo({ videoId }) {
	const [apiData, setApiData] = useState(null);

	const fetchVideoData = async () => {
		// Fetching Videos data
		const videoDetails_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`;
		await fetch(videoDetails_url)
			.then((res) => res.json())
			.then((data) => setApiData(data.items[0]));
	};

	useEffect(() => {
		fetchVideoData();
	}, []);

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
				<p>1525 Views &bull; 2 days ago</p>
				<div>
					<span>
						<img
							src={like}
							alt=""
						/>{' '}
						125
					</span>
					<span>
						<img
							src={dislike}
							alt=""
						/>{' '}
						2
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
					src={jack}
					alt=""
				/>
				<div>
					<p>ChannelName</p>
					<span>1M Subscribers</span>
				</div>
				<button>Subscribe</button>
			</div>
			<div className="vid-description">
				<p>Channel that makes stuff easy</p>
				<p>Subscribe to this channel to watch more Stuff</p>
				<hr />
				<h4>130 Comments</h4>
				{fakeComments.map(
					({ img, userName, old, comment, likes, dislikes }) => (
						<div className="comment">
							<img
								src={img}
								alt=""
							/>
							<div>
								<h3>
									{userName} <span> {old} day ago</span>
								</h3>
								<p>{comment}</p>
								<div className="comment-action">
									<img
										src={like}
										alt=""
									/>
									<span>{likes}</span>
									<img
										src={dislike}
										alt=""
									/>
									<span>{dislikes}</span>
								</div>
							</div>
						</div>
					)
				)}
				{repeatedData.map(
					({ img, userName, old, comment, likes, dislikes }) => (
						<div className="comment">
							<img
								src={img}
								alt=""
							/>
							<div>
								<h3>
									{userName} <span> {old} day ago</span>
								</h3>
								<p>{comment}</p>
								<div className="comment-action">
									<img
										src={like}
										alt=""
									/>
									<span>{likes}</span>
									<img
										src={dislike}
										alt=""
									/>
									<span>{dislikes}</span>
								</div>
							</div>
						</div>
					)
				)}
			</div>
		</div>
	);
}

export default PlayVideo;
