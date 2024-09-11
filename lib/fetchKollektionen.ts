import { pb } from "@/lib/pocketbase";

export const fetchKollektionen = async () => {
  try {
    // Fetch the collections
    const kollektionen = await pb.collection("Kollektion").getFullList({
      sort: "-created",
      expand: "Name_Fotograf",
    });

    // Map through the records and add the image URL
    const enrichedKollektionen = kollektionen.map((kollektion) => {
      // Assuming 'imageField' is the name of the image field in your Pocketbase schema
      const imageUrl = pb.files.getUrl(kollektion, kollektion.Titelbild);
      const photographerName = kollektion.expand?.Name_Fotograf.Name;

      // Return the enriched object with image URL and photographer details
      return {
        ...kollektion,
        imageUrl,
        photographerName,
      };
    });
    console.log(enrichedKollektionen);
    return enrichedKollektionen;
  } catch (error) {
    console.error("Error fetching kollektionen:", error);
    return [];
  }
};
