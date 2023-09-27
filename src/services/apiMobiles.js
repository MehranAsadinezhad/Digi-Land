import supabase from "./supabase";

export async function getMobiles() {
  const { data, error } = await supabase.from("mobiles").select("*");
  if (error) {
    console.log(error);
    throw new Error("mobiles not found");
  }
  return data;
}


