import supabase from "./supabase";

export async function getSmartWatches() {
  let { data: smartWatches, error } = await supabase
    .from("smartWatches")
    .select("*");
  if (error) {
    console.log(error);
    throw new Error("smartWatches not found");
  }
  return smartWatches;
}
