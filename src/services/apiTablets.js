import supabase from "./supabase";

export async function getTablets() {
  let { data: tablets, error } = await supabase.from("tablets").select("*");
  if (error) {
    console.log(error);
    throw new Error("tablets not found");
  }
  return tablets;
}
