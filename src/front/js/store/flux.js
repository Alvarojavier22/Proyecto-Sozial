const apiUrl = process.env.BACKEND_URL;

const getState = ({
    getStore,
    getActions,
    setStore
}) => {
    return {
        store: {
            message: null,
            demo: [{
                    title: "FIRST",
                    background: "white",
                    initial: "white",
                },
                {
                    title: "SECOND",
                    background: "white",
                    initial: "white",
                },
            ],
            user: []
        },
        actions: {
            signUp: async (user) => {
                let result = await fetch(`${apiUrl}/api/signup/`, {
                    method: "POST",
                    body: JSON.stringify(user),
                    headers: {
                        "Content-Type": "application/json",
                        "Access-Control-Allow-Origin": "*",
                    },
                });
                result = await result.json();
                let newStore = {...getStore()}
                newStore[user]=result
                setStore(newStore)
                console.log("result", result);
            },

            

            GeneratePost: async (post) => {
                let result = await fetch(`${apiUrl}/api/posts/`, {
                    method: "POST",
                    body: JSON.stringify(post),
                    headers: {
                        
                        Authorization: "Bearer " +
                        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTY3NTU0NDkwNSwianRpIjoiMGQ3N2EyZDYtNTNjNi00NzRhLWEyNzgtOGFlYTQzMWI5MTU5IiwidHlwZSI6ImFjY2VzcyIsInN1YiI6MiwibmJmIjoxNjc1NTQ0OTA1LCJleHAiOjE2NzU1NDU4MDUsInJvbGUiOiJ1c2VyIn0.zw6Bplcq9MiWQHwSln5GKwXLr8ZrHnz__7YgWXW_jOw",
                        "Content-Type": "application/json",
                        "Access-Control-Allow-Origin": "*",
                    },
                });
                result = await result.json();
                console.log("result", result);
            },

            login: async (user) => {
                let result = await fetch(`${apiUrl}/api/login/`, {
                    method: "POST",
                    body: JSON.stringify(user),
                    headers: {
                        "Content-Type": "application/json",
                        "Access-Control-Allow-Origin": "*",
                    },
                });
                result = await result.json();
                console.log("result", result);
            },

            // Use getActions to call a function within a fuction
            exampleFunction: () => {
                getActions().changeColor(0, "green");
            },

            getMessage: async () => {
                try {
                    // fetching data from the backend
                    const resp = await fetch(apiUrl);
                    const data = await resp.json();
                    setStore({
                        message: data.message,
                    });
                    // don't forget to return something, that is how the async resolves
                    return data;
                } catch (error) {
                    console.log("Error loading message from backend", error);
                }
                //console.log(process.env.BACKEND_URL)
            },
            changeColor: (index, color) => {
                //get the store
                const store = getStore();

                //we have to loop the entire demo array to look for the respective index
                //and change its color
                const demo = store.demo.map((elm, i) => {
                    if (i === index) elm.background = color;
                    return elm;
                });

                //reset the global store
                setStore({
                    demo: demo,
                });
            },
        },
    };
};

export default getState;