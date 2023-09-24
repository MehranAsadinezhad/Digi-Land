import supabase from "./supabase";

export async function getSpeakers() {
  let { data, error } = await supabase.from("speakers").select("*");
  if (error) {
    console.log(error);
    throw new Error("speakers not found");
  }
  return data;
}
