import toast from "react-hot-toast";
import "./App.css";

function App() {
  const handleData = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const password = form.password.value;
    const user = { name, password };
    // console.log(user);
    fetch("http://localhost:3000/testUser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          toast.success("Data send Successfully");
        }
      });
  };
  return (
    <>
      <form onSubmit={handleData}>
        <input type="text" name="name" id="" />
        <input type="password" name="password" id="" />
        <button>Submitt</button>
      </form>
    </>
  );
}

export default App;
