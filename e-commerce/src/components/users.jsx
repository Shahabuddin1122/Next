import axiosInterceptorInstance from "../app/axiosInterceptors";

const fetchData = async () => await axiosInterceptorInstance.get('/posts')
    .then(res => ({
        error: false,
        users: res.data,
    }))
    .catch(() => ({
            error: true,
            users: null,
        }),
    );

const Users = ({ users, error }) => {
    return (
        <section>
            <header>
                <h1>List of users</h1>
            </header>
            {error && <div>There was an error.</div>}
            {!error && users && (
                <table>
                    <thead>
                    <tr>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Name</th>
                    </tr>
                    </thead>
                    <tbody>
                    {users.map((user, key) => (
                        <tr key={key}>
                            <td>{user.username}</td>
                            <td>{user.email}</td>
                            <td>{user.name}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            )}
        </section>
    );
};

export const getStaticProps = async () => {
    const data = await fetchData();
    return {
        props: data,
    };
}

export default Users;