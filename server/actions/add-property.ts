import { db } from "../db"
import { v4 as uuidv4, v4 } from 'uuid';
import { Property, PropertyInsert, propertyTable } from "../db/schema"
import z from "zod";
import { getAuth } from "vue-clerk/server";
import { Result } from "~/utils/result";

const createPropertySchema = z.object({
    name: z.string().optional(),
    description: z.string().optional(),
    address: z.string(),
    askingPrice: z.string(),
    commissionRate: z.string()
})


export default defineFormActions({
    create: async (event) => {
        const formData = await readFormData(event)

        const { userId } = getAuth(event)

        if (userId === null) {
            return actionResponse(
                event,
                { invalid: true },
                { error: { message: "Please login to create a property." } }
            )
        }

        const { success, data, error } = createPropertySchema.safeParse({
            name: formData.get("name"),
            description: formData.get("description"),
            address: formData.get("address"),
            commissionRate: formData.get("commissionRate"),
            askingPrice: formData.get("askingPrice")
        })


        if (!success) {
            return actionResponse(
                event,
                { invalid: true },
                { error: { message: error.issues.map(ele => `${ele.path.join("/")}-${ele.message}`).join(", ") } }
            )
        }

        const property: PropertyInsert = {
            ...data,
            userId,
            id: v4(),
            createdAt: undefined,
            updatedAt: null
        }


        const insertResult = await Result.fromAsync(() => db.insert(propertyTable).values(property).returning())

        if (insertResult.isError()) {
            return actionResponse(
                event,
                { invalid: true },
                { error: { message: "Could not save your Property. Please try again." } }
            )
        }

        return actionResponse(
            event,
            { invalid: false, property: insertResult.getOrThrow().at(0) },
            { redirect: "/" }
        )
    }
})