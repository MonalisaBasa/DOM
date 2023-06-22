

async function ItemQuantity(event) {
  event.preventDefault();
  const ItemName = event.target.ItemName.value;
  // console.log(ItemName);
  const description = event.target.description.value;
  const price = event.target.Price.value;
  let quantity = event.target.Quantity.value;

  let obj = {
    ItemName,
    description,
    price,
    quantity,
  };
  showUserOnScreen(obj);
  try {
    let res = await axios.post(
      "https://crudcrud.com/api/6e22bf9885144cce9696295f43574ce5/Generalstore",
      obj
    );
    // console.log(res);
  } catch (err) {
    console.log(err);
  }
}

window.addEventListener("DOMContentLoaded", async () => {
  try {
    const WindowData = await axios.get(
      "https://crudcrud.com/api/6e22bf9885144cce9696295f43574ce5/Generalstore"
    );
    for (let i = 0; i < WindowData.data.length; i++) {
      showUserOnScreen(WindowData.data[i]);
    }
    // console.log(WindowData.data);
  } catch (err) {
    showUserOnScreen(err);
  }
});

async function showUserOnScreen(obj) {
  const parentEl = document.querySelector("#formElements");
  const childEl = document.createElement("li");
  childEl.textContent = `${obj.ItemName} - ${obj.description} - ${obj.price} - ${obj.quantity}`;
  childEl.classList = "Item-Details";
  parentEl.appendChild(childEl);
  const btn1 = document.createElement("input");
  btn1.type = "button";
  btn1.value = "Buy1";
  btn1.classList = "btn btn-dark";
  btn1.id="b1";
  childEl.appendChild(btn1);
  const btn2 = document.createElement("input");
  btn2.type = "button";
  btn2.value = "Buy2";
  btn2.classList = "btn btn-dark";
  childEl.appendChild(btn2);
  const btn3 = document.createElement("input");
  btn3.type = "button";
  btn3.value = "Buy3";
  btn3.classList = "btn btn-dark";
  childEl.appendChild(btn3);

  // Button Click
  btn1.onclick = async () => {
    try {
      const btn1Axios = await axios.put(
        // console.log("Hi Axios")
        `https://crudcrud.com/api/6e22bf9885144cce9696295f43574ce5/Generalstore/${obj._id}`,
        {
          ItemName: `${obj.ItemName}`,
          description: `${obj.description}`,
          price: `${obj.price}`,
          quantity: `${obj.quantity - 1}`,
        }
      );

      const btngetData1 = await axios.get(
        `https://crudcrud.com/api/6e22bf9885144cce9696295f43574ce5/Generalstore/${obj._id}`
      );
      parentEl.removeChild(childEl);
      showUserOnScreen(btngetData1.data);
      
    } catch (err) {
      console.log(err);
      console.log(obj);
    }

    if(obj.quantity<=0) {
      document.getElementById("b1").style.visibility = "hidden";
    }
    
  };
  btn2.onclick = async () => {
    try {
      const btn2Axios = axios.put(
        `https://crudcrud.com/api/6e22bf9885144cce9696295f43574ce5/Generalstore/${obj._id}`,
        {
          ItemName: `${obj.ItemName}`,
          description: `${obj.description}`,
          price: `${obj.price}`,
          quantity: `${obj.quantity - 2}`,
        }
      );

      const btnGetData2 = await axios.get(
        `https://crudcrud.com/api/6e22bf9885144cce9696295f43574ce5/Generalstore/${obj._id}`
      );
      showUserOnScreen(btnGetData2.data);
      parentEl.removeChild(childEl);
    } catch (err) {
      console.log(err);
    }
  };
  btn3.onclick = async () => {
    try {
      const btn3Axios = axios.put(
        `https://crudcrud.com/api/6e22bf9885144cce9696295f43574ce5/Generalstore/${obj._id}`,
        {
          ItemName: `${obj.ItemName}`,
          description: `${obj.description}`,
          price: `${obj.price}`,
          quantity: `${obj.quantity - 3}`,
        }
      );
      const btnGetData3 = await axios.get(
        `https://crudcrud.com/api/6e22bf9885144cce9696295f43574ce5/Generalstore/${obj._id}`
      );
      showUserOnScreen(btnGetData3.data);
      parentEl.removeChild(childEl);
    } catch (err) {
      console.log(err);
    }
  };
}
