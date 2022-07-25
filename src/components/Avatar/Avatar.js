import './Avatar.css'

const Avatar = ({image}) => {
	return (
		<div className='avatar'>
			<img src={image} alt="userAvatar" />
		</div>
	)
}

export default Avatar
