import js
import asyncio

async def read_csv():
    response = await js.fetch("data.csv")
    text = await response.text()
    lines = text.splitlines()
    return lines[0]  # Return first line

output = await read_csv()
output
