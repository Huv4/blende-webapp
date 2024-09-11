import PocketBase from "pocketbase";

export const pb = new PocketBase(process.env.POCKETBASE_URL);

export const authData = pb.admins.authWithPassword(
  process.env.POCKETBASE_ADMIN_EMAIL!,
  process.env.POCKETBASE_ADMIN_PASSWORD!
);
