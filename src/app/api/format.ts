"use server"

const url = process.env.API_URL

const formatText = async (text: string) => {
    let result: string = ""

    await fetch(`${url}`, {
        method: 'POST',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify({ text: text })
    }).then((res) => res.json())
        .then((data) => result = data['result'])
        .catch((error) => result = error);

    return result
}

export default formatText