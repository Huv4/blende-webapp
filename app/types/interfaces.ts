export interface Story {
  sys: { id: string };
  title: string;
  slug: string;
  titleImage: { url: string };
  hoverImage: { url: string };
  photographer: { name: string };
  dateOfShot: string;
  altTextTitleImage: string;
  altTextHoverImage: string;
}
