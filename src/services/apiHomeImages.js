import supabase from "./supabase";

export async function getHomeImages() {
  let { data, error } = await supabase.from("homeImages").select("*");
  if (error) {
    console.log(error);
    throw new Error("home images not found");
  }
  return data;
}
