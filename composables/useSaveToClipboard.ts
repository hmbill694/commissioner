function saveToClipboard() {
    console.log(`${window.location.href}listings/${result.value?.userId}`)
    navigator.clipboard.writeText(`${window.location.href}listings/${result.value?.userId}`).then(() => {
        console.log("Saved to clipboard")
    })
}
