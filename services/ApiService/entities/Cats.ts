import { ICatBreed } from "@/types";
import { Base } from ".";

export class Cats extends Base {
  getBreeds = async (page: number = 0, limit: number = 10): Promise<ICatBreed[]> => {
    const data = (await this.apiClient.get("breeds", { page, limit })) as ICatBreed[];

    const breedsWithImages = await Promise.all(
      data.map(async (breed) => {
        const imageResponse = await this.image(breed.reference_image_id);
        return {
          ...breed,
          imageUrl: imageResponse.url,
        };
      })
    );

    return breedsWithImages;
  };

  getBreed = async (id: string): Promise<ICatBreed> => {
    const data = await this.apiClient.get(`breeds/${id}`);

    const image = await this.image(data.reference_image_id);

    return { ...data, imageUrl: image.url };
  };

  image = async (id: string) => {
    const data = await this.apiClient.get(`images/${id}`);

    return data;
  };
}
