import { useAuth0 } from "@auth0/auth0-react";
const Profile = () => {
    const { user, isAuthenticated } = useAuth0()
    const handleRedirect = () => {
        window.location.assign('https://saospina.github.io/auth0-app2/')
    }
    return (
        isAuthenticated && (
            <div>
                <img src={user.picture} alt="" />
                <h2>{user.name}</h2>
                <h2>{user.email}</h2>
                {JSON.stringify(user)}
                <button onClick={handleRedirect}>Redirect</button>
            </div>
        )
    )
}

export default Profile