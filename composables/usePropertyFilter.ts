import type { Property } from "~/server/db/schema"

export const usePropertyFilter = ({ properties }: {properties: Property[]}) => {
    const filterString = useState("filter-string", () => "")

    const filteredProperties = computed(() => {
        const lowercaseSearch = filterString.value.toLocaleLowerCase()
        return properties.filter(property =>
            property.name?.toLowerCase().includes(lowercaseSearch) || property.address.toLocaleLowerCase().includes(lowercaseSearch)
        )
    })

    return {
      filteredProperties,
      filterString
    }
  }
