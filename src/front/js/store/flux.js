const apiUrl = process.env.BACKEND_URL;

const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      message: null,
      demo: [
        {
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
      user: [],
      profilePic: [],
      products: [
        {
          id: 1,
          img: "https://i.pinimg.com/736x/60/25/69/6025694842b457c914461e991349d7a7.jpg",
          alt: "sozial-store-product",
          title: "Cars store",
          description:
            "Curabitur consectetur vitae lacus eget dapibus. Aenean elementum, urna vitae interdum molestie, nisi ante eleifend tortor, vitae sodales augue lacus quis massa. Donec laoreet turpis in dolor placerat, nec lobortis metus pulvinar. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          price: "2000",
        },
        {
          id: 2,
          img: "https://cf.shopee.com.co/file/d3419be8258e34747d8777f590152a0f",
          alt: "sozial-store-product",
          title: "Beatiful paint",
          description:
            "Mauris in orci sollicitudin, pellentesque magna interdum, rutrum massa.",
          price: "500",
        },
        {
          id: 3,
          img: "https://media.wired.com/photos/5df98d3660d5ad000818260b/16:9/w_2047,h_1151,c_limit/Gear-Decade-10-Best-Products.jpg",
          alt: "sozial-store-product",
          title: "Amazon Basics",
          description:
            "Integer venenatis purus non ex mattis convallis. Etiam consectetur auctor blandit. Vivamus facilisis est sit amet finibus tempor.",
          price: "80",
        },
        {
          id: 4,
          img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZHVjdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
          alt: "sozial-store-product",
          title: "Man cheap shoes",
          description:
            "Nam aliquam lacus orci, ac tristique urna eleifend non. Nulla molestie dolor non eros consequat, in venenatis sem consectetur. Maecenas id malesuada lectus. Curabitur laoreet tellus ac purus semper maximus. Nulla dictum sapien tincidunt, fermentum eros eu, suscipit neque. Nunc",
          price: "75",
        },
        {
          id: 5,
          img: "https://usaditoscars.com/wp-content/uploads/2021/04/Tipos-de-cauchos-para-carros-en-Venezuela-alineacion-de-cauchos.jpg",
          alt: "sozial-store-product",
          title: "Cars wheels",
          description:
            "Donec vel turpis quam. In sit amet tincidunt risus, nec convallis mauris. Proin ultricies odio sapien, ac malesuada enim vehicula eget",
          price: "120",
        },
        {
          id: 6,
          img: "https://www.carroya.com/noticias/sites/default/files/entradillas/195613993bujias-carro.jpg",
          alt: "sozial-store-product",
          title: "Cars articles",
          description: "Cars articles store, info here",
          price: "100",
        },
        {
          id: 7,
          img: "https://www.lubricantesenvenezuela.com/wp-content/uploads/2019/11/medidas-de-cauchos-1.jpg",
          alt: "sozial-store-product",
          title: "Cars wheels",
          description:
            "Quisque congue neque mauris, non sodales purus ullamcorper nec. Vestibulum et elementum neque. In hac habitasse platea dictumst. Curabitur ",
          price: "110",
        },
        {
          id: 8,
          img: "https://www.autosalesbalkan.com/wp-content/uploads/2015/04/buy-used-cars-lineup-720x405.jpg",
          alt: "sozial-store-product",
          title: "Used cars",
          description:
            "Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas tristique eros sagittis, suscipit est sit amet, posuere mauris. Etiam non interdum arcu. Sed nec laoreet justo. Cras eget est sem. Integer et nulla non dui fringilla dignissim vel in nunc.",
          price: "5000",
        },
        {
          id: 9,
          img: "http://repuestosytalleres.com/images/mantenimiento_de_vehiculos/motor/lo-que-nos-dice-el-aspecto-de-las-bujias-sobre-el-motor.jpg",
          alt: "sozial-store-product",
          title: "Cars articles",
          description: "Cars articles store, info here",
          price: "100",
        },
        {
          id: 10,
          img: "https://template.canva.com/EADtutwov_Q/1/0/256w-nJr37FPJeZs.jpg",
          alt: "sozial-store-product",
          title: `"El buen cirujano" book`,
          description:
            "Proin congue dui in malesuada aliquet. Pellentesque ultricies condimentum venenatis. Donec porta pharetra tincidunt. Etiam scelerisque purus quis varius sodales. Vivamus bibendum arcu ut nunc ullamcorper molestie. Vestibulum lacinia, nisi vitae laoreet posuere, tellus arcu tincidunt quam, nec volutpat nibh nibh eget erat. Phasellus a molestie tortor, in porttitor sem. Fusce ut semper ipsum. Vestibulum id ornare diam, a ullamcorper ex.",
          price: "20",
        },
        {
          id: 11,
          img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHByb2R1Y3R8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60",
          alt: "sozial-store-product",
          title: "Smart whatches",
          description:
            "Quisque congue erat augue, vel accumsan sapien rhoncus ut. Maecenas lobortis tristique justo, et fermentum velit iaculis in. Mauris venenatis suscipit felis, eget finibus purus vestibulum in. Nulla et libero consequat, aliquam nulla ac, porttitor nisi. Fusce eget massa id enim efficitur vehicula. Duis nibh massa, fringilla at mauris non, scelerisque porta eros. Quisque feugiat nisi vel elit mollis, eu cursus quam porta.",
          price: "25",
        },
        {
          id: 12,
          img: "https://template.canva.com/EADwi4xAG6I/1/0/256w-JBWCAd5q564.jpg",
          alt: "sozial-store-product",
          title: `"El quinto infierno" book`,
          description:
            "Proin congue dui in malesuada aliquet. Pellentesque ultricies condimentum venenatis. Donec porta pharetra tincidunt. ",
          price: "25",
        },
      ],
      posts: [
        {
          id: 1,
          likesNumber: 2,
          img: "https://i.pinimg.com/736x/60/25/69/6025694842b457c914461e991349d7a7.jpg",
          text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
          username: "Carl Jhonson",
          hour: "1 hr",
          postimage:
            "https://fastly.picsum.photos/id/144/600/600.jpg?hmac=BCfSxRnHNKu3Zw9OYdSJ5mjJdR8D16ky9rBwHmclYWw",
        },
        {
          id: 2,
          likesNumber: 17,
          img: "https://fastly.picsum.photos/id/923/600/600.jpg?hmac=-Z9u__nla6z2tlApM048LeVj04Bf2U4q4I8dbynZPCc",
          text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem",
          username: "Suset Vera",
          hour: "2 hrs",
          postimage:
            "https://fastly.picsum.photos/id/617/600/600.jpg?hmac=nMl4-TfIm3ARv8o-AvEh800dzlBelsWN2Zq2Whsglyw",
        },
        {
          id: 3,
          img: "https://fastly.picsum.photos/id/318/600/600.jpg?hmac=EMEdyMWaWsfIAfLKAtHC8CEyjWYYd446gDsGJ81NZA4",
          text: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, comes from a line in section 1.10.32.",
          username: "Daysi Dawson",
          hour: "2 hrs",
        },
        {
          id: 4,
          likesNumber: 22,
          img: "https://fastly.picsum.photos/id/504/600/600.jpg?hmac=8PjIqVUS8HTj2LXiFmTyENGerLlisWJqREkmq686c0U",
          text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour",
          username: "Adalberto Peñaranda",
          hour: "17 hrs",
          postimage:
            "https://fastly.picsum.photos/id/253/600/600.jpg?hmac=hburOwKHaBLm-XvvskrZNqvBxW4_KiPVo0Z8X3IrXq0",
        },
        {
          id: 5,
          likesNumber: 48,
          img: "https://fastly.picsum.photos/id/318/600/600.jpg?hmac=EMEdyMWaWsfIAfLKAtHC8CEyjWYYd446gDsGJ81NZA4",
          text: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, comes from a line in section 1.10.32.",
          username: "Daysi Dawson",
          hour: "21 hrs",
          postimage:
            "https://fastly.picsum.photos/id/842/600/600.jpg?hmac=xpS8Snrlr6C8Daje2yeYe43QAvjnGQF5eudV44EXGKY",
        },
      ],
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
        localStorage.setItem("user", JSON.stringify(user));
        console.log("result", result);
        console.log(user);
        if (result.msg === "User create succefully") {
          return "ok";
        } else {
          return "not ok";
        }
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
        const toKen = result.token;
        console.log("result", result);
        localStorage.setItem("token", JSON.stringify(toKen));

        if (result.success === "User login successfully") {
          return "ok";
        } else {
          return "ko";
        }
      },

      getImage: async () => {
        const response = await fetch(`${apiUrl}/api/getphoto`, {
          headers: {
            Authorization: `Bearer ${JSON.parse(
              localStorage.getItem("token")
            )}`,
          },
        });

        const pictureData = await response.json();
        const pictureUrl = pictureData.pictureUrl;
        localStorage.setItem("picture", JSON.stringify(pictureData));
        setStore({ profilePic: pictureUrl });

        console.log(localStorage.getItem("url"));
        console.log(pictureUrl);
      },

      UploadPhoto: async (photo) => {
        let result = await fetch(`${apiUrl}/api/uploadPhoto/`, {
          body: photo,
          method: "POST",
          headers: {
            Authorization: `Bearer ${JSON.parse(
              localStorage.getItem("token")
            )}`,
            "Access-Control-Allow-Origin": "*",
          },
        });
        let newStore = getStore();
        setStore({ ...newStore, profilePic: [...newStore.profilePic, photo] });
      },

      GeneratePost: async (post) => {
        let result = await fetch(`${apiUrl}/api/posts/`, {
          method: "POST",
          body: JSON.stringify(post),
          headers: {
            Authorization: `Bearer ${JSON.parse(
              localStorage.getItem("token")
            )}`,

            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
        });

        let newStore = getStore();
        setStore({ ...newStore, posts: [post, ...newStore.posts] });
        result = await result.json();
        console.log("result", result);
      },

      GetPosts: async () => {
        const response = await fetch(`${apiUrl}/api/posts/`, {
          headers: {
            Authorization: `Bearer ${JSON.parse(
              localStorage.getItem("token")
            )}`,
          },
        });
        const posts = await response.json();
        let newStore = getStore();
        setStore({ ...newStore, posts: [posts, ...newStore.posts] });

        console.log("result", result);
      },
      PostProducts: async (product) => {
        const response = await fetch(`${apiUrl}/api/postproducts`, {
          headers: {
            method: "POST",
            body: JSON.stringify(product),
            headers: {
              Authorization: `Bearer ${JSON.parse(
                localStorage.getItem("token")
              )}`,

              "Content-Type": "application/json",
              "Access-Control-Allow-Origin": "*",
            },
          },
        });

        let newStore = getStore();
        setStore({ ...newStore, products: [product, ...newStore.products] });
        console.log(response);
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
