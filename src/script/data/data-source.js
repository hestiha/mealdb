class DataSource {
    static searchRecipe(keyword) {
        return fetch(`www.themealdb.com/api/json/v1/1/search.php?s=${keywoard}`)
            .then(response => {
                return response.json()
            })
            .then(responseJson => {
                if (responseJson.results) {
                    return Promise.resolve(responseJson.results);
                } else {
                    return Promise.reject(`${keyword} is not found`)
                }
            })
    }
}

export default DataSource;