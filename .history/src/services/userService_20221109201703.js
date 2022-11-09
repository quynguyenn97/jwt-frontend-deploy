
const registerNewUser = (data) => {
    return(
    axios.post("http://localhost:8080/api/v1/register", {
                email,
                phone,
                username,
                password,
    });
    )
}