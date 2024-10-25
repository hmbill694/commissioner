import { getAuth } from "vue-clerk/server"
import { db } from "../db"
import { Property, propertyTable } from "../db/schema"
import { eq } from "drizzle-orm"
import { Result } from "~/utils/result"

export const loader = defineServerLoader(async (event) => {
    const { userId } = getAuth(event)

    if (userId === null) {
        return { invalid: true, properties: [] as Property[], error: "Was unable to get your properties at this time." }
    }

    const properties = await Result.fromAsync(() =>  db.select().from(propertyTable).where(eq(propertyTable.userId, userId)))

    if(properties.isError()) {
        return { invalid: true, properties: [] as Property[], error: "Was unable to get your properties at this time." }
    }

    return { invalid: false, properties: properties.getOrThrow() }
  })