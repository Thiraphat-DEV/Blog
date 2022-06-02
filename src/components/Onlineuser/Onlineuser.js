import './Onlineuser.css'
import Avatar from '../Avatar/Avatar'
import {useCollection} from '../../hooks/useCollection'
const Onlineuser = () => {
	const {documents, error} = useCollection('users')
  return (
    <div className='user-list'>
	    <h2>All User</h2>
	    {error && <p className='error'>{error}</p>}
	    {documents && documents.map((user) => (
		    <div key={user?.id} className="user-list-item">
			    {user?.online && <span className='online'></span>}
			    <span>{user?.displayName}</span>
			    <Avatar  image={user?.photoURL}/>
		    </div>

	    ))}


    </div>
  )
}

export default Onlineuser