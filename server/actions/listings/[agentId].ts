import { eq } from "drizzle-orm"
import { clerkClient, getAuth } from "vue-clerk/server"
import { db } from "~/server/db"
import { propertyTable } from "~/server/db/schema"
import { Result } from "~/utils/result"


export const loader = defineServerLoader(async (event) => {
    const { agentId } = getQuery(event)

    if (!agentId) {
        throw createError({
            statusCode: 400,
            statusMessage: 'No agent ID provided.'
        })
    }

    const authClient = clerkClient(event)

    const userDetails = await authClient.users.getUser(agentId.toString())

    const propertiesForAgent = await Result.fromAsync(() => db.select().from(propertyTable).where(eq(propertyTable.userId, agentId.toString())))

    if (propertiesForAgent.isError()) {
        throw createError({
            statusCode: 400,
            statusMessage: 'Could not find properties for agent.'
        })
    }


    return { properties: propertiesForAgent.getOrThrow(), agentName: userDetails.fullName }
})