import axios from "axios";
import swal from "sweetalert";
let config = {
  // replace this key with yours
  publicKey: process.env.REACT_APP_khalti_publicKey,
  productIdentity: "123766",
  productName: "My Ecommerce Store",
  productUrl: "https://plmultimediaservice.com/",
  eventHandler: {
    onSuccess(payload) {
      // hit merchant api for initiating verfication
      console.log(payload);
      let data = {
        token: payload.token,
        amount: payload.amount,
      };

      axios
        .get(
          `https://meslaforum.herokuapp.com/khalti/${data.token}/${data.amount}/${process.env.REACT_APP_khalti_secretKey}`
        )
        .then((response) => {
          console.log(response.data);
          swal({
            title: "Thank You",
            text: "Payment done successfully",
            icon: "success",
            button: "Ok",
          });
        })
        .catch((error) => {
          console.log(error);
        });
    },
    // onError handler is optional
    onError(error) {
      // handle errors
      console.log(error);
    },
    onClose() {
      console.log("widget is closing");
    },
  },
  paymentPreference: [
    "KHALTI",
    "EBANKING",
    "MOBILE_BANKING",
    "CONNECT_IPS",
    "SCT",
  ],
};

export default config;
