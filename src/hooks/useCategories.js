import { getCategoriesApi } from "@/services/categoriesServices";
import { useQuery } from "@tanstack/react-query";

export default function useCategories() {
  const { data, isLoading } = useQuery({
    queryKey: ["categories"],
    queryFn: getCategoriesApi,
  });

  // {_id, title, enTitle, ....}
    const { categories: rawCategories = [] } = data || {};

  // const { categories } = data || {};

  // {value, label}
    const categories = rawCategories.map((item) => ({
      label: item.title,
      value: item._id,
    }));

    const transformedCategories = rawCategories.map((item) => ({
      label: item.title,
      value: item.englishTitle,
    }));

  return { categories };
}
