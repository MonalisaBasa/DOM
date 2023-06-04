

async function ItemQuantity(event) {
  event.preventDefault();
  const candy = event.target.CandyName.value;
  const description = event.target.description.value;
  const price = event.target.Price.value;
  let quantity = event.target.Quantity.value;

  let obj = {
    candy,
    description,
    price,
    quantity,
  };
  showUserOnScreen(obj);
  try {
    let res = await axios.post(
      "https://crudcrud.com/api/dd3a5aa6518d416e8318b65b1cbc31ce/Generalstore",
      obj
    );
    console.log(res);
  } catch (err) {
    console.log(err);
  }
}

window.addEventListener("DOMContentLoaded", async () => {
  try {
    const windowData = await axios.get(
      "https://crudcrud.com/api/dd3a5aa6518d416e8318b65b1cbc31ce/Generalstore"
    );
    for (let i = 0; i < windowData.data.length; i++) {
      showUserOnScreen(windowData.data[i]);
    }
    console.log(windowData.data);
  } catch (err) {
    showUserOnScreen(err);
  }
});

async function showUserOnScreen(obj) {
  const parentEl = document.querySelector("#formElements");
  const childEl = document.createElement("li");
  childEl.textContent = `${obj.candy} - ${obj.description} - ${obj.price} - ${obj.quantity}`;
  childEl.classList = "candy-Details";
  parentEl.appendChild(childEl);
  const btn1 = document.createElement("input");
  btn1.type = "button";
  btn1.value = "Buy1";
  btn1.classList = "btn btn-dark";
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
        `https://crudcrud.com/api/dd3a5aa6518d416e8318b65b1cbc31ce/Generalstore/${obj._id}`,
        {
          candy: `${obj.candy}`,
          description: `${obj.description}`,
          price: `${obj.price}`,
          quantity: `${obj.quantity - 1}`,
        }
      );

      const btngetData = await axios.get(
        `https://crudcrud.com/api/dd3a5aa6518d416e8318b65b1cbc31ce/Generalstore/${obj._id}`
      );
      showUserOnScreen(btngetData.data);
      parentEl.removeChild(childEl);
    } catch (err) {
      console.log(err);
      console.log(obj);
    }
  };
  btn2.onclick = async () => {
    try {
      const btn2axios = axios.put(
        `https://crudcrud.com/api/dd3a5aa6518d416e8318b65b1cbc31ce/Generalstore/${obj._id}`,
        {
          candy: `${obj.candy}`,
          description: `${obj.description}`,
          price: `${obj.price}`,
          quantity: `${obj.quantity - 2}`,
        }
      );

      const btnGetData2 = await axios.get(
        `https://crudcrud.com/api/dd3a5aa6518d416e8318b65b1cbc31ce/Generalstore/${obj._id}`
      );
      showUserOnScreen(btnGetData2.data);
      parentEl.removeChild(childEl);
    } catch (err) {
      console.log(err);
    }
  };
  btn3.onclick = async () => {
    try {
      const btnAxios3 = axios.put(
        `https://crudcrud.com/api/dd3a5aa6518d416e8318b65b1cbc31ce/Generalstore/${obj._id}`,
        {
          candy: `${obj.candy}`,
          description: `${obj.description}`,
          price: `${obj.price}`,
          quantity: `${obj.quantity - 3}`,
        }
      );
      const btnGetData3 = await axios.get(
        `https://crudcrud.com/api/dd3a5aa6518d416e8318b65b1cbc31ce/Generalstore/${obj._id}`
      );
      showUserOnScreen(btnGetData3.data);
      parentEl.removeChild(childEl);
    } catch (err) {
      console.log(err);
    }
  };
}
