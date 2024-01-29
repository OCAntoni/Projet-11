export async function fetchProfile(token) {
    try {
        const response = await fetch("http://localhost:3001/api/v1/user/profile", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "authorization": `Bearer ${token}`
            }
        });

        if (response.status === 200) {
            return await response.json();
        } else {
            console.log("error fetching data");
        }
    } catch (error) {
        console.error("an unexpected error has happened");
    }
}

export async function fetchEditUserName(token, userName) {
    try {
        const response = await fetch("http://localhost:3001/api/v1/user/profile", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "authorization": `Bearer ${token}`
            },
            body: JSON.stringify({ userName })
        });

        if (response.status === 200) {
            return await response.json();
        } else {
            console.log("error fetching data");
        }
    } catch (error) {
        console.error("an unexpected error has happened");
    }
}