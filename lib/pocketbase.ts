import PocketBase from "pocketbase";

export const pb = new PocketBase(process.env.POCKETBASE_URL);

export const authData = pb.admins.authWithPassword(
  process.env.POCKETBASE_ADMIN_EMAIL!,
  process.env.POCKETBASE_ADMIN_PASSWORD!
);

export async function getKollektion() {
  // you can also fetch all records at once via getFullList
  const records = await pb.collection("Kollektion").getFullList({
    sort: "-created",
  });
  return records;
}
