export const FetchPropertiesFromAsari = async (id: any) => {
  // console.log(id);

  let res = await fetch("api/asari", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id: id }),
  });
  const result = await res.json();

  if (result.list.success === true) {
    return result;
  }
};
