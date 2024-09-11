export interface Fotograf {
  Name: string; // Adjust this based on the actual key used in the 'Name_Fotograf' object
}

export interface Kollektion {
  Name_Fotograf: string | Fotograf; // 'Name_Fotograf' can be either a string or an object
  Name_der_Kollektion: string;
  Titelbild: string;
  collectionId: string;
  collectionName: string;
  created: string;
  expand?: {
    Name_Fotograf?: Fotograf; // Expanded 'Name_Fotograf' can be an object
  };
  id: string;
  updated: string;
  imageUrl: string; // Add this if you are adding it dynamically
}
