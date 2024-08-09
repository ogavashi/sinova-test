import { api } from "@/features/app";
import HomePage from "./home-page";

async function getBreeds() {
  const dogBreeds = await api.dogApi.getBreeds();
  const catBreeds = await api.catApi.getBreeds();

  return { dogBreeds, catBreeds };
}

export default async function Page() {
  const { catBreeds, dogBreeds } = await getBreeds();

  return <HomePage catBreeds={catBreeds} dogBreeds={dogBreeds} />;
}
