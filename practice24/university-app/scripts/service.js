
const URL_UNIVER = 'http://universities.hipolabs.com/search?country='


const getResource = async(url) => {
    try {
        const res = await fetch(url);
        return res.json();
    } catch (err) {
        throw new Error(`!!!!!!!!!!! ${err}`)
    }
}

const getListUniver = async (country = 'belarus') => {
    const data = await getResource(`${URL_UNIVER}${country}`)
    // console.log(data)
    return data;
}


// getListUniver()