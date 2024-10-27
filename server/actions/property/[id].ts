import { eq } from "drizzle-orm"
import { db } from "~/server/db"
import { propertyTable } from "~/server/db/schema"
import { Result } from "~/utils/result"

export const loader = defineServerLoader(async (event) => {
    const { id } = getQuery(event)

    if (!id) {
        throw new Error("No property ID provided.")
    }

    db.query.propertyTable.findFirst({
        with: {
            id
        }
    })

    const properties = await Result.fromAsync(() => db.select().from(propertyTable).where(eq(propertyTable.id, id.toString())))

    if (properties.isError()) {
        throw new Error("Could not find properties for agent.")
    }

    return { property: properties.getOrThrow().at(0) }
})