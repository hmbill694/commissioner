import { toast } from "vue3-toastify"

export default function saveToClipboard() {
    return {
        saveString: (stringToSave: string) => {
            navigator.clipboard.writeText(stringToSave)
                .then(() => {
                    toast.info("Successfully saved to Clipboard!")
                })
        }
    }
}
