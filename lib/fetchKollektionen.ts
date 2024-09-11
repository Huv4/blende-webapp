import { pb } from "@/lib/pocketbase";

export const fetchKollektionen = async () => {
  try {
    // Fetch the collections
    const kollektionen = await pb.collection("Kollektion").getFullList({
      sort: "-created",
    });

    // Map through the records and add the image URL
    const enrichedKollektionen = kollektionen.map((kollektion) => {
      // Assuming 'imageField' is the name of the image field in your Pocketbase schema
      const imageUrl = pb.files.getUrl(kollektion, kollektion.Titelbild);

      return {
        ...kollektion,
        imageUrl, // Add the image URL to the kollektion object
      };
    });
    console.log(enrichedKollektionen);
    return enrichedKollektionen;
  } catch (error) {
    console.error("Error fetching kollektionen:", error);
    return [];
  }
};
