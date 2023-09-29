import supabase from "./supabase";

export async function getHandsfree() {
  let { data, error } = await supabase
    .from("handsfrees")
    .select("*");
  if (error) {
    console.log(error);
    throw new Error("handsfrees not found");
  }
  return data;
}

