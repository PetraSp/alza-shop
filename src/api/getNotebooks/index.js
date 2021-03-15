import axios from "axios";

const ALZA_API_URL =
  "https://cors.bridged.cc/https://www.alza.cz/Services/RestService.svc/v2/products";

const getNotebooks = () =>
  axios.post(
    `https://cors.bridged.cc/${ALZA_API_URL}`,
    {
      filterParameters: {
        id: 18855843,
        isInStockOnly: false,
        newsOnly: false,
        wearType: 0,
        orderBy: 0,
        page: 1,
        params: {
          tId: 0,
          v: [],
        },
        producers: [],
        sendPrices: true,
        type: "action",
        typeId: "",
        branchId: "",
      },
    },
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

export default getNotebooks;
