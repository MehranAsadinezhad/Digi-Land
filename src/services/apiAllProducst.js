import supabase from "./supabase";

export async function getAllProducts() {
  let { data, error } = await supabase.from("allProducts").select("*");
  if (error) {
    console.log(error);
    throw new Error("handsfrees not found");
  }
  return data;
}
