

export function textFormat(text: string) {
    console.log("server is running");
    const pattern = /[ก-ฮ]/gi
    const txt = text.match(pattern)

    return txt
}
