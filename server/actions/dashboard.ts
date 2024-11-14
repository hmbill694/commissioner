import { getAuth } from "vue-clerk/server"
import { db } from "../db"
import { propertyTable } from "../db/schema"
import { eq } from "drizzle-orm"
import { Result } from "~/utils/result"

export default defineFormActions({
    delete: async (event) => {
        const form = await readFormData(event)

        const propertyId = form.get("id")?.toString()

        if (!propertyId) {
            return actionResponse(
                event,
                { invalid: true },
                {error: { message: "No property ID provided" }}
            )
        }

        const selectResult = await Result.fromAsync(() => db.select().from(propertyTable).where(eq(propertyTable.id, propertyId)))

        if(selectResult.isError()) {
            return actionResponse(
                event,
                { invalid: true },
                {error: { message: `Could not get Property with ID of ${propertyId}` }}
            )
        }

        const [ property ] = selectResult.getOrThrow()


        await db.delete(propertyTable).where(eq(propertyTable.id, property.id))

        return actionResponse(
            event,
            { invalid: false },
            { redirect: "/dashboard" }
        )
    },
    markSold: async (event) => {
        const form = await readFormData(event)

        const propertyId = form.get("id")?.toString()

        if (!propertyId) {
            return actionResponse(
                event,
                { invalid: true },
                {error: { message: "No property ID provided" }}
            )
        }

        const selectResult = await Result.fromAsync(() => db.select().from(propertyTable).where(eq(propertyTable.id, propertyId)))

        if(selectResult.isError()) {
            return actionResponse(
                event,
                { invalid: true },
                {error: { message: `Could not get Property with ID of ${propertyId}` }}
            )
        }

        const [ property ] = selectResult.getOrThrow()


        await db.delete(propertyTable).where(eq(propertyTable.id, property.id))

        return actionResponse(
            event,
            { invalid: false },
            { redirect: "/dashboard" }
        )
    }
})

export const loader = defineServerLoader(async (event) => {
    const { userId } = getAuth(event)

    if (userId === null) {
        throw createError({
            statusCode: 401,
            message: "Could not get user id for requester."
        })
    }

    const properties = await Result.fromAsync(() => db.select().from(propertyTable).where(eq(propertyTable.userId, userId)))

    if (properties.isError()) {
        throw createError({
            statusCode: 500,
            message: "Was unable to get your properties at this time."
        })
    }

    return { properties: properties.getOrThrow(), userId}
})