import { eq } from "drizzle-orm"
import { clerkClient, getAuth } from "vue-clerk/server"
import { db } from "~/server/db"
import { propertyTable } from "~/server/db/schema"
import { Result } from "~/utils/result"


export const loader = defineServerLoader(async (event) => {
    const { agentId } = getQuery(event)

    if (!agentId) {
        throw new Error("No agent provided.")
    }

    const authClient = clerkClient(event)

    const userDetails = await authClient.users.getUser(agentId.toString())

    const propertiesForAgent = await Result.fromAsync(() => db.select().from(propertyTable).where(eq(propertyTable.userId, agentId.toString())))

    if (propertiesForAgent.isError()) {
        throw new Error("Could not find properties for agent.")
    }


    return { properties: propertiesForAgent.getOrThrow(), agentName: userDetails.fullName }
})