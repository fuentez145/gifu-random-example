const GetItems = async () => {
    const response = await fetch('https://api.restful-api.dev/objects');
    const data = await response.json();
    return data;
}

const getObjectItem = async (id : number) => {
    const response = await fetch(`https://api.restful-api.dev/objects/${id}`);
    const data = await response.json();
    return data;
}

export default GetItems;