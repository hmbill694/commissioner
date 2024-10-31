import { eq } from "drizzle-orm"
import { db } from "~/server/db"
import { propertyTable } from "~/server/db/schema"
import { Result } from "~/utils/result"

export const loader = defineServerLoader(async (event) => {
    const { id } = getQuery(event)

    if (!id) {
        throw createError({
            statusCode: 400,
            statusMessage: 'No property ID provided.'
          })
    }

    const properties = await Result.fromAsync(() => db.select().from(propertyTable).where(eq(propertyTable.id, id.toString())))

    if (properties.isError()) {
        throw createError({
            statusCode: 404,
            statusMessage: 'Could not find property details.'
          })
    }

    return { property: properties.getOrThrow().at(0) }
})