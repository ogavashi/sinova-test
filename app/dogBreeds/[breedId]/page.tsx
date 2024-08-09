import { api } from "@/features/app";
import BreedPage from "./breed-page";

async function getBreed(id: string) {
  const breed = await api.dogApi.getBreed(id);

  return breed;
}

export default async function Page({ params }: { params: { breedId: string } }) {
  const breed = await getBreed(params?.breedId);

  return <BreedPage breed={breed} />;
}
