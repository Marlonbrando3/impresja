export const FetchIDsFromAsari = async () => {
  console.log("Łącze z API Asari...");
  let res = await fetch("/api/asari");
  const response = await res.json();
  console.log("Połączono.");

  let offersIDsTemp: any = [];

  if (response.status === 200) {
    await response.list.data.map((obj: any) => {
      offersIDsTemp.push(obj.id);
    });
    return { data: offersIDsTemp, status: 200 };
  } else {
    return { data: "dont work", status: 400 };
  }
};
